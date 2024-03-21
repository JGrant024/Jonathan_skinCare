export const ESSENTIAL = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <>
      <div className="products">{productName}</div>
    </>
  );
};

export default ESSENTIAL;
