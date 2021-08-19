import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    if (props.expenses.length === 0) {
        return <h2 className={styles['expenses-list__fallback']}>No expenses found.</h2>
    }

    return (
        <ul className={styles["expenses-list"]}>
            {props.expenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    amount={expense.amount}
                    title={expense.title} />
            )}
        </ul>
    )
}

export default ExpensesList;