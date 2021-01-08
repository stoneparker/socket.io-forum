import express, { Request, Response } from 'express';
import cors from 'cors';
import http, { createServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import Routes from './routes';

export default class Servera {
   app: express.Application;
   server: http.Server;

   constructor() {
      this.app = express();
      this.server = createServer(this.app);
   }

   httpServer() {
      this.app.use(cors());
      this.app.use(express.json());

      const routes = new Routes();
      routes.serverRoutes();

      this.app.use(routes.routes);

      this.app.use((request: Request, response: Response) => {
         response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      })
   }

   ioServer() {
      const io = new SocketIOServer(this.server, {
         cors: {
            credentials: true,
         }
      });
      
      io.on('connection', (socket: Socket) => {
         console.log('userconnected');
      });
   }

   init(port: Number) {
      this.server.listen(port);
   }
}
