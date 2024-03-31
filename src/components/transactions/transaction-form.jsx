import {useState} from "react";
import {useGlobalState} from "../../context/global-state.jsx";

function TransactionForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useGlobalState();

  const isValidTransaction = () => description !== "" && amount > 0;

  const resetInputFields = () => {
    setDescription("");
    setAmount(0);
  };

  const handleIncome = () => {
    if (isValidTransaction()) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: +amount,
      });
    }
  };

  const handleExpense = () => {
    if (isValidTransaction()) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: -Math.abs(+amount),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidTransaction() && resetInputFields();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter a description'
          onChange={(e) => setDescription(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 block rounded-lg mb-2 w-full'
          value={description}
          name='description'
          required
        />
        <input
          type='number'
          step='0.01'
          placeholder='00.00'
          onChange={(e) => setAmount(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 block rounded-lg mb-2 w-full'
          value={amount}
          name='amount'
          required
        />
        <div className='w-full flex gap-2'>
          <button
            onClick={handleIncome}
            className='bg-green-500 text-white px-3 py-2 rounded-lg mb-2 w-full'>
            Add Income
          </button>
          <button
            onClick={handleExpense}
            className='bg-red-500 text-white px-3 py-2 rounded-lg mb-2 w-full'>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
