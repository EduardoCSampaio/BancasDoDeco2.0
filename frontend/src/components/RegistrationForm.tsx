import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [casinoId, setCasinoId] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle registration submission
        console.log('Registered:', { name, cpf, casinoId });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome/Nickname:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="casinoId">ID do Cassino:</label>
                <input
                    type="text"
                    id="casinoId"
                    value={casinoId}
                    onChange={(e) => setCasinoId(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Cadastra-se</button>
        </form>
    );
};

export default RegistrationForm;