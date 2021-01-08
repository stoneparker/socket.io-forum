import { Request, Response } from 'express';
import Message from '../models/Message';
import User from '../models/User';

// import connectIOn from '../websocket';

export default class MessageController {
   async store(request: Request, response: Response) {
      try {
         const { content } = request.body;
         const user_id = request.header('Authorization');

         const user = await User.findById(user_id);

         const message = await Message.create({
            content,
            datetime: new Date(),
            user: user_id,
         })

         return response.json(message);

      } catch (error) {
         return response.json({ message: 'Erro no envio de mensagem' });
      }
   }

   async index(request: Request, response: Response) {
      const messages = await Message.find();

      return response.json(messages);
   }

   async io(request: Request, response: Response) {
      // connectIOn();
      return response.json('tentando aqui');
   }
}