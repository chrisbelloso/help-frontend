import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// PUT USER
export const updateUser = async (userId, contactId) => {
    const response = await axios.put(`https://murmuring-journey-69933.herokuapp.com/api/v1/users/user/${userId}`, {contactId});
    return response;
}

// GET USER BY ID
export const getUserById = async (id) => {
    const response = await axios.get(`https://murmuring-journey-69933.herokuapp.com/api/v1/users/user/${id}`);
    return response;
}