import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

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
