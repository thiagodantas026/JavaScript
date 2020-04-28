var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem){
    case 0:
    console.log('Sunday')
    break
}

switch(diaSem){
    case 1:
    console.log('Monday')
    break
}

switch(diaSem){
    case 3:
    console.log('Tuesday')
    break
}
switch(diaSem){
    case 4:
    console.log('Wednesday')
    break
}

switch(diaSem){
    case 5:
    console.log('Thursday')
    break
}

switch(diaSem){
    case 6:
    console.log('Friday')
    break
}
switch(diaSem){
    case 7:
    console.log('Saturday')
    break
}