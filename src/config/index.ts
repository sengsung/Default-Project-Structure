import { Algorithm } from 'jsonwebtoken';
const JWTAlgorithm: Algorithm = 'HS512';

export default {
  jwt: {
    key: 'key',
    options: {
      issuer: 'DimigoPetition',
      expiresIn: '30d',
      algorithm: JWTAlgorithm,
    },
  },
  db: {
    mongo: {
      host: '127.0.0.1',
      port: 27017,
      database: 'testdb',
      user: 'username',
      password: 'password',
    },
  },
  server: {
    host: '127.0.0.1',
    port: 80,
    allowOrigins: [
      'http://localhost',
      'http://127.0.0.1'
    ],
  },
};
