import { useParams } from "react-router-dom";
import { useState } from "react";
import { createContact } from "../services/contactService";
import "./form.css";
import { isAuthenticated } from "../services/authService";

const AddFavoriteView = () => {
  const user = isAuthenticated();

  const [contact, setContact] = useState({
    userCreator: user.id,
    name: "",
    phoneNumber: "",
  });
  const { id } = useParams();

  // HandleChange
  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  // handleSumbit
  const handleSumbit = async (event) => {
    event.preventDefault();
    console.log(contact);
    await createContact(contact);
  };

  // createContact(contact)

  return (
    <>
      <div className="container">
        <div className="row" style={{ margin: "0 auto" }}>
          <div className="col">
            <form className="form">
              <h2>ADD FAVORITE CONTACT</h2>
              <label >Name</label>
              <br />
              <input
                name="name"
                value={contact.name}
                onChange={handleChange}
                placeholder="name"
                type="text"
              />
              <label>Phone Number</label>
              <input 
                type="number"
                placeholder="number" 
                name="phoneNumber"
                onChange={handleChange}
                value={contact.phoneNumber}
              />
              <br />
              <button onClick={handleSumbit} className="addingButton">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFavoriteView;
