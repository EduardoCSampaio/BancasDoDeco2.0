import { Schema, model } from 'mongoose';

const userSchema = new Schema({
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
});

const User = model('User', userSchema);

export default User;