import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const changeFilterHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const expensesContent =
    filteredExpenses.length === 0 ? (
      <p>No expenses found</p>
    ) : (
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={changeFilterHandler} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
