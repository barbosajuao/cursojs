function contar(){
    let ini = document.getElementById(`txti`)
    let fim = document.getElementById(`txtf`)
    let passo = document.getElementById(`txtp`)
    let res = document.getElementById(`res`)

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert(`[ERRO] Todos os Campos com  *  são obrigatorios`)
    }else{
         res.innerHTML =`Contando: `
         let i = Number(ini.value)
         let f = Number(fim.value)
         let p = Number(passo.value)
         if (p <= 0){
            res.innerHTML +=`Nao foi possivel efetuar a conta`
            window.alert`o campo passo apenas pode ter numeros positivos!`
            
         }else{
            if( i < f){
             for(let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1F449}` 
               


             }// lenbrando aque aqui eu estou fazendo a estrutura de repeticao a que provalvelmente e a mais indicada
            } else {
                for(let c = i; c >=f; c-=p)
                res.innerHTML += `${c} \u{1F449}`
                
            }
            res.innerHTML += `\u{1F60E}`

         }
         

         
       
    }
}