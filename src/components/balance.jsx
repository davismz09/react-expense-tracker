import {useGlobalState} from "../context/global-state";

function Balance() {
  const {transactions} = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className='flex justify-between items-center'>
      <h3>Your Balance</h3>
      <h1 className='text-2xl font-bold'>${total}</h1>
    </div>
  );
}

export default Balance;
