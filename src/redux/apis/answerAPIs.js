import axios from "axios"

export const handleSaveListAnswer = (answers) => {
    return axios
        .post("http://localhost:8080/tmdt/answer/add-list", answers);
}

export const handleGetAllByQuestionId = (questionId) => {
    return axios
        .get(`http://localhost:8080/tmdt/answer/get-entity-by-question-id?questionId=${questionId}`)
        .then(response => response.data)
        .catch(erorr => Promise.reject(erorr));
}