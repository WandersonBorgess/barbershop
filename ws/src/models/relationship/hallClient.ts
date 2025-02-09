import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const hallClient = new Schema({
  collaboratorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Collaborator',
    required: true
  },
  serviceId: {
    type: mongoose.Types.ObjectId,
    ref: 'Service',
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

module.exports = mongoose.model('HallClient', hallClient);