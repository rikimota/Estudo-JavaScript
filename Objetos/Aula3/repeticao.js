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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    //filtro para mostrar apenas o que NAO FOR OBJETO
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
};