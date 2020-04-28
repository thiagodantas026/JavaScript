
var agora = new Date();
var hora = agora.getHours()

console.log(`now are exament ${hora} Hours`)
if (hora < 12){
    console.log('Good Morning')
}else if (hora <= 18){
    console.log(`Good Afternon`)

}else{
    console.log(`Good Night`)
}
