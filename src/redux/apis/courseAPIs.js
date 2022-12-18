import axios from "axios";

export const handleAddCourse = (course) => {
    return axios
            .post('http://localhost:8080/tmdt/course/add', course)
            .then(response => response.data)
};

export const handleGetAllCourse = () => {
    return axios
            .get('http://localhost:8080/tmdt/course/get-all-admin')
            .then(response => response.data)
            .catch(error => Promise.reject(error));
}