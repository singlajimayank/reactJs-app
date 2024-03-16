import React, { useContext } from "react";
import Nav from "../nav/Nav";
import './UsersList.css';
import { UserContext } from "../userContext/UserContext";

const UsersList = () => {
    const { users, email } = useContext(UserContext)
    const filteredUser = users.filter((user) => user.email !== email);
    return (
        <>
            <Nav />
            <div>
                <h1 className="user-heading">Users</h1>
                <table>
                    <thead>
                        <tr>
                            <th> Email </th>
                            <th> Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUser.map((user) => (
                            <tr key={user.email}>
                                <td> {user.email} </td>
                                <td> {user.name} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default UsersList;