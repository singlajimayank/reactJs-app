import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const users = [
        { email: "Pri@gmail.com", password: "001", name: "Prince" },
        { email: "Sun@gmail.com", password: "002", name: "Sunny" },
        { email: "Mayank@gmail.com", password: "003", name: "Mayank" },
    ]

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <UserContext.Provider value={{ users, email, setEmail, password, setPassword, name, setName }}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;
