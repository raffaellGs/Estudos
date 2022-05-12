const criarPessoa = (nome, sobrenome) =>{
    return{
        falar: () => console.log(`Meu nome é ${nome} ${sobrenome}`)
    }
}

const p1 = criarPessoa('Rafael', 'Gomes')
p1.falar()