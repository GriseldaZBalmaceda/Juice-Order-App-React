import React from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
const [buttonBump, setButtonBump] = useState(false)
const cartCtx = useContext(CartContext);
const {items} = cartCtx
const btnClasses =  `${styles.button} ${buttonBump ? styles.bump : ''}`
const numberOfCartItems = items.reduce((curNumber, item)=>{
return curNumber + item.amount
},0);
useEffect(()=> {
    if(items.length === 0) {
        return
    }
    setButtonBump(true);
    const timer = setTimeout(()=>{
        setButtonBump(false)
    },300);
    return ()=>{
        clearTimeout(timer)
    }
},[items])
return <button className={btnClasses} onClick={props.onClick}>
    <span className={styles.icon}><CartIcon /></span>
    <span>Your Cart</span>
    <span className={styles.badge}>{numberOfCartItems}</span>
</button>
}

export default HeaderCartButton