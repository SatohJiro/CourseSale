import axios from "axios"

export const handleAddCourseToCourseOfUser = (userId, courses) => {
    return axios.put(`http://localhost:8080/tmdt/user/add-course-to-course-of-user?userId=${userId}`, courses)
}

export const handleLogin = (username, password) => {
    return axios
            .get(`http://localhost:8080/tmdt/user/login-admin?username=${username}&password=${password}`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
};

export const handleGetUserById = (id) => {
    return axios
            .get(`http://localhost:8080/tmdt/user/get-user-by-id?id=${id}`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}

export const handleGetUserEntityById = (id) => {
    return axios
            .get(`http://localhost:8080/tmdt/user/get-user-entity-by-id?id=${id}`)
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}

export const handleUpdateUser = (newUser) => {
    return axios.put('http://localhost:8080/tmdt/user/update-user', newUser)
}