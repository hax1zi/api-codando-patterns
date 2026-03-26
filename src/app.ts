import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import patternsRouter from './routes/patterns.routes';
import { notFound } from './middlewares/not-found.middleware';
import { errorHandler } from './middlewares/error.middleware';

export default function createApp() {
  const app = express();
  // some middleware type signatures may conflict between packages/types versions
  // cast to `any` to keep runtime behavior while avoiding TS overload conflicts
  app.use(helmet() as any);
  app.use(cors() as any);
  app.use(compression() as any);
  app.use(express.json() as any);
  app.use('/api/patterns', patternsRouter as any);
  app.get('/api/health', (_req, res) => res.json({ ok: true }));
  app.use(notFound);
  app.use(errorHandler);
  return app;
}
