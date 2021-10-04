import styles from './Checkout.module.css';
import {useRef, useState} from 'react';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
    const [formInputsValidity, setValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    })
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetValid = !isEmpty(enteredStreet);
        const enteredCityValid = !isEmpty(enteredCity);
        const eneteredPostalValid = isFiveChars(enteredPostalCode);

        setValidity({
            name: enteredNameIsValid,
            street: enteredStreetValid,
            city: enteredCityValid,
            postal: eneteredPostalValid
        })
        const formIsValid = enteredNameIsValid && enteredStreetValid && enteredCityValid && eneteredPostalValid;

        if(!formIsValid){
           return;
        }
        props.onOrder({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostalCode
        })

    }
    return <form onSubmit={confirmHandler}>
        <div className={`${styles.control} ${formInputsValidity.name ? ' ':  styles.invalid}`}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={`${styles.control} ${formInputsValidity.street ? ' ':  styles.invalid}`}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInputRef} /> 
            {!formInputsValidity.street && <p>Please enter a street name!</p>} 
        </div>
        <div className={`${styles.control} ${formInputsValidity.postal ? ' ':  styles.invalid}`}>
            <label htmlFor="postal">Postal</label>
            <input type="text" id="postal" ref={postalInputRef} /> 
            {!formInputsValidity.postal && <p>Please enter a valid postal code!</p>} 
        </div>
        <div className={`${styles.control} ${formInputsValidity.city ? ' ':  styles.invalid}`}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInputRef}/>  
            {!formInputsValidity.city && <p>Please enter a valid city!</p>}
        </div>
        <button type="button" onClick={props.onCancel}>Cancel </button>
        <button>Confirm</button>
    </form>
};

export default Checkout