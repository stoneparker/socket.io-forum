import Server from './server';
import Database from './database';
import config from './config/config';

Database.connect();

const server = new Server();
server.httpServer();
server.ioServer();
server.init(Number(config.port));
