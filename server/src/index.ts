import express, { Request, Response } from 'express';
import { RoomController } from './controllers/roomController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/room", RoomController)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})