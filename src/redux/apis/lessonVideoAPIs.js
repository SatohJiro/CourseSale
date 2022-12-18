import axios from "axios"

export const handleGetAllLessonVideo = () => {
    return axios
        .get('http://localhost:8080/tmdt/lesson-video/get-all-entity')
        .then(response => response.data)
        .catch(error => Promise.reject(error));
}

export const handleAddLessonVideo = (lessonVideo) => {
    return axios.post('http://localhost:8080/tmdt/lesson-video/add', lessonVideo);
};