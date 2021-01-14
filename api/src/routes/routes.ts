import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import MessageController from '../controllers/MessageController';

export default class Routes {
   routes: Router;
   private userController: UserController;
   private messageController: MessageController;

   constructor() {
      this.routes = Router();
      this.userController = new UserController();
      this.messageController = new MessageController();

      this.presentation();
   }

   private presentation() {
      this.routes.get('/', (request: Request, response: Response) => {
         return response.send('FORUM API with MongoDB, by Vitória Lopes Diogo');
      })
   }

   private userRoutes() {
      this.routes.post('/user', this.userController.store);
      this.routes.get('/users', this.userController.index);
      this.routes.get('/user', this.userController.login);
   }

   private messageRoutes() {
      this.routes.post('/message', this.messageController.store);
      this.routes.get('/messages', this.messageController.index);
   }

   serverRoutes() {
      this.userRoutes();
      this.messageRoutes();
   }
}
