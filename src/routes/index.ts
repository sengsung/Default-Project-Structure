import { Express } from 'express';

import { } from '../middlewares';

import testRouter from './test';

export default (app: Express): void => {
  app.use('/test', testRouter);
};
