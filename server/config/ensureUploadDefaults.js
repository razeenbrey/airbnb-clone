import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ensureUploadDefaults = () => {
  const uploadsDir = path.join(__dirname, 'uploads', 'accommodations');
  const defaultsDir = path.join(__dirname, 'assets', 'defaults');

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  if (!fs.existsSync(defaultsDir)) {
    return;
  }

  const defaultFiles = fs.readdirSync(defaultsDir);

  defaultFiles.forEach((file) => {
    const targetPath = path.join(uploadsDir, file);
    const sourcePath = path.join(defaultsDir, file);

    // always refresh defaults on Render (disk resets on deploy)
    if (process.env.NODE_ENV === 'production' || !fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
};

export default ensureUploadDefaults;
