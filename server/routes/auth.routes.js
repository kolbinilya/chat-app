import {Router} from 'express';
import {login, logout, signup} from "../controllers/auth.controller.js";

const router = Router();


router.post('/login', login)
router.post('/logout', logout)

router.post('/signup', signup)

export default router;