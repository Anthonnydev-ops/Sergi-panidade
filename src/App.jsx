import Grid from "./components/Grid";

import atalaia from "./assets/atalaia.png";
import orla from "./assets/atalaia.png";
import calcadao from "./assets/calcadao.png";
import canion from "./assets/canion.png";
import colina from "./assets/colina.png";
import mercado from "./assets/mercado.png";
import museu from "./assets/museu.png";
import oceanario from "./assets/oceanario.png";
import praca from "./assets/praca.png";
import sementeira from "./assets/sementeira.png";
import passarela from "./assets/passarela.png";
import refugio from "./assets/refugio.png";

function App() {
  const items = [
    {
      titulo: "Praia de Atalaia",
      nota: 4.8,
      descricao: "Uma das praias mais famosas de Aracaju.",
      endereco: "Av. Santos Dumont, Aracaju - SE",
      telefone: "(79) 99999-0001",
      horario: "08:00 - 18:00",
      imagem: atalaia
    },
    {
      titulo: "Orla de Atalaia",
      nota: 4.7,
      descricao: "Lugar perfeito para passear e aproveitar.",
      endereco: "Orla de Atalaia, Aracaju - SE",
      telefone: "(79) 99999-0002",
      horario: "24h",
      imagem: orla
    },
    {
      titulo: "Museu da Gente Sergipana",
      nota: 4.9,
      descricao: "Cultura e história de Sergipe.",
      endereco: "Av. Ivo do Prado, Aracaju - SE",
      telefone: "(79) 99999-0003",
      horario: "09:00 - 17:00",
      imagem: museu
    },
    {
      titulo: "Mercado Municipal",
      nota: 4.5,
      descricao: "Artesanato e comidas típicas.",
      endereco: "Centro, Aracaju - SE",
      telefone: "(79) 99999-0004",
      horario: "06:00 - 14:00",
      imagem: mercado
    },
    {
      titulo: "Parque da Sementeira",
      nota: 4.6,
      descricao: "Área verde para lazer e esportes.",
      endereco: "Av. Beira Mar, Aracaju - SE",
      telefone: "(79) 99999-0005",
      horario: "05:00 - 21:00",
      imagem: sementeira
    },
    {
      titulo: "Oceanário de Aracaju",
      nota: 4.7,
      descricao: "Aquário com diversas espécies marinhas.",
      endereco: "Orla de Atalaia, Aracaju - SE",
      telefone: "(79) 99999-0006",
      horario: "10:00 - 18:00",
      imagem: oceanario
    },
    {
      titulo: "Passarela do Caranguejo",
      nota: 4.6,
      descricao: "Restaurantes e vida noturna.",
      endereco: "Atalaia, Aracaju - SE",
      telefone: "(79) 99999-0007",
      horario: "18:00 - 02:00",
      imagem: passarela
    },
    {
      titulo: "Praia do Refúgio",
      nota: 4.8,
      descricao: "Praia tranquila e paradisíaca.",
      endereco: "Zona Sul, Aracaju - SE",
      telefone: "(79) 99999-0008",
      horario: "08:00 - 17:00",
      imagem: refugio
    },
    {
      titulo: "Colina do Santo Antônio",
      nota: 4.5,
      descricao: "Vista panorâmica da cidade.",
      endereco: "Centro, Aracaju - SE",
      telefone: "(79) 99999-0009",
      horario: "08:00 - 18:00",
      imagem: colina
    },
    {
      titulo: "Cânion do Xingó",
      nota: 5.0,
      descricao: "Passeio incrível de barco.",
      endereco: "Canindé de São Francisco - SE",
      telefone: "(79) 99999-0010",
      horario: "07:00 - 17:00",
      imagem: canion
    },
    {
      titulo: "Praça Fausto Cardoso",
      nota: 4.4,
      descricao: "Centro histórico e cultural.",
      endereco: "Centro, Aracaju - SE",
      telefone: "(79) 99999-0011",
      horario: "24h",
      imagem: praca
    },
    {
      titulo: "Calçadão João Pessoa",
      nota: 4.3,
      descricao: "Área comercial movimentada.",
      endereco: "Centro, Aracaju - SE",
      telefone: "(79) 99999-0012",
      horario: "08:00 - 18:00",
      imagem: calcadao
    }
  ];

  return <Grid items={items} />;
}

export default App;