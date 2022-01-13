import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance1",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance2",
      amount: 314.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance3",
      amount: 324.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Car Insurance4",
      amount: 334.67,
      date: new Date(2022, 2, 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
