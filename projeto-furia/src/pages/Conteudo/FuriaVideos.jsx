import React, { useEffect, useState } from "react";
import "./FuriaVideos.css"; // Importando o CSS para estilização
import { NavLink } from "react-router-dom";

function FuriaVideos() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/youtube");
        const data = await response.json();

        console.log("Vídeos recebidos:", data.videos); // Verifique a resposta aqui

        if (data.videos) {
          setVideos(data.videos);
        } else {
          setError("Nenhum vídeo encontrado.");
        }
      } catch (error) {
        setError("Erro ao buscar vídeos.");
        console.error("Erro ao buscar vídeos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container-videos">
      <div className="video-grid">
        {videos.map((video, index) => {
          const snippet = video.snippet;
          const videoId = video.id?.videoId;

          return (
            <div key={index} className="video-card">
              <img
                src={snippet.thumbnails.medium.url}
                alt={snippet.title}
                className="video-thumbnail"
              />

              <div className="video-info">
                <h3 className="video-title">{snippet.title}</h3>
                <p className="video-source">Fonte: YouTube</p>
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-button"
                >
                  Ver vídeo
                </a>
              </div>
            </div>
          );
        })}
      </div>

        <div className="espaco-voltar-button-video">
          <NavLink to="/Jogos" className="button-voltar-video">
            Voltar
          </NavLink>
          <NavLink to="/" className="button-sair-video">
            Sair
          </NavLink>
        </div>
    </div>
  );
}

export default FuriaVideos;
