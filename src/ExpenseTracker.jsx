import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function ExpenseTracker() {
    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
}

export default ExpenseTracker;