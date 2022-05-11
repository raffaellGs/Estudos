const notas = [7.7, 6.5, 5.3, 8.9, 3.6, 3.6, 7.1, 9.0]

let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(`Notas menor que 7: ${notasBaixas}!!`)


// Com CallBack

notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)