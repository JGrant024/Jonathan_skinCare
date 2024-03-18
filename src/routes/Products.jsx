import { useEffect, useState } from "react";

function fetchData() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.error("Error fetching data", error);
      return [];
    });
}

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h2>Facial Products </h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
