import order_screen from "../assets/Images/order_screen.png";

function OrderPage() {
  return (
    <div>
      <h2>Order Submited! </h2>
      <strong>
        <p>
          Thank you so much for placing your order. An Email will be sent to you
          with the details of your order.{" "}
        </p>
      </strong>
      <img src={order_screen} alt="order_screen" />
    </div>
  );
}

export default OrderPage;
