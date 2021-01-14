import { Server, Socket } from 'socket.io';

import MessageController from '../controllers/MessageController';

export default class ServerIO {
   io: Server;

   constructor(io: Server) {
      this.io = io;
   }

   connection() {
      const messageController = new MessageController;

      this.io.on('connection', (socket: Socket) => {
         socket.emit('previousMessages', async () => {
            const messages = await messageController.index();
            
            return messages;
         });

         socket.on('sendMessage', (data: string) => {
            
            if (messageController.store(data)){
               socket.broadcast.emit('receivedMessage', data);
            }
         });
      });
   }
}
