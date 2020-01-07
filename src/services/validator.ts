/* eslint-disable @typescript-eslint/no-explicit-any */
import * as isEmail from 'isemail';
import {HttpErrors} from '@loopback/rest';

export function validateCredentials(credentials: any) {
  if (!isEmail.validate(credentials.email)) {
    throw new HttpErrors.UnprocessableEntity('invalid Email');
  }

  if (credentials.password.length < 8) {
    throw new HttpErrors.UnprocessableEntity(
      'Password length should be greater than 8',
    );
  }
}
