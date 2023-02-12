import { useState } from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/Layout/Cart';
import CartProvider from './components/store/CartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      
      <main>
       <Meals /> 
      </main>
    </CartProvider>
  );
}

export default App;
