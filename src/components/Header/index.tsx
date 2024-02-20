import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImg from '../../assets/icons/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="" />

                <Dialog.Root>
                    <NewTransactionButton>Nova transação</NewTransactionButton>

                <Dialog.Portal> {/*Portal = abrir em outro elemento, sair do Header um "display absolute"*/}
                    <Dialog.Overlay /> {/*Abaixar a opacidade*/}
                    <Dialog.Content>
                        <Dialog.Title>Nova transação</Dialog.Title>
                        <Dialog.Close />
                    </Dialog.Content>
                </Dialog.Portal>
                

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}