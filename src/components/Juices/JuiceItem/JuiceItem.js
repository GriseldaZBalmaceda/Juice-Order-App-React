import styles from './JuiceItem.module.css'
import React from 'react';
import JuiceItemForm from './JuiceItemForm'
const JuiceItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
return <li className={styles.juice}>
    <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
    </div>
    <div>
        <JuiceItemForm />
    </div>
</li>
}

export default JuiceItem;