
import ESSENTIAL_PRODUCTS from "./essential_products";

const ProductsDisplay = () => {
  return (
    <div className="products-container">
      {ESSENTIAL_PRODUCTS.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.productImage} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>${product.price}</p>
          <button>Add To Cart</button>
          <ProductsDisplay />
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;
