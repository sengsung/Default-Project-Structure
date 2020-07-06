import { Router } from 'express';
import * as controller from '../controllers/test';

import { } from '../middlewares';

const router = Router();

router.get('/', controller.get);

export default router;
