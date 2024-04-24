import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const HeaderContainer = styled.header`
  //header vai pegar toda a width
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  //vai centralizar o conteudo dentro da header
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled(Dialog.Trigger)`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`

export const ButtonGoogle = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme['gray-700']};

  height: 2rem;
  width: 12rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  align-items: center;
  cursor: pointer;

  border: 0;
  border-radius: 8px;

  background: ${(props) => props.theme['green-500']};
  transition: background-color 0.2s;

  &:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['green-300']};
  }

  img {
    margin-right: 8px;
  }
`
