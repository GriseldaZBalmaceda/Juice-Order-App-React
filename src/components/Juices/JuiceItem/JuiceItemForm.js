import styles from './JuiceItemForm.module.css';
import Input from '../../UI/Input';
import React, {useRef,useState} from 'react'

const JuiceItemForm = props => { 
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

const submitHandler = event =>{
    event.preventDefault();
    const eneteredAmount = +amountInputRef.current.value;
    if (eneteredAmount < 1 || eneteredAmount > 5) {
        setAmountIsValid(false);
    } else {
        props.onAddToCart(eneteredAmount)
    }
}

return <form className={styles.form} onSubmit={submitHandler}>
    <Input 
        ref={amountInputRef}
        label="Amount" 
        input={{
            id:'amount_' + props.id, 
            type:'number', 
            min: '1', 
            max:'5',
            step:'1',
            defaultValue: '1'
        }} 
    />
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid Input (1-5)</p>}
</form>
}

export default JuiceItemForm;