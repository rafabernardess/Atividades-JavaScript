let somatorio = 0;

for (let contador = 1; contador <= 15; contador++) {
    let valor = parseInt(prompt(`Digite o valor ${contador}: `));
    let fatorial = 1;
    for (let contagem = 1; contagem <= valor; contagem++) {
        fatorial *= contagem;
    }
    somatorio += fatorial;
};

console.log(`O somatório dos fatoriais é ${somatorio}.`);