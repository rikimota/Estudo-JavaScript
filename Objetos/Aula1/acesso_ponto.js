const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11122233300",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente e ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
//Substring retorna os valor de uma posicao ate outra de uma string
console.log(`Os 3 primeiros digitos do CPF sao ${cliente.cpf.substring(0, 3)}`);