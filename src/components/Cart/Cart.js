import styles from './Cart.modules.css'
const Cart = props => {
const juiceItems = <ul className={styles['juice-items']
    [{id:'c1', name: 'BlueberryBlast', amount:2 , price: 12.99}
].map((item)=> <li>{item.name}</li>)}></ul>
return(
    <div>
        {juiceItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </div>
)
}

export default Cart;