import ESSENTIAL_PRODUCTS from "../essential_products";

function Products() {
  return (
    <div>
      <h1> Shop From Our Natural Products </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {ESSENTIAL_PRODUCTS.map((product) => (
          <div
            key={product.id}
            style={{ width: "200px", margin: "10px", textAlign: "center" }}
          >
            <img
              src={product.productImage}
              alt={product.productName}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{product.productName}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
