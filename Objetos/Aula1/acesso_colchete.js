const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11122233300",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente e ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura'];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});