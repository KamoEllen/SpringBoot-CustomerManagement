package com.customermanagementbackend.service;

import com.customermanagementbackend.model.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerServiceInterface {
    public Customer saveCustomer(Customer customer);
    public Optional<Customer> getCustomerById(int id);
    List<Customer> getAllCustomers();
    Customer updateCustomer(int id, Customer customer);
    void deleteCustomer(int id);
}