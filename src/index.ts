import {GesraApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import fs from 'fs';

export {GesraApplication};

export async function main(
  options: ApplicationConfig = {
    rest: {
      protocol: 'https',
      cert: fs.readFileSync('./cert.pem'),
    },
  },
) {
  const app = new GesraApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
