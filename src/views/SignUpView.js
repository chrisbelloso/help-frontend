import { useState } from "react";
import { signUpUser } from "../services/authService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './auth.css'

const signUpView = () => {
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await signUpUser(user);
        navigate("/");
        setUser({
            name: "",
            lastName: "",
            email: "",
            password: ""
        })
    }

    return(
        <>
        <header className="introPage">
            THE HELP APP
        </header>
        <div className="container">
            <form className="form">
                <h2>Sign Up</h2>
                <input
                value={user.name}
                name="name"
                onChange={handleChange}
                placeholder="name" 
                type="text"
                />
                <input 
                value={user.lastName}
                name="lastName"
                onChange={handleChange}
                placeholder="Last Name"
                type="text"
                />
                <input 
                value={user.email}
                name="email"
                onChange={handleChange}
                placeholder="E-Mail"
                type="text"
                />
                <input 
                value={user.password}
                name="password"
                onChange={handleChange}
                placeholder="password"
                type="password"
                />
                <br />
                <button onClick={handleSubmit}>
                    Sign-Up
                </button>
            </form>
            <div className="auth">
                <h3 className="text">Being Here Before?</h3>
                <Link to="/login" className="link">Login</Link>
            </div>
        </div>
        </>
    )
}

export default signUpView;