import axios from "axios";

export const handleSaveListQuestions = (questions) => {
    return axios
        .post('http://localhost:8080/tmdt/question/add-list', questions);
};

export const handleGetAllByLessonQuestionId = (lqId) => {
    return axios
        .get(`http://localhost:8080/tmdt/question/get-all-by-lq-id?lessonQuestionId=${lqId}`)
        .then(response => response.data)
        .catch(erorr => Promise.reject(erorr));
}