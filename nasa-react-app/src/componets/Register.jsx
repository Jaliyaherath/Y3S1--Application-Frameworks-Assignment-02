import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
    const [username, setUsername] = useState('');//useState is a Hook that allows to have state variables in functional components
    const [password, setPassword] = useState('');//useState is a Hook that allows to have state variables in functional components
    const navigate = useNavigate();//useNavigate is a hook that returns a navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password });//post the username and password
            navigate('/login');
        } catch (error) {
            console.error("Failed to register", error);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <div className="Register-form ">
                <h2>Register</h2>
                    <label htmlFor="exampleInputEmail1" className="form-label" >Username:</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                <div>
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password:</label>
                    <input  type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <p>Already have an account? <a href="#" onClick={() => navigate('/login')}>Login</a></p>
                
                <button className="btn btn-primary" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
