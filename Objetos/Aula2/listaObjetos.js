const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155556666", "2244445555"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apto: true,
        complemento: "ap 934",
    },
];

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apto: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apto === true
);

console.log(listaApenasApartamentos);