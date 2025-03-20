import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';  // ✅ Use useHistory() for v5

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();  // ✅ Use useHistory() instead of useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/users', {
                name,
                email,
                password,
                role: 'employee'
            });

            if (response.status === 201) {
                alert('Sign-up successful! Redirecting to login...');
                history.push('/login');  // ✅ Use history.push() for v5
            } else {
                alert('Sign-up failed. Please try again.');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred while signing up.');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
