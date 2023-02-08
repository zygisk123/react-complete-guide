import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import React, {useState} from 'react';
import Card from "../UI/Card";
import "./ExpensesStyle.css";

function Expenses(props)
{
    const [filterYear, setFilterYear] = useState('2023');
    const getFilterYear = (selectedYear) =>
    {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {return expense.date.getFullYear() == filterYear;})
    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear = {filterYear} onFilterDataChange={getFilterYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;