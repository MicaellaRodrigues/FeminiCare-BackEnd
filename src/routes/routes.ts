import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { UserController } from '../controllers/userController';
import { ProfessionalController } from '../controllers/professionalController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Auth Routes
router.post('/api/auth/login/professional', AuthController.loginProfessional);
router.post('/api/auth/login/admin', AuthController.loginAdmin);
router.post('/api/auth/forgot-password', AuthController.forgotPassword);
router.post('/api/auth/reset-password', AuthController.resetPassword);

// User Routes
router.post('/api/users', UserController.create);
router.get('/api/users', authMiddleware, UserController.getAll);
router.get('/api/users/:id', authMiddleware, UserController.getById);
router.put('/api/users/:id', authMiddleware, UserController.update);
router.delete('/api/users/:id', authMiddleware, UserController.delete);

// Professional Routes
router.post('/api/professionals', ProfessionalController.create); // Cadastro de profissionais (não requer autenticação)
router.get('/api/professionals', authMiddleware, ProfessionalController.getAll);
router.get('/api/professionals/:id', authMiddleware, ProfessionalController.getById);
router.put('/api/professionals/:id', authMiddleware, ProfessionalController.update);
router.delete('/api/professionals/:id', authMiddleware, ProfessionalController.delete);

export default router;