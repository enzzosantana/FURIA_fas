import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Dados from "./pages/Dados/Dados.jsx";
import Acessar from "./pages/Acesso/Acessar.jsx";
import Jogos from "./pages/Jogos/jogos.jsx";
import FuriaVideos from "./pages/Conteudo/FuriaVideos.jsx";
import "./index.css";



// configuração do react-router

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acessar />,
  },

  {
    path: "/Dados",
    element: <Dados />,
  },

  {
    path: "/Jogos",
    element: <Jogos />,
  },

  {
    path: "/FuriaVideos",
    element: <FuriaVideos />,
  }
]);




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
