import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './Components/SearchForm'
import {
  ButtonClose,
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'
import { X } from 'phosphor-react'

export interface ITransaction {
  id: number
  description: 'string'
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {
  const { transactions, removeTransaction } = useContextSelector(
    TransactionsContext,
    (context) => {
      return context
    },
  )

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width={'40%'}>{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <ButtonClose
                      onClick={() =>
                        removeTransaction(transaction.id.toString())
                      }
                    >
                      <X size={24} />
                    </ButtonClose>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}
