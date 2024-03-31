import {GlobalProvider} from "./context/global-state.jsx";
import Balance from "./components/balance.jsx";
import TransactionForm from "./components/transactions/transaction-form.jsx";
import TransactionList from "./components/transactions/transaction-list.jsx";
import IncomeExpenses from "./components/income-expenses.jsx";
import {ExpenseChart} from "./components/expense-chart.jsx";
function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white min-h-screen flex justify-center items-center py-2'>
        <div className='container mx-auto w-3-6'>
          <div className='bg-zinc-800 p-10 rounded-lg flex flex-col md:flex-row flex-1 gap-x-3'>
            <div className='flex flex-col flex-auto'>
              <h1 className='text-4xl font-bold'>Expense Tracket</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>

            <div className='flex flex-col flex-auto justify-between'>
              <div className='md:w-96 self-center'>
                <ExpenseChart />
              </div>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
