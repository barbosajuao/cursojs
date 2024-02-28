
var lista = document.getElementById(`flista`).value
var res = document.getElementById(`res`)
var valores = []

function adicionar(){
    var numeroin = document.getElementById(`fnum`).value
    var numero = parseInt(numeroin)
    var numeroin = document.getElementById(`fnum`).value
    if (numeroin === `` || numeroin === null){
        window.alert (`o campo adicione um numero nao pode estar em branco`)

    }else if(numeroin < `1` || numeroin > 100){
        window.alert (`o valor do campo esta incorreto! coloque um valor entre 1 e 100`)
    }else {
        
        
        valores.push(numero)
        console.log(valores)
        atualizarselect()// aqui estou criando uma funcao 
        limparCampo()// aqui estou criando uma funcao

        
    }
    
}
    
function atualizarselect(){
    var select = document.getElementById(`flista`)//selecionando o elemento 
    select.innerHTML = ``// limpando tudo em select
    var optionpadrao = document.createElement(`option`)//cria um elemento option
    /* optionpadrao.text = /* `selecione um valor` */ 
    select.add(optionpadrao)// adiciona o option ao select 

    valores.forEach(function(numero){

       /*  forEach() é um método de array em JavaScript que executa uma função para cada elemento do array.


        function(numero) { ... } é a função que será executada para cada valor no array. O parâmetro numero representa cada elemento do array. */




        var option = document.createElement('option');// criando um novo elemento.
        option.value = numero;
        option.text = `voce adicionou ${numero}`;
        select.add(option);})

}
        
function limparCampo(){ // aqui chamei a funcao 
    var numeroin = document.getElementById(`fnum`); // adicionei o campo que eu queria em numeroin
    numeroin.value = ``; // limpei o campo 
    numeroin.focus(); // trouxe o foco para ele 
}



/* window.alert(`tem numero e o valor e ${numero}`) */
