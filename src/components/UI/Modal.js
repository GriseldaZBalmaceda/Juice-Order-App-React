import React from 'react';
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.closeModal}></div>
}

const Modal = (props) => {

    return (
      <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop closeModal={props.closeModal} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <div className={styles.modal}>
                    {props.children}
                </div>,
                document.getElementById('modal-root')
            )}
      </React.Fragment>       
    )
};

export default Modal