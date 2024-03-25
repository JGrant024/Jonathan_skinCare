import { createContext } from "react";
import { ShopContext } from "../pages/Shop-context";
import CartPage from "../pages/CartPage";
import ESSENTIAL_PRODUCTS from "../essential_products";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const calculateTotal = () => {
    return Object.keys(cartItems)
      .reduce((total, itemId) => {
        const item = ESSENTIAL_PRODUCTS.find(
          (product) => product.id.toString() === itemId
        );
        return total + item.price * cartItems[itemId];
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {Object.keys(cartItems).map(
            (itemId) =>
              cartItems[itemId] > 0 && (
                <div key={itemId} className="cart-item">
                  <div>
                    {
                      ESSENTIAL_PRODUCTS.find(
                        (product) => product.id.toString() === itemId
                      ).productName
                    }
                  </div>
                  <div>Quantity: {cartItems[itemId]}</div>
                  <button onClick={() => addToCart(itemId)}>+</button>
                  <button onClick={() => removeFromCart(itemId)}>-</button>
                  <button onClick={() => removeFromCart(itemId, true)}>
                    Remove
                  </button>
                </div>
              )
          )}
          <div className="total">Total: ${calculateTotal()}</div>
        </div>
      )}
    </div>
  );
};

export default CartPage;