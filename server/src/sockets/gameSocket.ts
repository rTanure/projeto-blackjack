import { Server } from 'socket.io';

export function setupGameSocket(io: Server) {
  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  })
}