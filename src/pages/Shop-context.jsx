import { createContext, useState, useContext } from "react";

export const ShopContext = createContext();

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

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export function useShop() {
  return useContext(ShopContext);
}
