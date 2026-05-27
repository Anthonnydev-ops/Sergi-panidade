import { useState } from "react";
import "./card.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";

export default function Card({ item }) {
  const [favorito, setFavorito] = useState(false);
  const [abrirModal, setAbrirModal] = useState(false);

  function abrirMapa() {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.endereco)}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={item.imagem} alt={item.titulo} />

          <span
            className="favorite"
            onClick={() => setFavorito(!favorito)}
            style={{ cursor: "pointer" }}
          >
            {favorito ? "❤️" : "🤍"}
          </span>
        </div>

        <div className="card-content">
          <div className="card-header">
            <h3>{item.titulo}</h3>
            <span className="rating">⭐ {item.nota}</span>
          </div>

          <p className="descricao">{item.descricao}</p>

          <p className="info">
            <FaMapMarkerAlt /> {item.endereco}
          </p>

          <p className="info">
            <FaPhoneAlt /> {item.telefone}
          </p>

          <p className="info">
            <FaClock /> {item.horario}
          </p>

          <button
            className="btn-outline"
            onClick={() => setAbrirModal(true)}
          >
            Ver mais
          </button>

          <div className="card-actions">
            <button className="btn-map" onClick={abrirMapa}>
              <FiNavigation /> Mapa
            </button>

            <button className="btn-avaliar">Avaliar</button>
          </div>
        </div>
      </div>

      {/* ✅ MODAL */}
      {abrirModal && (
        <div
          className="modal-overlay"
          onClick={() => setAbrirModal(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{item.titulo}</h2>
            <p>{item.descricao}</p>

            <button onClick={() => setAbrirModal(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}