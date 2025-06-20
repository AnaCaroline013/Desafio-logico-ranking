function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

const jogadores = [
  { vitorias: 8, derrotas: 2 },
  { vitorias: 35, derrotas: 10 },
  { vitorias: 83, derrotas: 10 },
  { vitorias: 120, derrotas: 5 }
];

for (let i = 0; i < jogadores.length; i++) {
  const { vitorias, derrotas } = jogadores[i];
  console.log(calcularNivel(vitorias, derrotas));
}