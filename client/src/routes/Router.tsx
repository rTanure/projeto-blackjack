import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Game from "../pages/Game/Game";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/*" element={<Navigate to={"/"} />}/>
      </Routes>
    </BrowserRouter>
  );
}
