let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado; // && se refere ao E 
console.log(resultadoE);

let resultadoOU = '#2 (OR)- Vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem; // || se refere ao OU 
console.log(resultadoOU);

console.log(true !== true); // !== se refere ao XOR
console.log(true !==false);
console.log(false !== true);
console.log(false !== false);

console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);