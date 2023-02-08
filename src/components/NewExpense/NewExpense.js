import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, {useState} from 'react';

const NewExpense = (props) => 
{
    const [newExpenseForm, setNewExpenseForm] = useState(false);

    const showNewExpenseForm = () =>
    {
      setNewExpenseForm(prevState => !prevState);
    }

    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData =
        {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onCreateNewExpense(expenseData);
    }

    return (
    <div className="new-expense">
        {
            newExpenseForm
                ?
                    (<ExpenseForm onFormSubmit={showNewExpenseForm} onExpenseDataSave = {saveExpenseDataHandler}/>)
                :
                    (<button onClick={showNewExpenseForm}>Show New Expense form</button>)
        }
    </div>
    );
}

export default NewExpense;