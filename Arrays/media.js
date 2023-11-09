const notas = [10, 6, 8, 5.5];

//Adiciona valor ao final do array
notas.push(10);
console.log(notas);

//Remove ultimo valor do array
notas.pop();
console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A media e -> ${media}`);