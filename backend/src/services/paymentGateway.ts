import axios from 'axios';

const PAYMENT_GATEWAY_URL = 'https://api.paymentgateway.com'; // Replace with actual payment gateway URL

export const processPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${PAYMENT_GATEWAY_URL}/process`, paymentData);
        return response.data;
    } catch (error) {
        throw new Error('Payment processing failed: ' + error.message);
    }
};

export const refundPayment = async (paymentId) => {
    try {
        const response = await axios.post(`${PAYMENT_GATEWAY_URL}/refund`, { paymentId });
        return response.data;
    } catch (error) {
        throw new Error('Refund processing failed: ' + error.message);
    }
};

export const getPaymentStatus = async (paymentId) => {
    try {
        const response = await axios.get(`${PAYMENT_GATEWAY_URL}/status/${paymentId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to retrieve payment status: ' + error.message);
    }
};