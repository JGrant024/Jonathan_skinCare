import { createContext, useState } from "react";

export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   const cart = {};
//   for (let i = 1; i <= Products.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };
// eslint-disable-next-line react/prop-types
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = prev[itemId] - 1;
      return { ...prev, [itemId]: newCount >= 0 ? newCount : 0 };
    });
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
