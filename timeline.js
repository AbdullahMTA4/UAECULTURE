function changeColor(){
    document.getElementById("inner-inner").style.backgroundColor = 'black'
    console.log('jinga')
}

function movePointer(x){

        document.getElementById('pointer').style.marginLeft = `${x*300-20}px`
    
}

dark = true


    function toggleTheme(){

        console.log("jinga")

        if(dark){
        document.getElementById('body').style.backgroundColor = 'lavender'
        document.getElementById('title').style.color = 'black'
        document.getElementById('circle').style.float = 'right'
        document.getElementById('toggle').style.borderColor = 'black'
        document.getElementById('circle').style.backgroundColor = 'black'
        dark = false
        }
        else{
        document.getElementById('second').style.backgroundColor = 'black'
        document.getElementById('years').style.color = 'white'
        document.getElementById('circle').style.float = 'left'
        document.getElementById('toggle').style.borderColor = 'black'
        document.getElementById('toggle').style.borderColor = 'white'
        document.getElementById('circle').style.backgroundColor = 'white'
        dark = true
        }
    }