import { ReactNode, useEffect, useState, useCallback } from 'react'
import { ITransaction } from '../pages/Transactions'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface ICreateTransaction {
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
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransactions = useCallback(async () => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(response.data)
  }, [])

  const queryTransactions = useCallback(async (query: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        description: query,
      },
    })

    const responseDescriptionData = response.data

    if (responseDescriptionData.length > 0) {
      console.log(responseDescriptionData, 'responseDescriptionData')
      setTransactions(response.data)
    }

    const responseCategory = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        category: query,
      },
    })

    const responseCategoryData = responseCategory.data

    if (responseCategoryData.length > 0) {
      setTransactions(responseCategory.data)
    }
  }, [])

  const createTransaction = useCallback(async (data: ICreateTransaction) => {
    const { description, category, price, type } = data

    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        queryTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
