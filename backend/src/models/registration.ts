import { Schema, model } from 'mongoose';

const registrationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  casinoId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Registration = model('Registration', registrationSchema);

export default Registration;