import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return(
        <div>
            <Header />
            <Summary/>

            <TransactionContainer>
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width={'40%'} >Desenvolvimento do site</td>
                        <td>
                            <PriceHighLight variant="income">
                            R$ 12.000,00
                            </PriceHighLight>
                            
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>

                    <tr>
                        <td width={'40%'} >Desenvolvimento do site</td>
                        <td><PriceHighLight variant="outcome">
                            R$ 12.000,00
                            </PriceHighLight></td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>

                    <tr>
                        <td width={'40%'}>
                            Desenvolvimento do site
                        </td>
                        <td>
                            <PriceHighLight variant="income">
                                R$ 12.000,00
                            </PriceHighLight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>
            </TransactionContainer>
        </div>
    )
}