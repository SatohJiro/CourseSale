import axios from "axios"

export const handleGetCategoies = () => {
    return axios
        .get('http://localhost:8080/tmdt/category/get-all')
        .then((response) => response.data)
        .catch(error => Promise.reject(error));
}

export const handleSaveCategory = (category) =>{
    return axios
            .post('http://localhost:8080/tmdt/category/add', category)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}

export const handleGetCategoryById = (id) => {
    return axios
            .get(`http://localhost:8080/tmdt/category/get-by-id?id=${id}`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
};

export const handleUpdateCategory = (category) =>{
    return axios
            .put("http://localhost:8080/tmdt/category/edit", category);
}

export const handleDeleteCategoryById = (id) => {
    return axios
            .delete(`http://localhost:8080/tmdt/category/delete?id=${id}`);
}