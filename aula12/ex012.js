var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 12){
    console.log('Boa dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
}