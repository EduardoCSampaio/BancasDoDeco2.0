import React, { useEffect, useState } from 'react';
import { getPayments } from '../services/api';

const Payments = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await getPayments();
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPayments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Payment Status</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CPF</th>
                        <th>Casino ID</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            <td>{payment.name}</td>
                            <td>{payment.cpf}</td>
                            <td>{payment.casinoId}</td>
                            <td>{payment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Payments;