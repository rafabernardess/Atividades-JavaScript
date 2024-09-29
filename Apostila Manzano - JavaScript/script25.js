let soma = 0;
let contador = 1;

while(contador <= 10){
    let valor = parseFloat(prompt(`Digite o ${contador}º valor: `));
    soma = soma + valor;
    contador++;
}

let media = soma / 10;
console.log(`Somatória dos valores: ${soma}`);
console.log(`Média aritmética dos valores: ${media}`);