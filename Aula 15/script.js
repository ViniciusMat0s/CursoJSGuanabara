var num = [5, 8, 2, 9, 3]
num.push(7) //Adicionar por último
num.sort() //Ordem crescente

// console.log(`Nosso vetor é o ${num}`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 5 está na posição ${pos}`)
}