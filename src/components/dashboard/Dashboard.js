import React, { useContext } from "react";
import { UserContext } from "../userContext/UserContext";

import Nav from "../nav/Nav";
import './Dashboard.css';

const Dashboard = () => {
    const { name } = useContext(UserContext);
    return (
        <>
            <Nav />
            <div>
                <div className="dashboard-content">
                    <h1 className="dashboard-heading"> Welcome, {name} </h1>
                </div>
            </div>
        </>
    );
}

export default Dashboard;