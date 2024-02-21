import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("The Budget cannot exceed £ 20 000");
            
            return;
        }
        if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending of £ "+totalExpenses);
            
            return;
        }

        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></span>

</div>
    );
};
export default Budget;
