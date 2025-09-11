import * as Dialog from '@radix-ui/react-dialog'
import { styled as styledStitches } from '@stitches/react'
import { css, styled } from 'styled-components'
import { getWidthDimensions } from '../../utils/getDimensions'

const { screenWidth } = getWidthDimensions()

export const Overlay = styledStitches(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: '#00000075',
})

export const Content = styledStitches(Dialog.Content, {
  minWidth: screenWidth > 600 ? '32rem' : '22rem',
  borderRadius: '6px',
  padding: '2.5rem 3rem',

  background: '#202024',

  // hack para centrarlizar coisas na tela
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const CloseButton = styledStitches(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
})

export const Form = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button[type='submit'] {
    height: 58px;
    border: 0;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
    }
  }
`

export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
  isSelectedType: boolean
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  ${(props) =>
    props.variant === 'income' &&
    props.isSelectedType &&
    css`
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-500']};
      svg {
        color: ${(props) => props.theme.white};
      }
    `}

  ${(props) =>
    props.variant === 'outcome' &&
    !!props.isSelectedType &&
    css`
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['red-500']};
      svg {
        color: ${(props) => props.theme.white};
      }
    `}
    
    ${(props) =>
    !props.isSelectedType &&
    css`
      &:hover {
        transition: background-color 0.2s;
        background: ${(props) => props.theme['gray-600']};
      }
    `}
`

// components/Select.tsx

export const Select = styled.select`
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 1rem;

  &:focus {
    outline: 2px solid ${(props) => props.theme["green-500"]};
  }

  option {
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
  }
`;
