import styled from 'styled-components'

export const ContainerTransaction = styled.div`
  ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.25rem;
    background-color: transparent;
  }

  @media (max-width: 600px) {
    overflow-x: scroll;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem; //separar as bordas da tabela
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    svg {
      color: ${(props) => props.theme['gray-300']};
      transition: background-color 0.2s;
    }
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const TextEmpty = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`
