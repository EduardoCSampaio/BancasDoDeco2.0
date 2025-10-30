import { Request, Response } from 'express';
import Registration from '../models/registration';

// Function to handle user registration
export const registerUser = async (req: Request, res: Response) => {
    const { name, cpf, casinoId } = req.body;

    try {
        const newRegistration = new Registration({ name, cpf, casinoId });
        await newRegistration.save();
        res.status(201).json({ message: 'User registered successfully', registration: newRegistration });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Function to retrieve all registrations
export const getAllRegistrations = async (req: Request, res: Response) => {
    try {
        const registrations = await Registration.find();
        res.status(200).json(registrations);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving registrations', error });
    }
};