import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const hall = new Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório.']
  },
  picture: String,
  cover: String,
  email: {
    type: String,
    required: [true, 'E-mail é obrigatório.']
  },
  password: {
    type: String,
    default: null
  },
  phone: String,
  address: {
    city: String,
    uf: String,
    cep: String,
    number: String,
    country: String
  },
  geo: {
    type: String,
    coordinates: Array
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

hall.index({ geo: '2dsphere' })

export default mongoose.model('Hall', hall);