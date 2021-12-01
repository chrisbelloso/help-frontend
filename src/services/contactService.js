import axios from 'axios';
import { updateUser } from './userService';

const apiUrl = process.env.REACT_APP_API_URL;

// GET CONTACT (contact)
export const getAllContacts = async () => {
    const response = await axios.get(`${apiUrl}/contacts`);
    return response;
}


// POST CONTACT (contact)
export const createContact = async(contact) => {
    const response = await axios.post(`${apiUrl}/contacts/contact`, contact)
    alert("Created Favorite Succesfully!");
    console.log(response.data._id)
    updateUser(response.data.userCreator, response.data._id);
}

// DELETE CONTACT/:ID
export const deleteContactInApi = async (id) => {
    const response = await axios.delete(`${apiUrl}/contacts/contact/${id}`);
    return response;
}
