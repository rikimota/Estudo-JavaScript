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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

//O operador de espelhamento "..." copia as propriedades de objetos para outros, "espalhando"
//os conteudos.

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);

//Apesar de pratico, o uso da sintaxe de espalhamento deve ser usado com cuidado em caso de 
//loops ou funcoes recursivas.