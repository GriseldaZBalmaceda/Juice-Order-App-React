import styles from './Input.module.css';

const Input = props => {
return <div className={styles.input} >
    <label htmlFor={props.input.id} className>{props.label}</label>
    <input {...props.input}/>
</div>
}

export default Input