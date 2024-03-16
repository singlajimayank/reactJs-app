import React, { useContext } from "react";

import { UserContext } from "../userContext/UserContext";
import { useNavigate } from "react-router-dom";
import './Login.css';


const Login = () => {


    const { users, email, setEmail, password, setPassword, setName } = useContext(UserContext);
    const navigate = useNavigate();


    const handleLogin = () => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            setName(user.name);
            navigate('/dashboard');
        } else {
            alert('Invalid Credentials');
        }
    }

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleLogin();
        }
    }
    return (
        <div className="login-page">
            <div className="left-side-image">
                <img src="/images/loginimage.jpg" alt="Login" />
            </div>
            <div className="right-side-login-form">
                <div>
                    <div>
                        <h3> Welcome Back </h3>
                        <p>
                            Welcome Back! Please enter your details
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="mail">Email</label><br />
                            <input type="email" name="email" id="mail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit" onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default Login;