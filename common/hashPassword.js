import crypto from 'crypto';

const hash = (algorithm, text) => {
  return crypto.createHash(algorithm).update(text).digest('hex');
};

const sha512 = (text) => {
  return hash('sha512', text);
};

export { sha512, hash };
