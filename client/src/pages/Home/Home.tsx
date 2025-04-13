import { Button } from "@mui/material";
import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  
})

export default function Home() {
  const navigate = useNavigate();

  socket.connect()
  useEffect(() => {
  }, [])

  function handleCreateRoom() {
    navigate("/game");
  }

  function handleJoinRoom() {
    navigate("/game");
  }

  return (
    <div className="">
      <div>
        <h1>BLACKJACK</h1>
        <p>Criado por Richardy Tanure</p>
      </div>
      <div>
        <Button onClick={handleCreateRoom}>
          Criar uma sala
        </Button>
        <Button onClick={handleJoinRoom}>
          Entrar em uma sala
        </Button>
      </div>
    </div>
  );
}
