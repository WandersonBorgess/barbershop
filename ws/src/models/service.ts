import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const service = new Schema({
  hallId: {
    type: mongoose.Types.ObjectId,
    ref: 'Hall',
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  commission: {
    type: Number, // % of commission about price
    required: true,
  },
  duration: {
    type: Number, // Duration in minutes
    required: true,
  },
  recurring: {
    type: String, // Period of try service in days
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['A', 'I', 'E'],
    default: 'A'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Service', service);