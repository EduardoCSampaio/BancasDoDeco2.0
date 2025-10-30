import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import Roulette from '../components/minigames/Roulette';
import BallDrop from '../components/minigames/BallDrop';
import { fetchUsers } from '../services/api';

const AdminDashboard: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await fetchUsers();
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <UserList users={users} />
            )}
            <h2>Mini Games</h2>
            <div>
                <h3>Roulette</h3>
                <Roulette users={users} />
            </div>
            <div>
                <h3>Ball Drop</h3>
                <BallDrop users={users} />
            </div>
        </div>
    );
};

export default AdminDashboard;