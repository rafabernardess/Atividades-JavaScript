let soma = 0;
let quantidade = 0;
let contador = 50;

while(contador <= 70){
    if (contador % 2 === 0){
        soma = soma + contador;
        quantidade++;
    }
    contador++;
};

let media = soma / quantidade;

console.log(`A somatória dos valores pares é de: ${soma}`);
console.log(`A média aritmética dos valores pares é de: ${media}`);