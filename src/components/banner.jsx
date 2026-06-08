import { useState, useEffect } from "react";
import "./banner.css";

import gif1 from "../assets/animacao.gif";
import gif2 from "../assets/colina.gif";
import gif3 from "../assets/mercado.gif";

const gifs = [gif1, gif2, gif3];

export default function Banner() {
  const [abrirModal, setAbrirModal] = useState(false);
  const [index, setIndex] = useState(0);

  // 🔥 troca automática dos gifs
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % gifs.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div className="banner-container">
        <div className="banner">

          {/* ESQUERDA */}
          <div className="banner-left">
            <img src={gifs[index]} alt="preview" />
            <span className="tag">@Sergipanidade</span>
          </div>

          {/* DIVISOR */}
          <div className="divider"></div>

          {/* DIREITA */}
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