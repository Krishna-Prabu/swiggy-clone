import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD ITEM") {
    
    const updatedTotalAmount = state.totalAmount + action.item.price * 1;
    const exitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItemss;
    const exitingCartItem = state.items[exitingCartItemIndex];
    

    if (exitingCartItem) {
      const updatedItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount + 1,
      };
      
      updatedItemss = [...state.items];
      updatedItemss[exitingCartItemIndex] = updatedItem;
    } else {
      updatedItemss = state.items.concat(action.item);
    }
    return {
      items: updatedItemss,
      totalAmount: updatedTotalAmount,
    };
  };
  
  if (action.type === "ADD") {
    
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const exitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItemss;
    const exitingCartItem = state.items[exitingCartItemIndex];
    

    if (exitingCartItem) {
      const updatedItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount + 1,
      };
      
      updatedItemss = [...state.items];
      updatedItemss[exitingCartItemIndex] = updatedItem;
    } else {
      updatedItemss = state.items.concat(action.item);
    }
    return {
      items: updatedItemss,
      totalAmount: updatedTotalAmount,
    };
  };
  
  if (action.type === "REMOVE") {
    debugger
    const exitingCartItemIndex = state.items.findIndex(
        (item) =>        
          item.id === action.item.id                     
      );
      const exitingCartItem = state.items[exitingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - exitingCartItem.price;

      let updatedItems;
      
      if(exitingCartItem.amount === 1){
        
        updatedItems = state.items.filter(item => item.id !== action.item.id);
      }
      else{ 
              
        let updatedItem = {...exitingCartItem, amount: exitingCartItem.amount - 1};        
        updatedItems = [...state.items];
        updatedItems[exitingCartItemIndex] = updatedItem;
      }
      
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addSingleItemHandler = (item) => {
    dispatchCartAction({type: "ADD ITEM", item: item})
  }
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    
  };
  const removeItemHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addSingleItem: addSingleItemHandler,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
