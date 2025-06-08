import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div>
      <h2>All Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.customerName} - {order.productName} - Qty: {order.quantity} - ₹{order.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
