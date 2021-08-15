import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './ExpenseList.css';

const ExpenseList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(
        expense => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        < Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.map(
                expense => <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    amount={expense.amount}
                    title={expense.title} />
            )}
        </Card>
    )
}

export default ExpenseList;