// middleware/upload.js
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set storage engine - MULTER 2.x SYNTAX
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/accommodations'));
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png, gif, webp) are allowed'), false);
  }
};

// Create multer instance - MULTER 2.x
const upload = multer({
  storage: storage,
  limits: { 
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: fileFilter
});

// Export middleware for 5 specific image fields
export const uploadListingImages = upload.fields([
  { name: 'main', maxCount: 1 },
  { name: 'quad1', maxCount: 1 },
  { name: 'quad2', maxCount: 1 },
  { name: 'quad3', maxCount: 1 },
  { name: 'quad4', maxCount: 1 }
]);

// Single file upload (for avatars, etc.)
export const uploadSingle = upload.single('image');

// Multiple files with same field name (max 10)
export const uploadMultiple = upload.array('images', 10);

export default upload;