import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserToApi } from "../services/authService";
import { Link } from "react-router-dom";

import './auth.css';

const LoginView = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        }
    )

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userResponse = await loginUserToApi(user);
            navigate("/");
            await window.location.reload();
        } catch (error) {
            console.log(error);
        }

        setUser({
            email: "",
            password: ""
        })
    }

    return(
        <>
        <header className="introPage">
            THE HELP APP
        </header>
        <div className="container mt-5">
            <form className="form">
                <h2>Login</h2>
                <input 
                onChange={handleChange}
                name="email"
                value={user.email}
                placeholder="E-Mail"
                type="text"
                />
                <input 
                onChange={handleChange}
                name="password"
                value={user.password}
                placeholder="Password"
                type="password"
                />
                <br />
                <button onClick={handleSubmit}>
                    Login
                </button>
            </form>
            <div className="auth">
                <h3 className="text">First time?</h3>
                <Link to="/signup" className="link">Sign-Up</Link>
            </div>
        </div>
        </>
    )
}

export default LoginView;