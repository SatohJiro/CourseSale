import axios from "axios"

export const handleGetAllOrders = () => {
    return axios
            .get('http://localhost:8080/tmdt/order/get-all-entity')
            .then((response) => response.data)
            .catch(error => Promise.resolve(error));
}

export const handleGetOrderById = (id) => {
    return axios
            .get(`http://localhost:8080/tmdt/order/get-entity-by-id?id=${id}`)
            .then((response) => response.data)
            .catch(error => Promise.reject(error));
}

export const handleUpdateOrder = (order) => {
    return axios.put('http://localhost:8080/tmdt/order/update-order', order);
}