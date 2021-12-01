import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// PUT USER
export const updateUser = async (userId, contactId) => {
    const response = await axios.put(`${apiUrl}/users/user/${userId}`, {contactId});
    return response;
}

// GET USER BY ID
export const getUserById = async (id) => {
    const response = await axios.get(`${apiUrl}/users/user/${id}`);
    return response;
}