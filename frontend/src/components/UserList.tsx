import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UserList: React.FC = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response.data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Lista de Usuários Cadastrados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome/Nickname</th>
                        <th>CPF</th>
                        <th>ID do Cassino</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.cpf}</td>
                            <td>{user.casinoId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;