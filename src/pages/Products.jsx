import ESSENTIAL_PRODUCTS from "../essential_products";
import "./Products.css";

function Products() {
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
        {ESSENTIAL_PRODUCTS.map((product) => (
          <div className="flip-card" key={product.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ textAlign: "center" }}>
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
                <p>{product.description}</p>{" "}
                {/* Assuming there's a description field */}
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
