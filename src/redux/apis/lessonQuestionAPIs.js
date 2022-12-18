import axios from "axios"

export const handleAddLessonQuestion = (lessonQuestion) => {
    return axios.post('http://localhost:8080/tmdt/leson-question/add', lessonQuestion);
}