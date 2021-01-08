import Server from './server';
import Database from './database';
import ServerIO from './websocket';

Database.connect();

const server = new Server();
server.httpServer();
server.ioServer();
server.init(3333);

// const serverio = new ServerIO(server.app);
// serverio.ioServer();
// serverio.init(3000);

