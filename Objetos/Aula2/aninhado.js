const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155556666", "2244445555"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apto: true,
    complemento: "ap 934",
};

console.log(cliente["endereco"]);