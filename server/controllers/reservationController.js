import Reservation from '../models/Reservation.js';
import Accommodation from '../models/Accommodation.js';

// @desc    Create reservation
// @route   POST /api/reservations
// @access  Private
export const createReservation = async (req, res, next) => {
  try {
    req.body.user = req.user.id;

    const accommodation = await Accommodation.findById(req.body.accommodation);

    if (!accommodation) {
      return res.status(404).json({
        success: false,
        message: 'Accommodation not found'
      });
    }

    if (req.body.guests > accommodation.maxGuests) {
      return res.status(400).json({
        success: false,
        message: `This place only allows ${accommodation.maxGuests} guests`
      });
    }

    const reservation = await Reservation.create(req.body);

    res.status(201).json({
      success: true,
      data: reservation
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get reservations for host
// @route   GET /api/reservations/host
// @access  Private (Host)
export const getHostReservations = async (req, res, next) => {
  try {
    const accommodations = await Accommodation.find({ host: req.user.id }).select('_id');
    const accIds = accommodations.map(acc => acc._id);

    const reservations = await Reservation.find({ accommodation: { $in: accIds } })
      .populate('user', 'fullName username')
      .populate('accommodation', 'name location')
      .sort('-createdAt');

    res.json({
      success: true,
      count: reservations.length,
      data: reservations
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get reservations for logged in user
// @route   GET /api/reservations/user
// @access  Private
export const getUserReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find({ user: req.user.id })
      .populate('accommodation', 'name location images')
      .sort('-createdAt');

    res.json({
      success: true,
      count: reservations.length,
      data: reservations
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete reservation
// @route   DELETE /api/reservations/:id
// @access  Private
export const deleteReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: 'Reservation not found'
      });
    }

    const accommodation = await Accommodation.findById(reservation.accommodation);

    // user can delete own reservation, host can delete reservations on their listings
    const isOwner = reservation.user.toString() === req.user.id;
    const isHost = accommodation && accommodation.host.toString() === req.user.id;

    if (!isOwner && !isHost) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this reservation'
      });
    }

    await reservation.deleteOne();

    res.json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};
