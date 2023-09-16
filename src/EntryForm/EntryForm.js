import { useState } from 'react';
import style from './EntryForm.module.css';


function EntryForm(props) {

    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlyContribution, setYearlyContribution] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    const onChangeHandler = (event, type) => {
        if(type === 'current-savings') {
            setCurrentSavings(event.target.value);
            // console.log('Changed');
        } else if(type === 'yearly-contribution') {
            setYearlyContribution(event.target.value);
        } else if(type === 'expected-return') {
            setExpectedReturn(event.target.value);
        } else {
            setDuration(event.target.value);
        }
    }

    const resetForm = () => {
        setCurrentSavings('');
        setYearlyContribution("");
        setExpectedReturn("");
        setDuration("");
    }

    const sendFormData = (event) => {
        event.preventDefault();
        props.calculateHandler({'current-savings': currentSavings, 'yearly-contribution': yearlyContribution, 'expected-return': expectedReturn, 'duration': duration});
    }

    return (
        <form onSubmit={sendFormData} className={style.form}>
            <div className={style['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={(event) => onChangeHandler(event, 'current-savings')} value={currentSavings}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={(event) => onChangeHandler(event, 'yearly-contribution')} value={yearlyContribution}/>
                </p>
            </div>
            <div className={style['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={(event) => onChangeHandler(event, 'expected-return')} value={expectedReturn}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={(event) => onChangeHandler(event, 'duration')} value={duration}/>
                </p>
            </div>
            <p className={style.actions}>
                <button type="reset" onClick={resetForm} className={style.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={style.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default EntryForm;