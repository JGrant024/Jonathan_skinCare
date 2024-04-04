import ESSENTIAL_PRODUCTS from "../essential_products";
import "./Products.css";
import "../pages/Products.css";
import { useShop } from "./Shop-context";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

function Products() {
  const { cartItems, addToCart, removeFromCart } = useShop();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <h1 className="text-2xl font-bold text-center text-gray-900 mt-6">
        Shop From Our Natural Products
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Thank you for stopping by our site. We hope that you enjoy our products
        as they are handmade with 100% natural ingredients.
      </p>
      <p className="font-semibold text-center mt-4">
        Shop Our Satin Collection!
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {ESSENTIAL_PRODUCTS.map((product) => {
          const cartItemsAmount = cartItems[product.id] || 0;
          return (
            <div
              className="w-64 bg-white shadow-lg rounded-lg overflow-hidden"
              key={product.id}
            >
              <img
                className="w-full h-48 object-cover object-center"
                src={product.productImage}
                alt={product.productName}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.productName}</h3>
                <p className="text-gray-600">${product.price}</p>
                <p className="mt-2 text-gray-500">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-yellow-400  text-white font-bold py-2 px-4 rounded"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart {cartItemsAmount > 0 && `(${cartItemsAmount})`}
                  </button>
                  {cartItemsAmount > 0 && (
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Products;
