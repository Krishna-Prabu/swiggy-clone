
import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    addSigleItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;
