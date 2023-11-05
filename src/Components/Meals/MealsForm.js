import React, {useRef, useState} from "react";
import classes from './MealsForm.module.css';
import Input from "../UI/Input";

const MealsForm = props => {

    // const [amount, setAmount] = useState({
    //     id:'',
    //     amount: 1
    // });

    const [validateAmount, setValidateAmount] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();

        const amountString = amountRef.current.value;
        const amount = +amountString;

        // alert(amount);   

        if(amountString.trim().length === 0 || amount < 1 || amount > 5) {
            setValidateAmount(true);
            return;
        }

        props.addToCart(amount);
    };
    
    const clickHandler = () => {

    }

    const changeHandler = (event) => {
    //     setAmount({
    //         id:event.target.value});
    }
    
    const amountRef = useRef();

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountRef} input={{
                id:`${props.id}`,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue : '1'
            }} onChange={changeHandler}/>
            <button onClick={clickHandler}>
                + Add
            </button>
            {validateAmount && <p>Please enter a valid amount</p>}
        </form>
    );
};

export default MealsForm;