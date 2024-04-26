import {Router} from 'express';
import {getUsersForSidebar} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = Router();

router.get('/', protectRoute, getUsersForSidebar)

export default router;