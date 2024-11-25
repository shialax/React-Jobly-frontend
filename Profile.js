import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

function Profile() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/users/${currentUser.username}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setCurrentUser(data.user);
                alert('Profile updated!');
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
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name" />
            <input 
            type="text"
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            />
            <input 
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            />
            <button type='submit'>Save Changes</button>
        </form>
    );
}

export default Profile;