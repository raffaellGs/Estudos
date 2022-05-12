const cor = ['Green', 'Yellow', 'Back','Blue']

// O método pop() remove o último elemento de um array e retorna aquele elemento.
console.log(cor.pop())

//Adiciona um item na ultima posição
console.log(cor.push('Purple'))

//Remove o primeiro Item
console.log(cor.shift())


console.log(cor.unshift())

console.log(cor)

cor.map(element =>{
    console.log(element.toLocaleUpperCase())
})
