import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImg from '../../assets/icons/logo.svg'
export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}