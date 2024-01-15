/* eslint-disable react/prop-types */
import { useState } from 'react';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // You can add authentication logic here
        onLogin({ email, password });
    };

    const styles = {
        container: {
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            marginBottom: '8px',
        },
        input: {
            width: '100%',
            padding: '8px',
            marginBottom: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        button: {
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form style={styles.form} onSubmit={handleLogin}>
                <label style={styles.label}>
                    Email:
                    <input
                        style={styles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label style={styles.label}>
                    Password:
                    <input
                        style={styles.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button style={styles.button} type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
