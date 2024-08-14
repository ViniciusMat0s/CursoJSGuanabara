function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 4
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        img.src = "img/manhã.png"
        document.body.style.background = '#e8d29b'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "img/tarde.png"
        document.body.style.background = '#fc7700'
    } else {
        img.src = "img/noite.png"
        document.body.style.background = '#262626'
    }
}