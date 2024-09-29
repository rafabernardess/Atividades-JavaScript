let contador = 15;
let quadrado;

do {
    quadrado = contador * contador;
    console.log(`O quadrado de ${contador} é ${quadrado}.`);
    contador++;
} while (contador <= 200);