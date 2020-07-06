import Conf from './config';
import DB from './db';

// import './tasks';

import web from './app-web';

DB.connect(() => {
  web.listen(Conf.server.port, () => {
    console.log(`Web Server Start ${Conf.server.port}`);
  });
});

declare global {
  namespace Express {
    interface Request {
      auth: {
        _id: number;
      }
    }
  }
}
