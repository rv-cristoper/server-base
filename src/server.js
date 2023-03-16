import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from "socket.io";
import dotenv from "dotenv";
import __dirname from "./utils.js";
import RoutesController from './routes/index.js';

dotenv.config({ path: '.env' });

// Initialize server
const app = express();

// Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Public
app.use(express.static(__dirname + '/../public'))

// Json config
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Assign routes
RoutesController.createRoutes(app);

// Start  server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto: ', PORT)
})
server.on('error', error => console.log('Error en el servidor', error))

// Socket
const socketServer = new Server(server);
socketServer.on('connection',  socket => {
    console.log("Usuario conectado")
})