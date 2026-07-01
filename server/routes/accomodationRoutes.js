// routes/accommodationRoutes.js
import express from 'express';
import {
  createAccommodation,
  getAccommodations,
  getMyAccommodations,
  getAccommodation,
  updateAccommodation,
  updateAccommodationImages,
  deleteAccommodation
} from '../controllers/accomodationController.js';
import { protect, authorize } from '../middleware/auth.js';
import { uploadListingImages } from '../middleware/upload.js';

const router = express.Router();

// Public routes
router.get('/', getAccommodations);
router.get('/mine', protect, authorize('host'), getMyAccommodations);
router.get('/:id', getAccommodation);

// Protected routes
router.post(
  '/',
  protect,
  authorize('host'),
  uploadListingImages,
  createAccommodation
);

router.put(
  '/:id',
  protect,
  updateAccommodation
);

router.put(
  '/:id/images',
  protect,
  uploadListingImages,
  updateAccommodationImages
);

router.delete(
  '/:id',
  protect,
  deleteAccommodation
);

export default router;