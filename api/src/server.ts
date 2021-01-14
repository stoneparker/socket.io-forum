import express, { Request, Response } from 'express';
import cors from 'cors';
import http, { createServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import Routes from './routes/routes';

export default class Servera {
   app: express.Application;
   server: http.Server;
   io: SocketIOServer;

   constructor() {
      this.app = express();
      this.server = createServer(this.app);
      this.io = new SocketIOServer(this.server, {
         cors: {
            credentials: true,
         }
      });
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
      // iniciar io aqui
   }

   init(port: Number) {
      this.server.listen(port);
   }
}
