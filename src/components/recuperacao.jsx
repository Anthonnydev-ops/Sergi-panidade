import React, { useState } from "react";
import { X, Mail, ArrowLeft } from "lucide-react";
import emailjs from '@emailjs/browser'; 
import "./recuperacao.css";
import logoSergipanidade from "../assets/logo.png";


emailjs.init("OFmCxXHOcRuySoJe9");

function Recuperacao() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const enviarEmail = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Digite um e-mail válido");
      return;
    }

    setLoading(true);

    
    const templateParams = {
      to_email: email,
      message: "Você solicitou a recuperação de senha no portal Sergipanidade.",
    };

    
    emailjs.send(
      'service_iw0xk2c',   
      'template_mgoiai8',  
      templateParams,
      'OFmCxXHOcRuySoJe9'    
    )
    .then((result) => {
        alert("Se existe algum e-mail cadastrado com esse endereço, você receberá um link de recuperação.");
        setEmail("");
        setOpen(false);
    })
    .catch((error) => {
        console.error("Erro detalhado:", error);
        alert("Erro ao enviar. Verifique se as chaves do EmailJS estão certas no código.");
    })
    .finally(() => {
        setLoading(false);
    });
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("");
  };

  if (!open) return null;

  return (
    <div className="modal-overlay active">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          <X size={18} className="icon-small" />
        </button>

        <div className="modal-header">
          <div className="logo-container">
            <img src={logoSergipanidade} alt="Logo Sergipanidade" className="logo-img" />
            <h1 className="logo-title">SERGIPANIDADE</h1>
          </div>
          <h2 className="modal-title">Recuperar Senha</h2>
          <p className="modal-desc">Digite seu e-mail para receber um link de recuperação.</p>
        </div>

        <form onSubmit={enviarEmail}>
          <div className="form-group">
            <label>E-mail</label>
            <div className="input-wrapper">
              <Mail className="input-icon-left" />
              <input 
                type="email" 
                placeholder="Seu e-mail cadastrado" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="form-actions-column">
            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? "Enviando..." : "Enviar link de recuperação"}
            </button>
            <button type="button" className="btn-ghost w-full" onClick={handleClose}>
              <ArrowLeft size={18} /> Voltar para o login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Recuperacao;