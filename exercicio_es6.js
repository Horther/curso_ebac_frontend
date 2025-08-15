const alunos = [
    {   nome:'Alice',
        nota: 10},
    {   nome:'Beatriz',
        nota: 9},
    {   nome:'Cleiton',
        nota: 7},
    {   nome:'Denise',
        nota: 6},
    {   nome:'Edison',
        nota: 4},
    {   nome:'Felipe',
        nota: 0
    }
]


function alunosAprovados(alunos){
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);

console.log(aprovados)