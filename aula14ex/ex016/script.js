function contar() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let pas = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (txti.value == 0 || txtf.value == 0 || txtp.value == 0){
        alert('[ERRO] Revise os campos e tente novamente!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        let c = p

        if (p <= 0) {
            alert('Passo inválido, assumindo o valor de 1')
            p = 1
        } else {
            if (i < f) {
                while (c <= f) {
                    res.innerHTML += `${c} \u{1F449}`
                    c += p                 
                }
            } else {
                while (c >= f) {
                    res.innerHTML += `${c} \u{1F449}`
                    c -= p
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}

// function contar() {
//     let ini = document.getElementById('txti')
//     let fim = document.getElementById('txtf')
//     let pas = document.getElementById('txtp')
//     let res = document.getElementById('res')

//     if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
//         res.innerHTML = 'Impossível conta!'
//         // window.alert('[ERRO] Faltam Passos')
//     } else {
//         res.innerHTML = `<p>Contando: </p>`
//         let i = Number(ini.value)
//         let f = Number(fim.value)
//         let p = Number(pas.value)
//         if (p <= 0) {
//             window.alert('Passo inválido! Considerando PASSO 1')
//             p = 1
//         }
//         if (i < f) {
//             //Contagem crescente
//             for(let c = i; c <= f; c += p) {
//                 res.innerHTML += ` ${c} \u{1F449}`
//             }
//         } else {
//             //Contagem regressiva
//             for(let c = i; c >= f; c -= p) {
//                 res.innerHTML += ` ${c} \u{1F449}`
//             }
//         }
//         res.innerHTML += `\u{1F3C1}`
//     }
// }  