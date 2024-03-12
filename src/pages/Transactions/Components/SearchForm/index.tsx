import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const queryTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.queryTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    console.log(data)
    await queryTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        Buscar
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
/* 
    O Memo não permite reenderizações desnecessárias
    só ira reenderizar se houver mudança nas props ou nos hooks do componente. 
    Só colocar se exitir muita complexidade na renderização do componente,
    se tiver basntante condicionais e etc 

    Nesse componente não precisaria do memo... pois a comparação de props e hooks mais profunda que o memo faz 
    é mais custosa do que a comparação padrão de alteração de HTML que o react faz por padrão
*/
