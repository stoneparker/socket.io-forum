import jwt from 'jsonwebtoken';
import config from '../config/config';

export default function generateTokenJWT(payload: string) {
   return jwt.sign(payload, config.jwtSecret);
}
