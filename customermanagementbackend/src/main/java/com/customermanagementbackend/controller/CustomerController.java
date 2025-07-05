package com.customermanagementbackend.controller;

import com.customermanagementbackend.model.Customer;
import com.customermanagementbackend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerController {

    @Autowired
    private CustomerService customerService; //we are bringing in Customer Service instance

    /**This is a post Request, here we are gonna be saving a customer*/
    @PostMapping
    public Customer saveCustomer(@RequestBody Customer customer){
        return customerService.saveCustomer(customer);
    }
        /** Here, we are getting all customers*/
    @GetMapping
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }
     /**here, we are getting one customer*/
    @GetMapping("/{id}")
    public Optional<Customer> getCustomerById(@PathVariable int id){
        return customerService.getCustomerById(id);
    }
        /**here, we are gonna be updating a customer*/
    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable int id, @RequestBody Customer customer){
        return customerService.updateCustomer(id,customer);
    }
      /**Here, we are gonna be deleting a customer*/
    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable int id){
        customerService.deleteCustomer(id);
    }
}