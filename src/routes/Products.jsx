import { useEffect } from "react";

function data() {
  fetch("https://fakestoreapi/products")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error("Error fetching data", error));

  return { data };
}

function Products() {
  useEffect(() => {
    data();
  }, []);
  
  return (
      <>
    <h2>Facial Products </h2>
  </>
);

}
export default Products;
