import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, Form, CloseButton, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useState } from 'react'


export function NewTransactionModal() {
    const [isChecked, setIsChecked] = useState<null | 'income' | 'outcome'>(null)
    return (
        <Dialog.Portal> {/*Portal = abrir em outro elemento, sair do Header um "display absolute"*/}
            <Overlay /> {/*Abaixar a opacidade*/}
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton   >
                <Form>
                    <input type='text' placeholder='Descrição'  required/>
                    <input type='number' placeholder='Preço'  required/>
                    <input type='text' placeholder='Categoria'  required/>

                    <TransactionType>
                    <TransactionTypeButton 
                        variant='income' 
                        type='button' 
                        onClick={() => setIsChecked('income')} 
                        isSelected={isChecked === 'income'}
                    >
                        <ArrowCircleUp size={24} />
                        Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton 
                        variant='outcome'
                        type='button' 
                        onClick={() => setIsChecked('outcome')} 
                        isSelected={isChecked === 'outcome'}
                    >
                        <ArrowCircleDown size={24} />
                        Saída
                    </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>
                        Cadastrar
                    </button>
                </Form>
            </Content>
        </Dialog.Portal>
    )
}