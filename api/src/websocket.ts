import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import express from 'express';

export default class ServerIO {
   io: Server;
   httpServer: any;

   constructor(app: Express.Application) {
      this.httpServer = createServer(app);
      this.io = new Server(this.httpServer, {
         cors: {
            credentials: false,
         }
      });
   }

   ioServer() {
      this.io.on('connection', (socket: Socket) => {
         console.log('userconnected');
      });

      console.log('fala mano');
   }

   init(port: Number) {
      this.httpServer.listen(port, () => {
         console.log('listening on 3000')
      });
   }
}

// const setupWebSocket = (server) => {
//    let io = new Server(server, {
//       cors: {
//          credentials: false,
//       }
//    });

//    io.on('connection', (socket: Socket) => {
//       console.log('userconnected');
//    });

//    console.log('fala mano');
// }

// export { setupWebSocket };