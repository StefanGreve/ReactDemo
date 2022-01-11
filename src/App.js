import React from "react";
import Expenses from "./components/Expenses";

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
  return (
    <div>
      <h1>Let&apos;s get started!</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
