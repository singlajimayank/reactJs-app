import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import UsersList from './components/usersList/UsersList';
import UserProvider from './components/userContext/UserContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<UsersList />} />
          </Routes>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
