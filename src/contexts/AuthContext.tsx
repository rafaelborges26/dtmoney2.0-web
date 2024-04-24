import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { auth, firebase } from '../services/firebase'

interface AuthProviderProps {
  children: ReactNode
}

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined
  SignInWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()

  const SignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing infomation from Google Account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }

  useEffect(() => {
    // verifica se já estava autenticado
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing infomation from Google Account')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    // quanto tiver um evento listener, após ele entrar em ação, se descadastrar desse metodo useEffect sempre no final
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        SignInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
