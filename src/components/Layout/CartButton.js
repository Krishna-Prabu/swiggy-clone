import {useContext, useEffect, useState } from 'react';
import CartIcon from './CartIcon';
import CartContext from '../store/cart-context';
import classes from './CartButton.module.css';
const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
 
    const { items } = cartCtx;
    console.log(items);

    const numberOfCartItems = items.reduce((curNumber, item) => {
      console.log(item,'Amount');
      return curNumber + item?.amount;
    }, 0);
  
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  
    useEffect(() => {
      if (items.length === 0) {
        return;
      }
      setBtnIsHighlighted(true);
  
      const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);
  
      return () => {
        clearTimeout(timer);
      };
    }, [items]);
  
    return (
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
  };

export default CartButton;