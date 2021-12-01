import axios from 'axios';
import { updateUser } from './userService';

const apiUrl = process.env.REACT_APP_API_URL;

// GET CONTACT (contact)
export const getAllContacts = async () => {
    const response = await axios.get(`https://murmuring-journey-69933.herokuapp.com/api/v1/contacts`);
    return response;
}


// POST CONTACT (contact)
export const createContact = async(contact) => {
    const response = await axios.post(`https://murmuring-journey-69933.herokuapp.com/api/v1/contacts/contact`, contact)
    alert("Created Favorite Succesfully!");
    console.log(response.data._id)
    updateUser(response.data.userCreator, response.data._id);
}

// DELETE CONTACT/:ID
export const deleteContactInApi = async (id) => {
    const response = await axios.delete(`https://murmuring-journey-69933.herokuapp.com/api/v1/contacts/contact/${id}`);
    return response;
}
