import * as Dialog from '@radix-ui/react-dialog'
import { styled as styledStitches } from '@stitches/react'
import { styled } from 'styled-components'

export const Overlay = styledStitches(Dialog.Overlay, {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    inset: 0,
    background: '#00000075'

})

export const Content = styledStitches(Dialog.Content, {
    minWidth: '32rem',
    borderRadius: '6px',
    padding: '2.5rem 3rem',

    background: '#202024',

    //hack para centrarlizar coisas na tela
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform:'translate(-50%, -50%)' 
})

export const CloseButton = styledStitches(Dialog.Close, {
    position: 'absolute',
    background: 'transparent',
    border: 0,
    top: '1.5rem',
    right: '1.5rem',
    lineHeight: 0,
    cursor: 'pointer'
})

export const Form = styled.form`
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-900']};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }
    }

    button {
            height: 58px;
            border: 0;
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 6px;
            margin-top: 1.5rem;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme['green-700']};
                transition: background-color 0.2s;
            }
        }
`