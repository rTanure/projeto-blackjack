import express, { Request, Response } from 'express';
import { RoomController } from './controllers/roomController';
import { setupGameSocket } from './sockets/gameSocket';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const PORT = process.env.PORT || 3000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
})

app.use("/room", RoomController)

setupGameSocket(io)

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})