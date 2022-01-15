import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const changeFilterHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={changeFilterHandler} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
