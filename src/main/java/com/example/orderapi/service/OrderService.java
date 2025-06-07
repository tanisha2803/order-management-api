package com.example.orderapi.service;

import com.example.orderapi.entity.Order;
import com.example.orderapi.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Create
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    // Read all
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Read one
    public Optional<Order> getOrderById(String id) {
        return orderRepository.findById(id);
    }

    // Update
    public Order updateOrder(String id, Order updatedOrder) {
        updatedOrder.setId(id); // ensure ID is retained
        return orderRepository.save(updatedOrder);
    }

    // Delete
    public void deleteOrder(String id) {
        orderRepository.deleteById(id);
    }
}
