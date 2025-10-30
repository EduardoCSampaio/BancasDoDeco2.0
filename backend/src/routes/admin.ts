import { Router } from 'express';
import { getRegistrations, drawWinner } from '../controllers/games';
import { getPayments, updatePaymentStatus } from '../controllers/payments';

const router = Router();

// Route to get all registrations
router.get('/registrations', getRegistrations);

// Route to draw a winner from the registrations
router.post('/draw-winner', drawWinner);

// Route to get all payments
router.get('/payments', getPayments);

// Route to update payment status
router.put('/payments/:id', updatePaymentStatus);

export default router;