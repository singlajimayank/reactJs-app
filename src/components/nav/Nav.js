import React, { useContext } from "react";
import './Nav.css';
import { Link } from "react-router-dom";
import { UserContext } from "../userContext/UserContext";
const Nav = () => {
    const { email, name } = useContext(UserContext);
    return (
        <>
            <nav>
                <div> UM </div>
                <div>
                    <Link to='/dashboard' className="link"> Home </Link>
                    <div className="dropdown">
                        <Link to='/users' className="link"> User &#9662; </Link>
                        <div className="dropdown-content">
                            <p> {name} </p>
                            <p> {email} </p>
                            <hr />
                            <Link to='/' className="link"> Logout </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Nav;