let cotacao_dolar = parseFloat(prompt("Digite a cotação do dólar: "));
let quantidade_dolares = parseFloat(prompt("Digite a quantidade de dólares que deseja converter: "));
let valor_reais = quantidade_dolares * cotacao_dolar;

alert(`O valor da conversão em reais é de: R$ ${valor_reais}`);