import { ReactNode, useEffect, useState, useCallback } from 'react'
import { ITransaction } from '../pages/Transactions'
import { createContext, useContextSelector } from 'use-context-selector'
import { database } from '../services/firebase'
import { AuthContext } from '../contexts/AuthContext'

interface ICreateTransaction {
  id?: string
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: ITransaction[]
  fetchTransactions: () => Promise<void>
  queryTransactions: (query: string) => Promise<void>
  createTransaction: (data: ICreateTransaction) => Promise<void>
  removeTransaction: (id: string) => Promise<void>
  countTransactionsCategory: (category: string) => number
  
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const user = useContextSelector(AuthContext, (context) => {
    return context.user
  })

  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransactions = useCallback(async () => {
    const transactionRef = await database.ref('transactions').get()

    if (transactionRef) {
      const allTransactions: ITransaction[] = transactionRef.val()

      const parsedTansactions = Object.entries<ITransaction>(
        allTransactions,
      ).map(([key, value]) => {
        return {
          id: key,
          description: value.description,
          category: value.category,
          price: value.price,
          type: value.type,
          createdDate: value.createdDate,
          userId: value.userId,
        }
      })

      const filteredTransaction = parsedTansactions.filter(
        (transaction) => transaction.userId === user?.id,
      )
      setTransactions(filteredTransaction)
    }
  }, [user])

  const queryTransactions = useCallback(
    async (query: string) => {
      const transactionFiltered = transactions.filter((transaction) =>
        query.toUpperCase().includes(transaction.description.toUpperCase()),
      )

      if (transactionFiltered) {
        setTransactions(transactionFiltered)
      }
    },
    [transactions],
  )

  const countTransactionsCategory = useCallback(
    (category: string): number => {
      const transactionFiltered = transactions.filter((transaction) =>
        category.toUpperCase().includes(transaction.category.toUpperCase()),
      )

      
      const totalTransactionCategory = transactionFiltered.reduce(
        (sum, transaction) => sum + transaction.price,
        0,
      )

      return totalTransactionCategory
    },
    [transactions],
  )


  const createTransaction = useCallback(
    async (data: ICreateTransaction) => {
      const { description, category, price, type } = data

      const createdDate = new Date().toISOString()

      try {
        const transactionRef = database.ref('transactions')

        await transactionRef.push({
          category,
          description,
          price,
          type,
          userId: user?.id,
          createdDate,
        })
      } catch (error) {
        alert('Ocorreu um erro com a tentativa da criação')
      }

      fetchTransactions()
    },
    [user, fetchTransactions],
  )

  const removeTransaction = useCallback(
    async (id: string) => {
      try {
        await database.ref(`/transactions/${id}`).remove()

        const transactionUpdated = transactions.filter(
          (transaction) => transaction.id !== id,
        )
        setTransactions(transactionUpdated)
      } catch (error) {
        alert('Ocorreu um erro com a tentativa de exclusão')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [transactions],
  )

  useEffect(() => {
    if (user) fetchTransactions()
  }, [user, fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        queryTransactions,
        createTransaction,
        removeTransaction,
        countTransactionsCategory
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
