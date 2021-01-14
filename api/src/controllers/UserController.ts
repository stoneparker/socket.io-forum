import { Request, Response } from 'express';

import generateTokenJWT from '../utils/generateToken';
import User from '../models/User';

export default class UserController {
   async store(request: Request, response: Response) {
      try {
         const {
            username,
            email,
            password,
         } = request.body;

         const user = await User.create({
            username,
            email,
            password
         });

         const token = generateTokenJWT(String(user._id));

         return response.json(token);
      } catch (error) {
         return response.json({ message: `Erro no cadastro de usuário: ${error}` });
      }
   }

   async index(request: Request, response: Response) {
      const users = await User.find();

      return response.json(users);
   }

   async login(request: Request, response: Response) {
      console.log('oi');
      const user = await User.findOne({
         $and: [
            { email: request.body.email },
            { password: request.body.password }
         ]
      });

      return response.json(user);
   }
}