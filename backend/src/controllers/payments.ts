import { Request, Response } from 'express';
import Payment from '../models/payment';
import User from '../models/user';

// Function to create a payment record
export const createPayment = async (req: Request, res: Response) => {
    try {
        const { userId, amount, status } = req.body;
        const payment = new Payment({ userId, amount, status });
        await payment.save();
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment', error });
    }
};

// Function to get all payments
export const getPayments = async (req: Request, res: Response) => {
    try {
        const payments = await Payment.find().populate('userId');
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payments', error });
    }
};

// Function to update payment status
export const updatePaymentStatus = async (req: Request, res: Response) => {
    try {
        const { paymentId, status } = req.body;
        const payment = await Payment.findByIdAndUpdate(paymentId, { status }, { new: true });
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating payment status', error });
    }
};