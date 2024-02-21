import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, Form, CloseButton } from './styles'
import { X } from 'phosphor-react'

export function NewTransactionModal() {
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

                    <button type='submit'>
                        Cadastrar
                    </button>
                </Form>
            </Content>
        </Dialog.Portal>
    )
}