function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Please, type a number')
       
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n* c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    

}
function tabuada2(){
    let num2 = document.getElementById('txtn2')
    let tab2 = document.getElementById('seltab2')
    if(num2.value.length == 0){
        window.alert('Please, type a number')
    }else{
        let n = Number(num2.value)
        let c = 1
        tab2.innerHTML = ``
        while(c <= 10){
            let item2 = document.createElement('option')
            item2.text = `${n} / ${c} = ${n / c}`
            item2.value = `tab2${c}`
            tab2.appendChild(item2)

        }
    }
}


