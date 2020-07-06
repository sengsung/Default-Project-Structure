import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import setRoute from './routes';

import Conf from './config';

const corsOption = { origin: Conf.server.allowOrigins };
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('combined'));
app.use(cors(corsOption));

setRoute(app);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.type === 'entity.parse.failed') {
    res.send({ status: 400, msg: 'Invalid json type' });
  } else {
    console.log(err);
    res.send({ status: 500 });
  }
});

export default app;
