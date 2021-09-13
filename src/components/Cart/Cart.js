import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BlueJuice from '../../assets/BlueJuice.jpg'

const Cart = props => {
const cartCtx = useContext(CartContext)
const juiceItems = (
<ul className={styles['juice-items']}>
    <div className={styles.juiceItem}>
        <div className={styles.juiceImage}><img alt="blue juice" src={BlueJuice}/></div>
        <div className={styles.juiceName}>
            <h3>Berry Blast</h3>
            <p className={styles.milli}>250ml</p>
        </div>
        <div className={styles.actionButtons}><FontAwesomeIcon className={styles.add} icon="plus-circle" /> 3 <FontAwesomeIcon className={styles.remove} icon="minus-circle" /></div>
        <div className={styles.juicePrice}>7.50</div>
    </div>
    {cartCtx.items.map((item)=> (<li key={item.id}>{item.name} {item.amount}</li>))}</ul>);
return(
    <Modal closeModal={props.onHideCartModal}>
        {juiceItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--myAlt']} onClick={props.onHideCartModal}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>
)
}

export default Cart;