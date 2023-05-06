function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verfique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '250px')
        img.setAttribute('height', '250px')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/homem-bebe.png')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src' , 'imagens/homem-jovem.png')
            } else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src' , 'imagens/homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src' , 'imagens/homem-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src' , 'imagens/mulher-bebe.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}