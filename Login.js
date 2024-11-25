import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

function Login() {
    const { setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({username: '', password: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'appplication/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setCurrentUser(data.user);
                localStorage.setItem('token', data.token);
            } else {
                alert(data.error);
            } 
            } catch (err) {
                console.error(err);
            }
            
        };

        return (
            <form onSubmit={handleSubmit}>
                <input type="text"
                name='username'
                placeholder='Username'
                value={formData.username}
                onChange={handleChange}
                />
                <input type="password"
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                />
                <button type='submit'>Login</button>
            </form>
        );
    }
export default Login;