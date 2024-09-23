// Criação de um Objeto JSON:
let aluno = {
nome: "Gabriella",
idade: 18,
curso: "Ciencia da Computação",
notas: [8.0, 7.5, 9.0],
};

// Acesso a Propriedades: 
console.log (aluno.nome);
console.log (aluno.notas [0]);

//Modificação de Propriedades: 
aluno.idade = 25;
aluno.notas.push (8.5)
console.log (aluno)

//Conversão para String: 
let alunoStri= JSON.stringify (aluno);
console.log (alunoStri);

//Conversão para Objeto: 
let alunoObj= JSON.parse (alunoStri);
console.log (alunoObj);

//Iteração sobre Propriedades: 
for (let propriedade in aluno){
    console.log ('{propriedade}:{aluno[propriedade]}');
}

//Cálculo da Média das Notas:
let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / aluno.notas.length;
console.log(media);

//Criação de um Objeto JSON Aninhado: 
aluno.endereço = {
    rua: "Sargento Miguel Moreno",
    cidade: "João Pessoa",
    estado: "PB"
};

//Acesso a Dados Aninhados: 
console.log (aluno.endereço.cidade);
console.log (aluno.endereço.estado);

//Lista de Alunos: 
let alunos = [
    {
        nome: "João",
        idade: 30,
        curso: "Ciencia da Computação",
        notas: [9.0, 7.5, 9.0]
    },
    {
        nome: "Eduarda",
        idade: 21,
        curso: "Ciencia da Computação",
        notas: [6.0, 7.5, 8.0],
    },
    {
        nome: "Clara",
        idade: 23, 
        curso: "Ciencia da Computação",
        notas: [7.0, 7.5, 9.0],
    }
];
//Filtragem de Alunos: 
let alunosComMediaAlta = alunos.filter(aluno => {
    let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    return media > 8;
  });