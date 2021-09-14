import styles from './JuiceItem.module.css'
import React, {useContext} from 'react';
import JuiceItemForm from './JuiceItemForm';
import CartContext from '../../../store/cart-context';
const JuiceItem = (props) => {
    const cartCtx = useContext(CartContext)
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount: amount,
            price: props.price,
            image: props.image
        })
    }
    const price = `$${props.price.toFixed(2)}`
return <li className={styles.juice}>
    <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
    </div>
    <div>
        <JuiceItemForm onAddToCart={addToCartHandler} />
    </div>
</li>
}

export default JuiceItem;