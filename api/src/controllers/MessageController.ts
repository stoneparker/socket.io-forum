import { Request, Response } from 'express';
import Message from '../models/Message';
import User from '../models/User';

// import connectIOn from '../websocket';

export default class MessageController {
   async store(data: string) {
      try {
      //    const { content } = request.body;
      //    const user_id = request.header('Authorization');

      //    const user = await User.findById(user_id);

         const message = await Message.create({
            content: data,
            datetime: new Date(),
            user: '5ff8aafc13f94330bc719987',
         })

         return true;

      } catch (error) {
         return false;
      }
   }

   async index() {
      const messages = await Message.find();

      return messages;
   }
}
