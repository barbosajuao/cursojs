function parimpar(n){
    if (n%2 == 0){ // conta bassica se o valor de n divide por 2 é igual a 0,,,, um teste logico
        return `par`
    }else{
        return `impar`// paramentros que vaoi ser retornado
    }
}
let res = parimpar(5) // aqui estou chamndo a acao
console.log (res)// aqui estou mostrando no console