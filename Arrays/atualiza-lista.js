const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

//Coloca o indice a ser removido e em seguida ate qual indice quer que seja removido
//O terceiro parametro adiciona algo no lugar dos removidos
nomes.splice(1, 2, "Rodrigo");
console.log(nomes);