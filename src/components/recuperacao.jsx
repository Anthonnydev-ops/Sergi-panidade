import { useState } from "react";

function Recuperacao() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const enviarEmail = async () => {
    if (!email) {
      alert("Digite um email válido");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to_email: email,
          message: "Clique aqui para recuperar sua senha 🔐",
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Se existir uma conta, o email foi enviado 🚀");
      } else {
        alert("Erro ao enviar email");
      }

    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor");
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
        style={{ padding: "10px", marginBottom: "10px" }}
      />

      <br />

      <button onClick={enviarEmail} disabled={loading}>
        {loading ? "Enviando..." : "Recuperar senha"}
      </button>
    </div>
  );
}

export default Recuperacao;