function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById(`txtano`)
   var res = document.querySelector(`div#res`)

   if (fano.value.length == 0 || fano.value > ano){
    window.alert(`[ERRO] confira o campo *ano de nascimento`)
   
   }
   else{
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value) 
    var genero = ``
    var img = document.createElement(`img`)//aqui eu crieo uma tego com o nome img no html
    img.setAttribute(`id`, `foto`)// aqui eu coloquei um id com o nome foto no img
    if (fsex [0].checked){
        genero = `Homem`
        if (idade >=0 && idade < 10){
            //crianca
            img.setAttribute(`src`, `bebemasculino.png`)
        }else if (idade < 21){
            //jovem
            img.setAttribute(`src`, `menino.png`)
        }else if (idade < 50){
            //adulto
            img.setAttribute(`src`, `homem.png`)

        }else{
            //idoso
            img.setAttribute(`src`, `idoso.png`)
        }
    } else{
        genero = `mulher`
        if (idade >=0 && idade < 10){
            //crianca
            img.setAttribute(`src`, `bebefeminina.png`)
        }else if (idade < 21){
            //jovem
            img.setAttribute(`src`, `menina.png`)
        }else if (idade < 50){
            //adulto
            img.setAttribute(`src`, `mulher.png`)
        }else{
            //idoso
            img.setAttribute(`src`, `idosa.png`)
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
   }
}

