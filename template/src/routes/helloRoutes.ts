import { Router } from 'express';
import { sayHello } from '../controllers/helloController.js';

const router = Router();

router.get('/', sayHello);

export default router;
