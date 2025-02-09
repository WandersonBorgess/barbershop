import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const collaboratorService = new Schema({
  hallId: {
    type: mongoose.Types.ObjectId,
    ref: 'Hall',
    required: true
  },
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['A', 'I'],
    default: 'A'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('CollaboratorService', collaboratorService);