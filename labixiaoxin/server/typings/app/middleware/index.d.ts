// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthorToken = require('../../../app/middleware/authorToken');

declare module 'egg' {
  interface IMiddleware {
    authorToken: typeof ExportAuthorToken;
  }
}
