import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);//create a context for the authentication

//Create a provider for the authentication
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user'));
    });

    //
    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });//post the username and password
            const { token, username: returnedUsername } = response.data;
    
            //Store the user data in the local storage
            const userData = {
                username: returnedUsername,
                token,
                tokenExpirationDate: new Date(new Date().getTime() + 3600 * 1000)//set the token expiration date
            };
    
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
        } catch (error) {
            if (error.response) {
                throw new Error(error.response.data.message || "Failed to authenticate");
            } else if (error.request) {
                throw new Error("No response from server");
            } else {
                throw new Error("Error", error.message);
            }
        }
    };
    
    //Create a function to logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    //Use the useEffect to check the token expiration date
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user'));
        if (storedData && new Date(storedData.tokenExpirationDate) <= new Date()) {
            logout();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
