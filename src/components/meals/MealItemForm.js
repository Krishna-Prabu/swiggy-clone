import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';

import Input from './Input';
const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true);
    const amountInpRef = useRef(); 
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInpRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountValid(false);    
            return;
        }
        props.onAddAmount(enteredAmountNumber);
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input input={
                {
                
                id: 'amount_' + props.id,
                min: '1',
                max: '10',
                step: '1',
                type: 'number',
                defaultValue: '1'
                }} label="Amount" ref = {amountInpRef}/>
            <button>+ Add</button>
            {!amountValid && <p>Please Enter Valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;
