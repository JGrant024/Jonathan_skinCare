import { useState } from "react";

function ContactDeliveryForm() {
  const [formData, setFormData] = useState({
    contact: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact & Delivery Form</h2>
      <label>
        Email or Phone number:
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </label>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactDeliveryForm;
