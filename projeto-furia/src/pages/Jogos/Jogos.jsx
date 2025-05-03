import JogoCs from "../../assets/Jogo_cs";
import JogoLol from "../../assets/Jogo_lol";
import JogoRocket from "../../assets/Jogo_rocket";
import JogoValorant from "../../assets/Jogo_valorant";
import { NavLink, useNavigate } from "react-router-dom"; // import useNavigate
import "./Jogos.css";
import { useState } from "react";
import { database } from "../../services/firebaseConfig"; // Importando o Firebase
import { doc, updateDoc } from "firebase/firestore"; // Importando funções para atualizar dados

function Jogos() {
  const [jogoSelecionado, setJogoSelecionado] = useState(null);
  const navigate = useNavigate(); // inicializa useNavigate

  const jogos = [
    { name: "CSgo", link: <JogoCs /> },
    { name: "LOL", link: <JogoLol /> },
    { name: "Valorant", link: <JogoValorant /> },
    { name: "Rocket League", link: <JogoRocket /> },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jogoSelecionado) {
      alert("Por favor, selecione um jogo!");
      return;
    }

    const usuarioId = localStorage.getItem("usuarioId");

    if (!usuarioId) {
      alert("ID do usuário não encontrado.");
      return;
    }

    try {
      const userDoc = doc(database, "usuarios", usuarioId);
      await updateDoc(userDoc, {
        jogoFavorito: jogoSelecionado,
      });

      localStorage.removeItem("usuarioId");

      // redireciona para /FuriaVideos após salvar
      navigate("/FuriaVideos");

    } catch (error) {
      console.error("Erro ao salvar o jogo:", error);
      alert("Erro ao salvar o jogo.");
    }
  };

  return (
    <>
      <div className="container-jogos">
        <form className="selecionar-jogos" onSubmit={handleSubmit}>
          <h1 className="text-jogos">Selecione seu jogo favorito!</h1>
          <div className="space-jogos">
            {jogos.map((item) => (
              <div key={item.name} className="card-jogos">
                <input
                  type="radio"
                  name="jogo"
                  id={item.name}
                  onClick={() => setJogoSelecionado(item.name)}
                />
                <label
                  htmlFor={item.name}
                  className={`image ${jogoSelecionado === item.name ? "selecionado" : ""}`}
                >
                  {item.link}
                </label>
              </div>
            ))}
          </div>

          <div className="space-button-jogos">
            <NavLink to="/Dados" className="button-voltar-jogos">
              Voltar
            </NavLink>
            <button type="submit" className="button-finalizar-jogos">
              Próximo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Jogos;
