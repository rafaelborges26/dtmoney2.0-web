import { useContextSelector } from 'use-context-selector'
import {
  ButtonClose,
  PriceHighLight,
  Table,
  ContainerTransaction,
  TextEmpty,
} from './styles'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../../../utils/formatter'
import { X } from 'phosphor-react'

export function TransactionsTable() {
  const { transactions, removeTransaction } = useContextSelector(
    TransactionsContext,
    (context) => {
      return context
    },
  )
  return (
    <>
      {transactions.length > 0 ? (
        <ContainerTransaction>
          <Table>
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
                      {dateFormatter.format(new Date(transaction.createdDate))}
                    </td>
                    <td>
                      <ButtonClose
                        onClick={() => removeTransaction(transaction.id)}
                      >
                        <X size={24} />
                      </ButtonClose>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </ContainerTransaction>
      ) : (
        <div>
          <TextEmpty>
            Ainda não há transações. Por favor, adicione uma nova.
          </TextEmpty>
        </div>
      )}
    </>
  )
}
