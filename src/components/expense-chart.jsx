import {VictoryPie, VictoryLabel} from "victory";
import {useGlobalState} from "../context/global-state.jsx";

export function ExpenseChart() {
  const {transactions} = useGlobalState();
  let totalExpensePercentage = 0;
  let totalIncomePercentage = 0;

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)
    .toFixed(2);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0)
      .toFixed(2) * -1;

  if (totalIncome > 0) {
    totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100);
    totalIncomePercentage = 100 - totalExpensePercentage;
  } else {
    totalExpensePercentage = 100;
  }

  return transactions.length === 0 ? (
    <p className='text-gray-500 text-sm text-center'>No hay transacciones</p>
  ) : (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      animate={{
        duration: 2000,
      }}
      data={[
        {
          x: "Expense",
          y: totalExpensePercentage ? totalExpensePercentage : 0,
        },
        {
          x: "Income",
          y: totalIncomePercentage ? totalIncomePercentage : 0,
        },
      ]}
      labelRadius={({innerRadius}) => innerRadius + 50}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white",
            fontSize: 14,
          }}
        />
      }
    />
  );
}
