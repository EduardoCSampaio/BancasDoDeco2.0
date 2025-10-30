import { Schema, model } from 'mongoose';

const paymentSchema = new Schema({
  winnerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  paymentDate: {
    type: Date,
    default: Date.now
  }
});

const Payment = model('Payment', paymentSchema);

export default Payment;