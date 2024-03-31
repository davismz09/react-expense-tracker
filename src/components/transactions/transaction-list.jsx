import {useGlobalState} from "../../context/global-state.jsx";
import {TransactionItem} from "./transaction-item.jsx";

function TransactionList() {
  const {transactions} = useGlobalState();

  return (
    <>
      <h3 className='text-slate-300 text-xl font-bold block text-center'>
        History
      </h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
