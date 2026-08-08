const futuro = Date.now() + 1000;
let quantidade = 0;

while (Date.now() < futuro) {
    quantidade++
} // esse bloco vai ficar esperando 10 segundos para ir para a parte final do código

console.log('Qtde: ' + quantidade);