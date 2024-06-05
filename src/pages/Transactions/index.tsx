import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './Components/SearchForm'
import { TransactionContainer } from './styles'
import { TransactionsTable } from './Components/TransactionTable'

export interface ITransaction {
  id: string
  description: 'string'
  type: 'income' | 'outcome'
  price: number
  category: string
  createdDate: string
  userId: string
}

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable />
      </TransactionContainer>
    </div>
  )
}
