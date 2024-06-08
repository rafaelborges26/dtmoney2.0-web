import {
  ButtonGoogle,
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from './styles'
import LogoImg from '../../assets/icons/logo.svg'
import GoogleIcon from '../../assets/icons/google.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useContextSelector } from 'use-context-selector'
import { AuthContext } from '../../contexts/AuthContext'
export function Header() {
  const { SignInWithGoogle, user } = useContextSelector(
    // consumindo o selector para selecionar o que do contexto eu estou utilizando (createContext) para evitar reenderizar quando a propriedade de transactions atualizar
    AuthContext,
    (context) => {
      return context
    },
  )

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />

        {user?.id ? (
          <Dialog.Root>
            <NewTransactionButton>Nova transação</NewTransactionButton>
            <NewTransactionModal />
          </Dialog.Root>
        ) : (
          <ButtonGoogle onClick={SignInWithGoogle}>
            <img src={GoogleIcon} alt="Google" />
            Login com o Google
          </ButtonGoogle>
        )}
      </HeaderContent>
    </HeaderContainer>
  )
}
