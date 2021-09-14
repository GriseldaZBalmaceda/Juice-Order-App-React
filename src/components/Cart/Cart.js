import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import BlueJuice from '../../assets/BlueJuice.jpg'

const Cart = props => {
const cartCtx = useContext(CartContext);
const addItem = (item) => {
    cartCtx.addItem({
        id:item.id,
        name:item.name,
        amount: 1,
        price: item.price,
        image: item.image
    })
}
const removeItem = (item) => {
    cartCtx.removeItem({
        id:item.id,
        amount: 1,
    })
}
const JuiceCartItem = (item) =>  (
    <ul className={styles['juice-items']}>
        <div className={styles.juiceItem}>
            <div className={styles.juiceImage}><img alt="blue juice" src={item.image}/></div>
            <div className={styles.juiceName}>
                <h3>{item.name}</h3>
                <p className={styles.milli}>250ml</p>
            </div>
            <div className={styles.actionButtons}>
                <FontAwesomeIcon className={styles.add} icon="plus-circle" onClick={()=>addItem(item)} /> 
                    {item.amount} 
                <FontAwesomeIcon className={styles.remove} icon="minus-circle" onClick={()=>removeItem(item)} /></div>
            <div className={styles.juicePrice}>{item.price}</div>
        </div>
    </ul>
    )
const juiceItems = cartCtx.items.map((item)=> (JuiceCartItem(item)));
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