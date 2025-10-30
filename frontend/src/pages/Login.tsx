import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Add your login logic here, e.g., API call to authenticate user
        if (email === 'DecoLive@gmail.com' && password === 'BancasDeco') {
            // Redirect to admin dashboard or another page upon successful login
            history.push('/admin-dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;