//Imported libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/header.css';
import '../styles/Button.css';

//Create a function to handle the header
const Header = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    //Create a function to handle the logout
    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    //Return the header use
    return (
        <header className="header bg-gray-800 text-white flex justify-between items-right px-6 py-4">
            <h1 className="header">Nasa App</h1>
            <button 
                onClick={handleLogout} 
                className="logout-button"
            >
                Logout
            </button>
        </header>
    );
};

export default Header;
