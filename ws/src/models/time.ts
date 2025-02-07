import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const time = new Schema({
  hallId: {
    type: mongoose.Types.ObjectId,
    ref: 'Hall',
    required: true
  },
  specialties: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Service',
      required: true
    }
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Collaborator',
      required: true
    }
  ],
  days: {
    type: [Number],
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Time', time);