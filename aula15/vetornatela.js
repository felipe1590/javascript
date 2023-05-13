let num = [8,1,7,4,2,9]

// for (let pos = 0; pos < num.length; pos++) {
//     const element = num[pos];
//     console.log(`A posição pos tem valor ${element}`)
// }

for(let pos in num){
    console.log(`Aposição tem o valor de ${num[pos]}`)
}