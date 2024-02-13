






function carregar(){
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = 18
    data.getHours()
       
    
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `<p>Agora são ${hora} horas</p>`
        msg.innerHTML += `<p>Boa dia</p>`
        img.src = '../aula09/imagens/amanhecer.jpg'
        document.getElementById('section').style.background = '#0091ff';

    }else if ( hora >= 12 && hora < 18){
        msg.innerHTML = `<p>Agora são ${hora} horas</p>`
        msg.innerHTML += `<p>Boa tarde</p>`
        img.src = '../aula09/imagens/tarde.jpg'
        document.getElementById('section').style.background = '#b5451c';
        document.getElementById('fundo').style.background = '#a9451c';

    }else{
        img.src = '../aula09/imagens/noite.jpg'
        msg.innerHTML = `<p>Agora são ${hora} horas</p>`
        msg.innerHTML += `<p>Boa noite</p>`
        document.getElementById('fundo').style.background = '#111a45';
        document.getElementById('section').style.boxShadow = `5px 5px 40px rgba(100, 100, 100)`;
        document.getElementById('section').style.background = '#111a45';
        document.getElementById('footer').style.color = '#a99a';

        

    }



}
