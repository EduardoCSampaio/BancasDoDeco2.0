import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        setLoading(true);
        try {
            // Implement login logic here, e.g., API call
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            // Implement logout logic here, e.g., API call
            await fetch('/api/auth/logout', {
                method: 'POST',
            });
            setUser(null);
        } catch (err) {
            setError('Logout failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/auth/user');
                const data = await response.json();
                if (response.ok) {
                    setUser(data.user);
                }
            } catch (err) {
                setError('Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error, login, logout };
};

export default useAuth;