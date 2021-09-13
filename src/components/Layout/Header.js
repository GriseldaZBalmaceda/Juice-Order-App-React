import React,{Fragment} from 'react'
import juiceBanner from '../../assets/juice-banner.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = props => {
    return  <Fragment>
        <header className={styles.header}>
            <h1>Main Squeeze</h1>
            <HeaderCartButton onClick={props.onShowCartModal}/>
        </header>
        <div className={styles['main-image']}>
            <img src={juiceBanner} alt="juice banner" />
        </div>
    </Fragment>
}

export default Header;