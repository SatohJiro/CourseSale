import axios from "axios"

export const handleGetAllChapter = () => {
    return axios
        .get('http://localhost:8080/tmdt/chapter/get-all-admin')
        .then(response => response.data)
        .catch(error => Promise.reject(error));
};

export const handleGetChaptersByCourseId = (courseId) => {
    return axios
        .get(`http://localhost:8080/tmdt/chapter/get-by-course-id?courseId=${courseId}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error));
};

export const handleAddChapter = (chapter) => {
    return axios.post('http://localhost:8080/tmdt/chapter/add', chapter);
};

export const handleGetOneById = (id) => {
    return axios
        .get(`http://localhost:8080/tmdt/chapter/get-by-id?id=${id}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error));
};

export const handleUpdateChapter = (chapter) => {
    return axios.put('http://localhost:8080/tmdt/chapter/edit', chapter);
};

export const handleDeleteChapter = (id) => {
    return axios.delete(`http://localhost:8080/tmdt/chapter/delete?id=${id}`);
}