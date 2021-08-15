import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './ExpenseList.css';

const ExpenseList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const renderedExpenses = props.expenses.map(
        expense => <ExpenseItem date={expense.date}
            amount={expense.amount}
            title={expense.title} />
    );

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    return (
        < Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
            {renderedExpenses}
        </Card>
    )
}

export default ExpenseList;