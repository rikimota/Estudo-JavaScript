const alunos = ['Joao', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];

function exibeNomeNota(aluno) {
    //INCLUDES verifica se o valor esta ou nao dentro da lista e retorna TRUE ou FALSE.
    if (listaAlunosMedias[0].includes(aluno)) {

        // const alunos = listaAlunosMedias[0];
        // const medias = listaAlunosMedias[1];
        const [alunos, medias] = listaAlunosMedias; //desestruturação de lista

        //retorna o valor do indice do aluno passado
        const indice = alunos.indexOf(aluno); 

        //pega o indice do aluno e o valor com mesmo indice na tabela de media
        const mediaDoAluno = medias[indice]; 

        console.log(`${aluno} possui a media ${mediaDoAluno}`);
    } else {
        console.log(`Aluno nao cadastrado!`);
    }
}

exibeNomeNota(`Joao`);