/* foi preciso 3 partes para ter uma quantidade determinada de repetições:
1. Variável que ajuda a controlar o laço
2. A expressão que precisa mudar durante a execução do código
3. Uma lógica que alterna a variável de controle até que a condição se torne falsa
*/
let controle = 1;

while (controle <= 10) {
    console.log(controle);
    controle++;
}

console.log('Fim!');