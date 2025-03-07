import mongoose from 'mongoose';

import CONF from '../config';

let client: mongoose.Connection;

async function connect(callback: Function): Promise<void> {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);

  const url = `mongodb://${CONF.db.mongo.user}:${encodeURIComponent(CONF.db.mongo.password)}@${
    CONF.db.mongo.host
    }:${CONF.db.mongo.port}/${CONF.db.mongo.database}?authSource=admin`;
  mongoose.connect(url, err => {
    if (err) {
      console.error(err);
      console.error('MongoDB Connection Failed');
      process.exit(0);
    }
    console.log('MongoDB Connected');

    client = mongoose.connection;

    callback();
  });
}

export default { connect };
