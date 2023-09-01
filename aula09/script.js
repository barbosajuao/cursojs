function carregar(){
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
   
       
    
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `<p>Agora são ${hora} horas</p>`
        msg.innerHTML += `<p>Boa dia</p>`
        img.src = '../aula09/imagens/amanhecer.jpg'
        document.getElementById('section').style.background = '#0091ff';

    }else if ( hora >= 12 && hora < 18){
        msg.innerHTML = `<p>Agora são ${hora} horas</p>`
        msg.innerHTML += `<p>Boa tarde</p>`
        img.src = '../aula09/imagens/tarde.jpg'
        document.body.style.background = `#a5431c`
        document.getElementById('section').style.background = '#a9451c';

    }else{
        img.src = '../aula09/imagens/noite.jpg'
        msg.innerHTML = `<p>Agora são ${hora} horas</p>`
        msg.innerHTML += `<p>Boa noite</p>`
        document.body.style.background = `#131a34`
        document.getElementById('section').style.background = '#111a45';
        

    }



}
