import ESSENTIAL_PRODUCTS from "../essential_products";
import "./Products.css";
import "../pages/Products.css";
import { useShop } from "./Shop-context";

function Products() {
  console.log("USE SHOP", useShop);
  const { cartItems } = useShop();
  const addToCart = () => {};
  return (
    <div>
      <h1> Shop From Our Natural Products </h1>
      <p>
        Thank you for stopping by our site. We hope that you enjoy our products
        as they are handmade with 100% natural ingredients.
      </p>
      <strong>
        <p>Shop Our Satin Collection!</p>
      </strong>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {ESSENTIAL_PRODUCTS.map((product) => {
          const cartItemsAmount = cartItems[product.itemId] || 0;
          return (
            <div className="flip-card" key={product.id}>
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <h3>{product.productName}</h3>
                  <p>${product.price}</p>
                </div>
                <div className="flip-card-back">
                  <h3>{product.productName}</h3>
                  <p>{product.description}</p>
                  <button onClick={() => addToCart(product.id)}>
                    Add to Cart{" "}
                    {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
