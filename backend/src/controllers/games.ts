import { Request, Response } from 'express';
import { Registration } from '../models/registration';
import { Payment } from '../models/payment';

// Function to handle the roulette game logic
export const playRoulette = async (req: Request, res: Response) => {
    try {
        const registrations = await Registration.find();
        // Logic for selecting a winner from registrations
        const winnerIndex = Math.floor(Math.random() * registrations.length);
        const winner = registrations[winnerIndex];

        res.status(200).json({ winner });
    } catch (error) {
        res.status(500).json({ message: 'Error playing roulette', error });
    }
};

// Function to handle the ball drop game logic
export const playBallDrop = async (req: Request, res: Response) => {
    try {
        const registrations = await Registration.find();
        // Logic for selecting a winner from registrations
        const winnerIndex = Math.floor(Math.random() * registrations.length);
        const winner = registrations[winnerIndex];

        res.status(200).json({ winner });
    } catch (error) {
        res.status(500).json({ message: 'Error playing ball drop', error });
    }
};