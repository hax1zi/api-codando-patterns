import { Router } from 'express';
import { PatternsController } from '../controllers/patterns.controller';
import { PatternsRepository } from '../repositories/patterns.repository';
import { PatternsService } from '../services/patterns.service';

const router = Router();
const repo = new PatternsRepository();
const service = new PatternsService(repo);
const controller = new PatternsController(service);

router.get('/', (req, res, next) => controller.list(req, res, next));
// router.get('/search', (req, res, next) => controller.search(req, res, next));
router.get('/:id', (req, res, next) => controller.getById(req, res, next));

export default router;
