import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [order, setOrder] = useState({
    customerName: '',
    productName: '',
    quantity: '',
    price: '',
    status: ''
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/orders', order);
      alert("Order created!");
    } catch (err) {
      console.error(err);
      alert("Error creating order");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Order</h2>
      <input name="customerName" placeholder="Customer Name" onChange={handleChange} required />
      <input name="productName" placeholder="Product Name" onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <input name="status" placeholder="Status" onChange={handleChange} required />
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
