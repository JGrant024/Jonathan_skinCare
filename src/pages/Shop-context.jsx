import { createContext, useState, useContext } from "react";

export const ShopContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = (prev[itemId] || 0) - 1;
      if (newCount > 0) {
        return {
          ...prev,
          [itemId]: newCount,
        };
      } else {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
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
