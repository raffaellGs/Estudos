const frutas = ["Maçã", "Laranja", "Caju", "Perâ"]

function emprimir(element, index){
    console.log(`${index + 1}. ${element} `)
}

frutas.forEach(emprimir)



frutas.forEach((el) => console.log(el))