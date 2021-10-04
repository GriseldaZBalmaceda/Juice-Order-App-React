import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import React, {useContext, useState} from 'react'
import CartContext from '../../store/cart-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Checkout from './Checkout'
// import BlueJuice from '../../assets/BlueJuice.jpg'

const Cart = props => {
const [isCheckout, setIsCheckout] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [didSubmit, setDidSubmit] = useState(false)
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
const orderHandler =()=>{
    setIsCheckout(true)
}
const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch('https://mainsqueeze-fc349-default-rtdb.firebaseio.com/orders.json',{
        method:'POST',
        body: JSON.stringify({
            user: userData,
            orderedItems:cartCtx.juiceItems
        })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart()

    
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
const modalActions = isCheckout ?  <Checkout onOrder={submitOrderHandler} onCancel={props.onHideCartModal} /> : <div className={styles.actions}>
    <button className={styles['button--myAlt']} onClick={props.onHideCartModal}>Close</button>
    <button className={styles.button} onClick={orderHandler}>Order</button>
</div>
const cartModalContent = <React.Fragment>
                            <div className={styles.juicesContainers}>
                                {juiceItems}
                                <div className={styles.total}>
                                    <span>Total Amount</span>
                                    <span>{cartCtx.totalAmount}</span>
                                </div>
                                {modalActions}
                            </div>
                        </React.Fragment>
const isSubmittingModalContent = <p>Sending order data...</p>
const didSubmitModalContent = <React.Fragment>
                                <p>Order was sent!</p>
                            </React.Fragment>
return(
    <Modal closeModal={props.onHideCartModal}>
        {!isSubmitting && !didSubmit && cartModalContent} 
        {isSubmitting && isSubmittingModalContent}  
        {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
)
}

export default Cart;