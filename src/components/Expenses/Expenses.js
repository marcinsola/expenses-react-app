import { useState } from "react";
import styles from './Expenses.module.css';

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(
        expense => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        < Card className={styles.expenses}>
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses;