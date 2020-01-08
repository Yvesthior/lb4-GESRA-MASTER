import {genSalt, hash} from 'bcryptjs';
interface PasswordHasher<T = string> {
  hashPassword(password: T): Promise<T>;
}

export class BcryptHasher implements PasswordHasher<string> {
  round = 10;
  async hashPassword(password: string) {
    const salt = await genSalt(this.round);
    return hash(password, salt);
  }
}
