let contador, contagem, fatorial;

for (contador = 1; contador <= 10; contador++) {
  if (contador % 2 !== 0) {
    fatorial = 1;
    for (contagem = 1; contagem <= contador; contagem++) {
      fatorial *= contagem;
    }
    console.log("O fatorial de " + contador + " é: " + fatorial);
  }
}