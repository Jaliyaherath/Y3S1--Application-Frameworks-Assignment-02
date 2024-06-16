import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/login.css';

function Login() {
    const [username, setUsername] = useState('');//useState is a Hook that allows you to have state variables in functional components
    const [password, setPassword] = useState('');//useState is a Hook that allows you to have state variables in functional components
    const [error, setError] = useState('');//useState is a Hook that allows you to have state variables in functional components
    const { login } = useAuth();//useAuth is a custom hook that we created to use the AuthContext
    const navigate = useNavigate();//useNavigate is a hook that returns a navigate function
    
    //Create a function to handle the submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);//login function is called with the username and password
            navigate('/home');//navigate to the home page
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="login-container" >
            
            <form layout='vertical' onSubmit={handleSubmit} className='card p-2' >
                <div className="login-form ">
                <h2>Login</h2>
                    <label htmlFor="exampleInputEmail1" className="form-label">Username:</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <p>Don't have an account? <a href="/register">Register</a></p>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
