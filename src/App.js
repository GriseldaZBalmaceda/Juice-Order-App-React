import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Juices from './components/Juices/Juices';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  let [cartShown,setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true)
  }
  const hideCartHandler = () => {
    setCartShown(false)
  }
  return (
    <CartProvider>
      {cartShown && <Cart onHideCartModal={hideCartHandler} />}
      <Header onShowCartModal={showCartHandler} />
      <main>
      <Juices />
      </main>
    </CartProvider>
  );
}

export default App;
