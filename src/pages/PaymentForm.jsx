import { useState } from "react";

function PaymentForm() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    nameOnCard: "",
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paymentData);
    // Here you would typically send the data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Form</h2>
      <label>
        Credit Card Number:
        <input
          type="text"
          name="cardNumber"
          value={paymentData.cardNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Expiration Date:
        <input
          type="text"
          name="expirationDate"
          value={paymentData.expirationDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Security Code:
        <input
          type="text"
          name="securityCode"
          value={paymentData.securityCode}
          onChange={handleChange}
        />
      </label>
      <label>
        Name on Card:
        <input
          type="text"
          name="nameOnCard"
          value={paymentData.nameOnCard}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Pay Now</button>
    </form>
  );
}

export default PaymentForm;
