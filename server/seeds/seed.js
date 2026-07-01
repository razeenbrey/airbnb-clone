// seeds/seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Accommodation from '../models/Accommodation.js';
import Reservation from '../models/Reservation.js';
import connectDB from '../config/database.js';

dotenv.config();

const users = [
  {
    username: 'johnhost',
    password: 'password123',
    fullName: 'John Smith',
    isHost: true,
    isSuperhost: true
  },
  {
    username: 'sarahhost',
    password: 'password123',
    fullName: 'Sarah Johnson',
    isHost: true,
    isSuperhost: false
  },
  {
    username: 'guestuser',
    password: 'password123',
    fullName: 'Mike Guest',
    isHost: false
  }
];

const defaultImages = {
  main: {
    url: '/uploads/accommodations/default-main.png',
    filename: 'default-main.png'
  },
  quad1: {
    url: '/uploads/accommodations/default-quad1.png',
    filename: 'default-quad1.png'
  },
  quad2: {
    url: '/uploads/accommodations/default-quad2.png',
    filename: 'default-quad2.png'
  },
  quad3: {
    url: '/uploads/accommodations/default-quad3.png',
    filename: 'default-quad3.png'
  },
  quad4: {
    url: '/uploads/accommodations/default-quad4.png',
    filename: 'default-quad4.png'
  }
};

const accommodations = [
  {
    name: 'Stunning Ocean View Villa',
    location: 'Camps Bay',
    type: 'Entire home',
    description: 'Beautiful villa with ocean views in Camps Bay.',
    numRooms: 2,
    numBathrooms: 2,
    maxGuests: 4,
    pricePerNight: 23,
    weeklyDiscount: 20,
    cleaningFee: 40,
    serviceFee: 70,
    occupancyTaxes: 30,
    rating: 4,
    reviewCount: 5,
    images: defaultImages,
    amenities: {
      entireHome: true,
      selfCheckIn: true,
      enhancedClean: true,
      garden: true,
      wifi: true,
      washer: true,
      aircon: false,
      pets: true
    }
  },
  {
    name: 'Modern City Apartment',
    location: 'Sandton',
    type: 'Flat',
    description: 'Modern apartment in the heart of Sandton.',
    numRooms: 2,
    numBathrooms: 1,
    maxGuests: 4,
    pricePerNight: 1800,
    weeklyDiscount: 100,
    cleaningFee: 50,
    serviceFee: 80,
    occupancyTaxes: 40,
    rating: 4.7,
    reviewCount: 56,
    images: defaultImages,
    amenities: {
      entireHome: true,
      selfCheckIn: false,
      enhancedClean: true,
      garden: false,
      wifi: true,
      washer: false,
      aircon: true,
      pets: false
    }
  },
  {
    name: 'Cozy Room in Wine Farm',
    location: 'Stellenbosch',
    type: 'Private room',
    description: 'Cozy room on a wine farm in Stellenbosch.',
    numRooms: 1,
    numBathrooms: 1,
    maxGuests: 2,
    pricePerNight: 750,
    weeklyDiscount: 50,
    cleaningFee: 30,
    serviceFee: 40,
    occupancyTaxes: 25,
    rating: 4.5,
    reviewCount: 32,
    images: defaultImages,
    amenities: {
      entireHome: false,
      selfCheckIn: true,
      enhancedClean: true,
      garden: true,
      wifi: true,
      washer: true,
      aircon: false,
      pets: false
    }
  },
  {
    name: 'Beachfront Villa',
    location: 'Camps Bay, Cape Town',
    type: 'Villa',
    description: 'Beautiful beachfront villa with amazing views.',
    numRooms: 4,
    numBathrooms: 3,
    maxGuests: 8,
    pricePerNight: 3500,
    weeklyDiscount: 200,
    cleaningFee: 100,
    serviceFee: 120,
    occupancyTaxes: 80,
    rating: 4.9,
    reviewCount: 120,
    images: defaultImages,
    amenities: {
      entireHome: true,
      selfCheckIn: true,
      enhancedClean: true,
      garden: true,
      wifi: true,
      washer: true,
      aircon: true,
      pets: true
    }
  }
];

const importData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Accommodation.deleteMany();
    await Reservation.deleteMany();

    console.log('Data cleared...');

    const createdUsers = await User.create(users);
    const hostUser = createdUsers[0]._id;
    const secondHost = createdUsers[1]._id;

    const sampleAccommodations = accommodations.map((acc, index) => {
      return {
        ...acc,
        host: index % 2 === 0 ? hostUser : secondHost
      };
    });

    const createdAccommodations = await Accommodation.create(sampleAccommodations);

    // sample reservation for testing
    await Reservation.create({
      user: createdUsers[2]._id,
      accommodation: createdAccommodations[0]._id,
      checkIn: new Date('2024-03-15'),
      checkOut: new Date('2024-03-20'),
      guests: 2,
      totalPrice: 500
    });

    console.log('Data imported successfully!');
    console.log('Users created:', createdUsers.length);
    console.log('Accommodations created:', sampleAccommodations.length);
    console.log('\nTest User Credentials:');
    console.log('Host: johnhost / password123');
    console.log('Guest: guestuser / password123');
    
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Accommodation.deleteMany();
    await Reservation.deleteMany();

    console.log('Data destroyed successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
