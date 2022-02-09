import "./FavoritesView.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../services/authService";
import { getUserById } from "../services/userService";

const FavoritesView = () => {
  const userLocal = isAuthenticated();
  const [user, setUser] = useState({});
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await getUserById(userLocal.id);
    setUser(response.data);
    console.log(user);
  };

  return (
    <>
      <div>
        <h2
          style={{
            marginTop: "25px",
            marginBottom: "5px",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          FAVORITES
        </h2>
      </div>

      {user.contacts && user.contacts.map (contact => (
    <div style={{textAlign: "center", marginTop: "25px"}}>
        <a className="singleFav" href={`tel:+1${contact.phoneNumber}`}>{contact.name}</a>
    </div>
  ))}
  <div>
        <Link className="linkTag" to="/addFavorite">
          Add Favorite Contact +
        </Link>
      </div>
    </>
  );
};

export default FavoritesView;
