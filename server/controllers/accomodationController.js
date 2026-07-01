// controllers/accommodationController.js
import Accommodation from '../models/Accommodation.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @desc    Create accommodation with images
// @route   POST /api/accommodations
// @access  Private (Host only)
export const createAccommodation = async (req, res, next) => {
  try {
    // Add host from authenticated user
    req.body.host = req.user.id;

    // Handle uploaded images
    if (req.files) {
      req.body.images = {};
      
      // Map each uploaded file to the correct image slot
      if (req.files.main) {
        req.body.images.main = {
          url: `/uploads/accommodations/${req.files.main[0].filename}`,
          filename: req.files.main[0].filename
        };
      }
      
      if (req.files.quad1) {
        req.body.images.quad1 = {
          url: `/uploads/accommodations/${req.files.quad1[0].filename}`,
          filename: req.files.quad1[0].filename
        };
      }
      
      if (req.files.quad2) {
        req.body.images.quad2 = {
          url: `/uploads/accommodations/${req.files.quad2[0].filename}`,
          filename: req.files.quad2[0].filename
        };
      }
      
      if (req.files.quad3) {
        req.body.images.quad3 = {
          url: `/uploads/accommodations/${req.files.quad3[0].filename}`,
          filename: req.files.quad3[0].filename
        };
      }
      
      if (req.files.quad4) {
        req.body.images.quad4 = {
          url: `/uploads/accommodations/${req.files.quad4[0].filename}`,
          filename: req.files.quad4[0].filename
        };
      }
    }

    // Parse amenities if sent as string
    if (req.body.amenities && typeof req.body.amenities === 'string') {
      req.body.amenities = JSON.parse(req.body.amenities);
    }

    const numericFields = ['numRooms', 'numBathrooms', 'maxGuests', 'pricePerNight', 'weeklyDiscount', 'cleaningFee', 'serviceFee', 'occupancyTaxes'];
    numericFields.forEach((field) => {
      if (req.body[field] !== undefined && req.body[field] !== '') {
        req.body[field] = Number(req.body[field]);
      }
    });

    const accommodation = await Accommodation.create(req.body);

    res.status(201).json({
      success: true,
      data: accommodation
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update accommodation images
// @route   PUT /api/accommodations/:id/images
// @access  Private (Owner only)
export const updateAccommodationImages = async (req, res, next) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id);

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    // Check ownership
    if (accommodation.host.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this listing'
      });
    }

    // Update specific image slots
    if (req.files) {
      const updates = {};
      
      if (req.files.main) {
        // Delete old main image if it exists and isn't default
        if (accommodation.images.main && 
            !accommodation.images.main.filename.includes('default')) {
          const oldPath = path.join(__dirname, '..', accommodation.images.main.url);
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        }
        updates['images.main'] = {
          url: `/uploads/accommodations/${req.files.main[0].filename}`,
          filename: req.files.main[0].filename
        };
      }
      
      if (req.files.quad1) {
        if (accommodation.images.quad1 && 
            !accommodation.images.quad1.filename.includes('default')) {
          const oldPath = path.join(__dirname, '..', accommodation.images.quad1.url);
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        }
        updates['images.quad1'] = {
          url: `/uploads/accommodations/${req.files.quad1[0].filename}`,
          filename: req.files.quad1[0].filename
        };
      }
      
      if (req.files.quad2) {
        if (accommodation.images.quad2 && 
            !accommodation.images.quad2.filename.includes('default')) {
          const oldPath = path.join(__dirname, '..', accommodation.images.quad2.url);
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        }
        updates['images.quad2'] = {
          url: `/uploads/accommodations/${req.files.quad2[0].filename}`,
          filename: req.files.quad2[0].filename
        };
      }
      
      if (req.files.quad3) {
        if (accommodation.images.quad3 && 
            !accommodation.images.quad3.filename.includes('default')) {
          const oldPath = path.join(__dirname, '..', accommodation.images.quad3.url);
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        }
        updates['images.quad3'] = {
          url: `/uploads/accommodations/${req.files.quad3[0].filename}`,
          filename: req.files.quad3[0].filename
        };
      }
      
      if (req.files.quad4) {
        if (accommodation.images.quad4 && 
            !accommodation.images.quad4.filename.includes('default')) {
          const oldPath = path.join(__dirname, '..', accommodation.images.quad4.url);
          if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
          }
        }
        updates['images.quad4'] = {
          url: `/uploads/accommodations/${req.files.quad4[0].filename}`,
          filename: req.files.quad4[0].filename
        };
      }

      // Update accommodation with new images
      const updatedAccommodation = await Accommodation.findByIdAndUpdate(
        req.params.id,
        updates,
        { new: true, runValidators: true }
      );

      res.json({
        success: true,
        data: updatedAccommodation
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Please upload at least one image'
      });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Get all accommodations
// @route   GET /api/accommodations
// @access  Public
export const getAccommodations = async (req, res, next) => {
  try {
    let query = { isActive: true };

    if (req.query.location) {
      query.location = { $regex: req.query.location, $options: 'i' };
    }

    const accommodations = await Accommodation.find(query)
      .populate('host', 'fullName isSuperhost')
      .sort('-createdAt');

    res.json({
      success: true,
      count: accommodations.length,
      data: accommodations
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get logged in host listings
// @route   GET /api/accommodations/mine
// @access  Private (Host)
export const getMyAccommodations = async (req, res, next) => {
  try {
    const accommodations = await Accommodation.find({ host: req.user.id })
      .sort('-createdAt');

    res.json({
      success: true,
      count: accommodations.length,
      data: accommodations
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update accommodation
// @route   PUT /api/accommodations/:id
// @access  Private (Owner)
export const updateAccommodation = async (req, res, next) => {
  try {
    let accommodation = await Accommodation.findById(req.params.id);

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    if (accommodation.host.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this listing'
      });
    }

    if (req.body.amenities && typeof req.body.amenities === 'string') {
      req.body.amenities = JSON.parse(req.body.amenities);
    }

    accommodation = await Accommodation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.json({
      success: true,
      data: accommodation
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single accommodation
// @route   GET /api/accommodations/:id
// @access  Public
export const getAccommodation = async (req, res, next) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id)
      .populate('host', 'fullName avatar isSuperhost');

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    res.json({
      success: true,
      data: accommodation
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete accommodation
// @route   DELETE /api/accommodations/:id
// @access  Private (Owner only)
export const deleteAccommodation = async (req, res, next) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id);

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    // Check ownership
    if (accommodation.host.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this listing'
      });
    }

    // Delete all images from filesystem
    const imageSlots = ['main', 'quad1', 'quad2', 'quad3', 'quad4'];
    imageSlots.forEach(slot => {
      if (accommodation.images[slot] && 
          !accommodation.images[slot].filename.includes('default')) {
        const imagePath = path.join(__dirname, '..', accommodation.images[slot].url);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
    });

    await accommodation.deleteOne();

    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};