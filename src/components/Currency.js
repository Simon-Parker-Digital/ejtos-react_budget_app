import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, setCurrency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
        setCurrency(newCurrency);
    }
    return (
        <div>
            <select name="currency" id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
