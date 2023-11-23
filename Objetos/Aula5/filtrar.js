const clientes = require("./clientes.json");

function apSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

const filtrados = apSemComplemento(clientes);

console.log(filtrados);


// A função apSemComplemento() recebe um array de clientes como parâmetro e retorna um novo array com 
// todos os clientes que possuem um apartamento, mas não possuem complemento de endereço.
// A função começa declarando uma variável clientes que recebe o array de clientes passado como parâmetro. 
// Em seguida, ela chama a função filter() para filtrar o array de clientes. A função filter() recebe um callback 
// como parâmetro. O callback é uma função que é chamada para cada item do array. O valor retornado pelo callback 
// determina se o item deve ser incluído no novo array.
// No caso da função apSemComplemento(), o callback é definido como:
// (cliente) => {
//     return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
// }
// Esse callback verifica se o item do array possui um atributo apartamento e se o item não possui um atributo complemento.
// Se ambos os testes forem verdadeiros, o callback retorna true, indicando que o item deve ser incluído no novo array.
// Portanto, a função apSemComplemento() retorna um novo array com todos os clientes que possuem um apartamento, mas não possuem 
// complemento de endereço.