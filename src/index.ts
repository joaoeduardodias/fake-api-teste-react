import jsonServer from 'json-server';




const server = jsonServer.create();
const router = jsonServer.router('enterprises-server.json'); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; 

server.use(middlewares);
server.use(router);

server.listen(port);