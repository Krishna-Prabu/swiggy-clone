import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const addSingleItemHandler = (item) => {
    cartCtx.addSingleItem(item);
  };
 
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-item"]}>
      {" "}
      {cartCtx.items.map((item) => (
        <CartItem
          onRemove={removeHandler.bind(null, item)}
          onAdd={addSingleItemHandler.bind(null, item)}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}{" "}
    </ul>
  );
  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>

        <span>{totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
