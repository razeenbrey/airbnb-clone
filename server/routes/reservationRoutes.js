import express from 'express';
import {
  createReservation,
  getHostReservations,
  getUserReservations,
  deleteReservation
} from '../controllers/reservationController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, createReservation);
router.get('/host', protect, authorize('host'), getHostReservations);
router.get('/user', protect, getUserReservations);
router.delete('/:id', protect, deleteReservation);

export default router;
