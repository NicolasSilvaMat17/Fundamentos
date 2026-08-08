/* sistema que calcula se o aluno está aprovado, reprovado ou em recuperação, usar tres notas para fazer esse calculo,
a menor nota vai ser descartada, só vai utilizar duas notas para a média */
const nota1 = 5.8;
const nota2 = 1.1;
const nota3 = 2.1;                
// função que vai retornar o menor valor
function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function mediaDuasMaioresNotas(n1, n2, n3) {
    const menorNota = minimo(nota1, minimo(nota2, nota3));

    if(menorNota === n1) {
        return (n2 + n3) / 2;
    } else if(menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }

}

function mediaParaStatus(media) {
    if(media >= 7) {
        return 'Aprovado';
    } else if(media >= 4) {
        return 'Recuperação';
    } else {
        return 'Reprovado'
    }
}
const mediaFinal = mediaDuasMaioresNotas(nota1, nota2, nota3);
const statusAluno = mediaParaStatus(mediaFinal)
console.log(`O resultadofinal do aluno é ${statusAluno}! `)