import { Router } from 'express';
import roomService from '../services/roomService';

export const RoomController = Router();

RoomController.get("/", (req, res) => {
  const message = roomService.roomHelloWorld();
  res.status(200).json({ message });
})