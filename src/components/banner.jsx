import { useState } from "react";
import "./banner.css";
import gif from "../assets/mercado.gif";

export default function Banner() {
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <>
      <div className="banner-container">
        <div className="banner">

          
          <div className="banner-left">
            <img src={gif} alt="preview" />
            <span className="tag">@Sergipanidade</span>
          </div>

          
          <div className="divider"></div>

          
          <div className="banner-right">
            <h1>
              Encontre <br />
              atividades para <br />
              tudo que você <br />
              curte
            </h1>

            <p>
              Pesquise mais de 400 mil experiências e reserve conosco.
            </p>

            <button
              className="btn-banner"
              onClick={() => setAbrirModal(true)}
            >
              Reserve agora
            </button>
          </div>
        </div>
      </div>

      
      {abrirModal && (
        <div
          className="modal-overlay"
          onClick={() => setAbrirModal(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Você precisa estar logado</h2>
            <p>Faça login para continuar</p>

            <button
              className="btn-login"
              onClick={() => (window.location.href = "/login")}
            >
              Ir para login
            </button>

            <button
              className="btn-fechar"
              onClick={() => setAbrirModal(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}