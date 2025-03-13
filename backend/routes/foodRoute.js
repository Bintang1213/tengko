import express from 'express';
import { addFood } from '../controllers/foodController.js';
import multer from 'multer';
import fs from 'fs';

const foodRouter = express.Router();

// Buat folder uploads jika belum ada
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Konfigurasi Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Middleware untuk menangani error multer
const uploadMiddleware = (req, res, next) => {
    upload.single("image")(req, res, function (err) {
        if (err) {
            console.error("Multer Error:", err);
            return res.status(400).json({
                success: false,
                message: "File upload error: " + err.message
            });
        }
        next();
    });
};

foodRouter.post('/add', uploadMiddleware, addFood);

export default foodRouter;
