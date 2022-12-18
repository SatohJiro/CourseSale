import axios from "axios";

export const handleAddBenefits = (benefits) => {
    return axios
            .post('http://localhost:8080/tmdt/benefit/add-list-benefit', benefits);
};