const notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

//Funciona para percorrer o array do INICIO AO FIM e percorrer TODOS ELEMENTOS
for (let nota of notas) {
    somaNotas += nota;
}

const media = somaNotas / notas.length;

console.log(`A media das notas e ${media}`);