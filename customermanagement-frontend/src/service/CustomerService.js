import axios from "axios";

const BASE_URL = "http://localhost:8080/customer";
class CustomerService{

    /**Method to get all customers from our api or database */
    getAllCustomers(){
        return axios.get(BASE_URL);
    }
    /**Method to save customer */
    saveCustomer(customerData){
        return axios.post(BASE_URL, customerData);
    }
    updateCustomer(id, customerData){
        return axios.put(`${BASE_URL}/${id}`, customerData)
    }
    getCustomerById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteCustomer(id){
        return axios.delete(BASE_URL +"/" +id);
    }

}
export default new CustomerService();