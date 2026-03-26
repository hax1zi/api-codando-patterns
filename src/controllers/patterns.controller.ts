import { Request, Response, NextFunction } from 'express';
import { PatternsService } from '../services/patterns.service';
import { PatternsRepository } from '../repositories/patterns.repository';

export class PatternsController {
  private service: PatternsService;

  constructor(service?: PatternsService) {
    this.service = service ?? new PatternsService(new PatternsRepository());
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const page = parseInt((req.query.page as string) || '1', 10);
      const limit = parseInt((req.query.limit as string) || '10', 10);
      const result = await this.service.list(page, limit);
      res.json(result.data);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const item = await this.service.getById(id);
      if (!item) return res.status(404).json({ message: 'Not found' });
      res.json(item);
    } catch (err) {
      next(err);
    }
  }

  // async search(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const q = (req.query.q as string) || '';
  //     const items = await this.service.search(q);
  //     res.json(items);
  //   } catch (err) {
  //     next(err);
  //   }
  // }
}
