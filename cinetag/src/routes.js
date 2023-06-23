import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaBase from "./pages/PaginasBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        /* rotas aninhadas */
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="Favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
