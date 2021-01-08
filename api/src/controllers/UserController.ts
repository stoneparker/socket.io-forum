import { Request, Response } from 'express';
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
         
         return response.json(user);
      } catch (error) {
         return response.json({ message: 'Erro no cadastro de usuário' });
      }
   }

   async index(request: Request, response: Response) {
      const users = await User.find();

      return response.json(users);
   }
}