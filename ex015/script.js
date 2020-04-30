function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.getElementById('imagem')
  

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert.length('[ERROR]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''        

            if (fsex[0].checkend){
            genero = 'Homem'
            if ( idade >= 0 && idade < 10 ){
                    //Children
                    img.src = 'photo-boy.jpg'
            }else if (idade < 21){
                //Boy
                img.src = 'photo-man.jpg'
            }else if(idade < 50){
                //Man
            }else {
                //Old Man
            }
        }else if (fsex[1].checkend){
            genero = 'Woman'
            if ( idade >= 0 && idade < 9 ){
                //Children
        }else if (idade < 21){
            //girl
        }else if(idade < 50){
            //Woman
        }else {
            //Old Woman
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detect ${genero} with ${idade} years`
        res.appendChild(img)
    }
}