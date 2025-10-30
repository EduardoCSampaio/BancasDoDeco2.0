import React, { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';

const Home: React.FC = () => {
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegistrationSuccess = () => {
        setRegistrationSuccess(true);
    };

    return (
        <div>
            <h1>Cadastro para Banca</h1>
            <RegistrationForm onSuccess={handleRegistrationSuccess} />
            {registrationSuccess && <p>Cadastro realizado com sucesso!</p>}
        </div>
    );
};

export default Home;