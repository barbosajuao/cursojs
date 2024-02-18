function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nas = document.getElementById(`txtano`).value;// aqui estou pegando atraves do dom um dado de um imput
    var sexo = document.querySelector('input[name="radsex"]:checked').value// so consegui pegar os valores faznedo assim 
    var res = document.getElementById(`res`)
    var genero = ``
    
     if (nas == `` || nas == null ){
    window.alert(`o campo nascimento esta esta vazio!`)
    }else{
        if(sexo == `homem`){
            genero = `masculino`
        }else if (sexo == `mulher`){
            genero =`Feminino` 
        } 
        var idade = Math.abs( nas - ano)
        res.innerHTML = `foi detectado o genero ${genero} com a idade de ${idade}`
    }
    
   
}


