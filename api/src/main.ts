import Server from './server';
import Database from './database';
import config from './config/config';
import ServerIO from './routes/websocket';

Database.connect();

const server = new Server();
server.httpServer();
server.init(Number(config.port));

const server_io = new ServerIO(server.io);

server_io.connection();
