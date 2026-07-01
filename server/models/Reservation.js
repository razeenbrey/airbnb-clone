import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accommodation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accommodation',
    required: true
  },
  checkIn: {
    type: Date,
    required: [true, 'Please add check-in date']
  },
  checkOut: {
    type: Date,
    required: [true, 'Please add check-out date']
  },
  guests: {
    type: Number,
    required: [true, 'Please add number of guests'],
    min: [1, 'Must have at least 1 guest']
  },
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// DatE validation
reservationSchema.pre('save', function(next) {
  if (this.checkOut <= this.checkIn) {
    return next(new Error('Check-out date must be after check-in date'));
  }
  next();
});

export default mongoose.model('Reservation', reservationSchema);