import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { TransactionContainer } from "./styles";
import { TransactionsTable } from "./Components/TransactionTable";
import { ExpensePieChart } from "./Components/TransactionTypesChart";
import { TransactionTypesOut } from "../../types/transactionTypes";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export interface ITransaction {
  id: string;
  description: "string";
  type: "income" | "outcome";
  price: number;
  category: string;
  createdDate: string;
  userId: string;
}

export interface IExpanses {
  type: string;
  value: number;
}
[];

export function Transactions() {
  const { countTransactionsCategory } = useContextSelector(
    TransactionsContext,
    (context) => {
      return context;
    }
  );

  const expenses = TransactionTypesOut
    .map((type) => ({
      type,
      value: countTransactionsCategory(type),
    }))
    .filter((item) => item.value > 0)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable />
      </TransactionContainer>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Distribuição de Gastos</h2>
        <ExpensePieChart data={expenses} />
      </div>
    </div>
  );
}
