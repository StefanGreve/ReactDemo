import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Book",
    amount: 19.99,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 214.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: "e3",
    title: "Mortgage",
    amount: 152.89,
    date: new Date(2022, 4, 28),
  },
  {
    id: "e4",
    title: "Groceries",
    amount: 38.69,
    date: new Date(2022, 4, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
