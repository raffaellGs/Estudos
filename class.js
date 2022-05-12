class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}

const p1 = new Pessoa('Rafael', 'Gomes')
p1.falar()

const p2 = new Pessoa('Idalia', 'Plácida')
p2.falar()