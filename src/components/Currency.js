import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { currency } = useContext(AppContext);
    const [setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);

    }
    return (
        <div>
            <select name="currency" id="currency" onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default ExpenseTotal;
