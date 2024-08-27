import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { uploadImage } from '@/controllers/upload-controller';

const uploadRouter = Router();

uploadRouter.all('/*', authenticateToken).post('/upload', postUpload);

export { uploadRouter };