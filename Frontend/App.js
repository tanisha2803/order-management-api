import React from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>📦 Order Management System</h1>
      <OrderForm />
      <hr />
      <OrderList />
    </div>
  );
}

<div className="container">
  <h1>📦 Order Management System</h1>
  
  <div className="form-section">
    <h2>Create Order</h2>
    {/* Input fields & submit button */}
  </div>
  
  <div className="order-list">
    <h2>All Orders</h2>
    {/* Display all orders */}
  </div>
</div>

export default App;
