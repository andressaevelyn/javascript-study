const pessoa = {
    "nome": "Anderson",
    "cpf" : "121212121221",
    "rg" : "1212122112121",
    cabelo: {
        tamanho: "longo",
        cor: "preto",
        modelo: "ondulado"

    },
};
console.log(`O meu nome é : ${pessoa.nome}, meu cpf é: ${pessoa.cpf} e minha cor de cabelo é ${pessoa.cabelo.cor}`);



const alunosDoEnem = [
    {
        nome: "Anderson",
        notas: [7,8.5, 10, 5 ], 
        cidade: "Americana"
    },
    {
        nome: "Andressa",
        notas: [ 8,7,5,10],
        cidade: "Santa bárbara"
    },
    { 
        nome: "Thayla",
        notas: [5,9,6,4],
        cidade: "Campinas"
    }
];

const classificacao = {
    aprovados: [],
    reprovados: [],
}

for (let contador = 0; contador<alunosDoEnem.length; contador++) {
    let somaDeNotas = 0;
    for(
        let contador2 = 0; contador2<alunosDoEnem[contador].notas.length; contador2++){
        somaDeNotas = somaDeNotas + alunosDoEnem[contador].notas[contador2];
    }
    const media = somaDeNotas/alunosDoEnem[contador].notas.length;

    if (media>=7) {
        classificacao.aprovados.push(alunosDoEnem[contador]);
    }
    else{
        classificacao.reprovados.push(alunosDoEnem[contador]);
    }
}
console.log (classificacao);
