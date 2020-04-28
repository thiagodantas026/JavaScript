
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    //var hora = data.getHours()
    var hora = 16;

    msg.innerHTML = `Now are ${hora} time. `

    if(hora >= 0 && hora < 12){
        // good morning
        img.src = 'morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18){
        //good afternoon
        img.src = 'afternoon.png'
        document.body.style.background = '#b9846f'
    }else {
        //good night
        img.src = 'night.png'
        document.body.style.background = '#515154'
    }



}
