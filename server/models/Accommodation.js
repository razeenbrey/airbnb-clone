import mongoose from 'mongoose';

const accommodationSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a listing name'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  type: {
    type: String,
    required: [true, 'Please specify the type'],
    enum: [
      'Entire home',
      'Private room',
      'Shared room',
      'Flat',
      'Apartment',
      'Villa',
      'Cottage'
    ]
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [2000, 'Description cannot be more than 2000 characters']
  },
  numRooms: {
    type: Number,
    required: [true, 'Please add number of bedrooms'],
    min: [1, 'Must have at least 1 bedroom']
  },
  numBathrooms: {
    type: Number,
    required: [true, 'Please add number of bathrooms'],
    min: [1, 'Must have at least 1 bathroom']
  },
  maxGuests: {
    type: Number,
    required: [true, 'Please add maximum number of guests'],
    min: [1, 'Must accommodate at least 1 guest']
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please add price per night'],
    min: [0, 'Price must be positive']
  },
  weeklyDiscount: {
    type: Number,
    default: 0
  },
  cleaningFee: {
    type: Number,
    default: 0
  },
  serviceFee: {
    type: Number,
    default: 0
  },
  occupancyTaxes: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },

  // update | this to mathc layout for listing.jsx
  images: {
    main: {
      url: { type: String, default: '/uploads/accommodations/default-main.jpg' },
      filename: { type: String, default: 'default-main.jpg' }
    },
    quad1: {
      url: { type: String, default: '/uploads/accommodations/default-quad1.jpg' },
      filename: { type: String, default: 'default-quad1.jpg' }
    },
    quad2: {
      url: { type: String, default: '/uploads/accommodations/default-quad2.jpg' },
      filename: { type: String, default: 'default-quad2.jpg' }
    },
    quad3: {
      url: { type: String, default: '/uploads/accommodations/default-quad3.jpg' },
      filename: { type: String, default: 'default-quad3.jpg' }
    },
    quad4: {
      url: { type: String, default: '/uploads/accommodations/default-quad4.jpg' },
      filename: { type: String, default: 'default-quad4.jpg' }
    }
  },


  amenities: {
    entireHome: { type: Boolean, default: false },
    selfCheckIn: { type: Boolean, default: false },
    enhancedClean: { type: Boolean, default: false },
    garden: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false },
    washer: { type: Boolean, default: false },
    aircon: { type: Boolean, default: false },
    pets: { type: Boolean, default: false }
  },


  
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviewCount: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
accommodationSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for search
accommodationSchema.index({ name: 'text', location: 'text', description: 'text' });

export default mongoose.model('Accommodation', accommodationSchema);