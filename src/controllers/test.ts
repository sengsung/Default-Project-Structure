import { wrap } from '../middlewares';

export const get = wrap(async (req, res) => {
  res.send('Hello World!');
});
