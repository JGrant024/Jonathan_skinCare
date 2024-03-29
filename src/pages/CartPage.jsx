import { useShop } from "./Shop-context";
import ESSENTIAL_PRODUCTS from "../essential_products";
import { PayPalButtons } from "@paypal/react-paypal-js";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useShop();

  const calculateTotal = () => {
    return Object.keys(cartItems)
      .reduce((total, itemId) => {
        const item = ESSENTIAL_PRODUCTS.find(
          (product) => product.id.toString() === itemId
        );
        return total + parseFloat(item.price) * cartItems[itemId];
      }, 0)
      .toFixed(2);
  };

  const total = calculateTotal();

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      {Object.keys(cartItems).length === 0 ? (
        <div className="text-center text-xl text-gray-600">
          Your cart is empty
        </div>
      ) : (
        <div className="space-y-4">
          {Object.keys(cartItems).map((itemId) => {
            const item = ESSENTIAL_PRODUCTS.find(
              (product) => product.id.toString() === itemId
            );
            return (
              item &&
              cartItems[itemId] > 0 && (
                <div
                  key={itemId}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <div className="font-semibold">{item.productName}</div>
                    <div>Quantity: {cartItems[itemId]}</div>
                    <div>Price: ${item.price}</div>
                  </div>
                  <div className="flex flex-col space-y-2 ml-4">
                    <button
                      onClick={() => addToCart(itemId)}
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(itemId)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      -
                    </button>
                    <button
                      onClick={() => removeFromCart(itemId, true)}
                      className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            );
          })}
          <div className="text-xl font-bold mt-6">Total: ${total}</div>

          <div className="mt-4">
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: { value: total },
                    },
                  ],
                });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
