import * as isEmail from 'isemail';
import {HttpErrors} from '@loopback/rest';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateCredentials(credentials: any) {
  if (!isEmail.validate(credentials.email)) {
    throw new HttpErrors.UnprocessableEntity('invalid Email');
  }

  if (credentials.password.length < 8) {
    throw new HttpErrors.UnprocessableEntity(
      'password length should be greater than 8',
    );
  }
}
