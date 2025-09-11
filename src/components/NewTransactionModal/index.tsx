import { useEffect, useState } from 'react'
import * as z from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  Overlay,
  Content,
  Form,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
  Select
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { toast } from 'sonner'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction, transactions } = useContextSelector(
    // consumindo o selector para selecionar o que do contexto eu estou utilizando (createContext) para evitar reenderizar quando a propriedade de transactions atualizar
    TransactionsContext,
    (context) => {
      return context
    },
  )
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const [isChecked, setIsChecked] = useState<null | 'income' | 'outcome'>(null)

  const isDisabledButton =
    !getValues('category') || !getValues('description') || !getValues('price')

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, category, price, type } = data

    if (transactions.length >= 50) {
      toast.error('Limite de transações atingida.', {
        position: 'top-right',
      })

      resetForm()
      return
    }

    await createTransaction({
      description,
      category,
      price,
      type,
    })

    resetForm()
  }

  const resetForm = () => {
    reset()
    setIsChecked(null)
  }

  useEffect(() => {
    if (isChecked) setValue('type', isChecked)
  }, [isChecked, setValue])

  return (
    <Dialog.Portal>
      {/* Portal = abrir em outro elemento, sair do Header um "display absolute" */}
      <Overlay /> {/* Abaixar a opacidade */}
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register('description')}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            placeholder="Preço"
            required
          />
          <Select {...register("category", { required: true })} defaultValue="">
  <option value="" disabled>
    Selecione uma categoria
  </option>
  <option value="lazer">Lazer</option>
  <option value="contas">Contas</option>
  <option value="alimentacao">Alimentação</option>
  <option value="transporte">Transporte</option>
  <option value="investimentos">Investimentos</option>
</Select>


          

          <TransactionType>
            <TransactionTypeButton
              variant="income"
              type="button"
              onClick={() => setIsChecked('income')}
              isSelectedType={isChecked === 'income'}
            >
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton
              variant="outcome"
              type="button"
              onClick={() => setIsChecked('outcome')}
              isSelectedType={isChecked === 'outcome'}
            >
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting || isDisabledButton}>
            Cadastrar
          </button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
