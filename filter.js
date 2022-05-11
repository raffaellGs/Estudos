const pessoa = [
    {
        nome: "Rafael Gomes",
        idade: 25,
        salário: 3700,
        sexo: 'M',
        Profissão: 'Desenvolvedor'
    },

    {
        nome: "Idalia Plácida",
        idade: 24,
        salário: 2600,
        sexo: 'F',
        Profissão: 'Recursos Humanos'
    },

    {
        nome: "Jão Pedro",
        idade: 18,
        salário: 1000,
        sexo: 'M',
        Profissão: 'Aprendiz'
    },

    {
        nome: "Sarah Label",
        idade: 34,
        salário: 3550,
        sexo: 'F',
        Profissão: 'Análista'
    },

    {
        nome: "Marcelo Rodrigues",
        idade: 27,
        salário: 1300,
        sexo: 'M',
        Profissão: 'Ajudante'
    },
]

const lista = pessoa.filter(function (dados){
    return dados.salário <= 1500
})

console.log(lista)
