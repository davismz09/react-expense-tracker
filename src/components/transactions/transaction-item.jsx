/* eslint-disable react/prop-types */
import {useGlobalState} from "../../context/global-state.jsx";

export function TransactionItem({transaction}) {
  const {deleteTransaction} = useGlobalState();

  return (
    <li className='bg-zinc-600 text-white px-4 py-3 rounded-lg mb-2 w-full flex justify-between items-center'>
      <p className='text-sm flex-1 mr-4'>{transaction.description}</p>
      <div className='flex items-center'>
        <span
          className={`mr-2 ${
            transaction.amount > 0 ? "text-green-400" : "text-red-400"
          }`}>
          ${transaction.amount}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className='text-red-400 hover:text-red-600 focus:outline-none'>
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </button>
      </div>
    </li>
  );
}
