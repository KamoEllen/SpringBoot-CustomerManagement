import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../service/CustomerService';

const ListCustomerComponent = () => {
    const [customerArray, setCustomerArray] = useState([]);

    useEffect(() => {
        getAllCustomers();
    }, []);

    function getAllCustomers() {
        CustomerService.getAllCustomers()
            .then(res => { setCustomerArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }
    function deleteCustomer(e, id) {
        e.preventDefault()
        CustomerService.deleteCustomer(id).then(getAllCustomers()).catch(e => console.log(e));
    }


    return (
        <div className='container'>
            <Link to={"/add-customer"} className='btn btn-primary mb-2 mt-3' href="">Add Customer</Link>
            <h2 className='text-center mb-4'>List Customers</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Customer ID</th>
                    <th>Customer First Name</th>
                    <th>Customer Last Name</th>
                    <th>Customer Email</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {customerArray.map(customer =>
                        <tr id={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td>
                                <Link to={`/add-customer/${customer.id}`} className='btn btn-info' href="">Update</Link> {" "}
                                <a onClick={(e) => deleteCustomer(e, customer.id)} className='btn btn-danger'>Delete</a>
                            </td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default ListCustomerComponent