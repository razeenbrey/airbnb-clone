import User from '../models/User.js';

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide username and password'
      });
    }

    const user = await User.findOne({ username }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    res.json({
      success: true,
      token: user.getSignedJwtToken(),
      user: {
        id: user._id,
        username: user.username,
        fullName: user.fullName,
        isHost: user.isHost
      }
    });
  } catch (error) {
    next(error);
  }
};
