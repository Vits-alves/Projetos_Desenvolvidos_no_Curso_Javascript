function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data= new Date()
    var hora = 20 //data.getHours()
    

    if (hora >= 0 && hora <12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'

    }else if (hora >= 12 && hora <18) {
        msg.innerHTML = `Boa Tarde! Agora são ${hora} horas.`
        img.src = 'fototarde.jpg'
        document.body.style.background = '#fc9536'
        
    }else {
        msg.innerHTML = `Boa Noite! Agora são ${hora} horas.`
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#012545'
    }
}
