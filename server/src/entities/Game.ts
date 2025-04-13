import { Room } from "./Room";

export default class Game {
  private rooms: Map<string, Room> = new Map();

  createRoom(roomId: string) {
    if (this.rooms.has(roomId)) {
      throw new Error("Room already exists");
    }
    const room: Room = {
      id: roomId,
      name: `Room ${roomId}`,
      description: `Description for Room ${roomId}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.rooms.set(roomId, room);
    console.log(`>>> ROOM: Room ${roomId} created`)
  }

  removeRoom(roomId: string) {
    
  }

  getRooms(): Room[] {
    return Array.from(this.rooms.values());
  }
}