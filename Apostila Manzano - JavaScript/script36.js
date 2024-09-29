let nome;
let largura, comprimento, area, total_area = 0;
let resposta;

do {
  nome = prompt("Nome do cômodo: ");
  largura = parseFloat(prompt("Largura do cômodo: "));
  comprimento = parseFloat(prompt("Comprimento do cômodo: "));
  
  area = largura * comprimento;
  total_area += area;

  console.log("Área do " + nome + ": " + area);
  
  resposta = prompt("Deseja continuar? (Sim/Não): ");
} while (resposta.toLowerCase() !== "não");

console.log("Área total da residência: " + total_area);