let base = parseInt(prompt("Digite o valor da base:"));
let expoente = parseInt(prompt("Digite o valor do expoente:"));
let resultado = 1;

for (let contador = 1; contador <= expoente; contador++) {
    resultado *= base;
}

console.log(`${base} elevado a ${expoente} é: ${resultado}`);