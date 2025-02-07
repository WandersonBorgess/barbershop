import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const collaborator = new Schema({
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
  bankAccount: {
    owner: {
      type: String,
      required: true
    },
    cpfCnpj: {
      type: String,
      required: true
    },
    bank: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    agency: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    dv: {
      type: String,
      required: true
    }
  },
  recipientId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Collaborator', collaborator);