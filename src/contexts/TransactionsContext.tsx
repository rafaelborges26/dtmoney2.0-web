import { ReactNode, createContext, useEffect, useState } from 'react'
import { ITransaction } from '../pages/Transactions'

interface TransactionContextType {
    transactions: ITransaction[]
}

interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<ITransaction[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        console.log(response, 'response')
        console.log(data, 'data')        
        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions()
    },[])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}