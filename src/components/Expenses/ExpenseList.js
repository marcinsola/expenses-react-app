import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpenseList.css';

const ExpenseList = (props) => {
    const renderedExpenses = props.expenses.map(
        expense => <ExpenseItem date={expense.date}
            amount={expense.amount}
            title={expense.title} />
    );

    return (
        <Card className="expenses">
            {renderedExpenses}
        </Card>
    )
}

export default ExpenseList;