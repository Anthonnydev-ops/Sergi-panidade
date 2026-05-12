import { useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const enviarEmail = async () => {
    if (!email) {
      alert("Digite um email válido");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_iw0xk2c",
        "template_mgoiai8",
        {
          to_email: email,
          message: "Clique aqui para recuperar sua senha"
        },
        "OFmCxXHOcRuySoJe9"
      );

      alert("Se tiver algum e-mail vinculado a este, será enviado um email de recuperação");
    } catch (error) {
      console.error("ERRO COMPLETO:", error);
      alert("Erro ao enviar email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recuperar senha</h1>

      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={enviarEmail} disabled={loading}>
        {loading ? "Enviando..." : "Recuperar senha"}
      </button>
    </div>
  );
}

export default App;