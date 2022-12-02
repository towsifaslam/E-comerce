import React, { createContext, useState, useEffect } from "react";
//create context
export const CartContext = createContext();

const CartProvider = ({ childreen }) => {
  // cart state
  const [CartContext, setCart] = useState([]);
  return (
    <CartContext.Provider value={"this is the cart cart context"}>
      {childreen}
    </CartContext.Provider>
  );
};

export default CartProvider;
