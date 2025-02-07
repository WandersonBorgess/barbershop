import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const client = new Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório.']
  },
  phone: String,
  email: {
    type: String,
    required: [true, 'E-mail é obrigatório.']
  },
  password: {
    type: String,
    required: true
  },
  picture: String,
  birthDate: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['M', 'F'],
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['A', 'I'],
    default: 'A'
  },
  document: {
    type: {
      type: String,
      enum: ['individual', 'corporation'],
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  address: {
    city: String,
    uf: String,
    cep: String,
    number: String,
    country: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Client', client);