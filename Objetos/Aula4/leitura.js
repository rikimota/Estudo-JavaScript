const dados = require("./cliente.json");


//Testando a importacao feita do "cliente.json"
console.log(dados);
console.log(typeof dados);
console.log(dados.email);


//Transformando o objeto em uma STRING
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);


//Transformando a STRING em um objeto novamente
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);