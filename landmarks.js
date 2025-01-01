var count1 = 0
var count2 = 0
var count3 = 0
var count4 = 0
var count5 = 0

function slideLandmark(x){
    
    var vid = 'vid'+x
    var pic = 'pic'+x
    if(x==1)
        var count = count1
    else if(x==2)
        var count = count2
    else if(x==3)
        var count = count3
    else if(x==4)
        var count =count4
    else
        var count=count5
    
    document.getElementById(vid).style.marginLeft = 500 - count + 'px'
        document.getElementById(pic).style.marginLeft = 600 + count + 'px'
        if(count<400){
            count+=15
            if(x==1)
                count1+=count
            else if(x==2)
                count2+=count
            else if(x==3)
                count3+=count
            else if(x==4)
                count4+=count
            else
                count5+=count

            console.log(count)
        }


        dark = true

        marginCount = 400
    
        function toggleTheme(){
    
            if(dark){
            document.getElementById('body').style.backgroundColor = 'lavender'
            document.getElementById('title').style.color = 'black'
            document.getElementById('circle').style.float = 'right'
            document.getElementById('toggle').style.borderColor = 'black'
            document.getElementById('circle').style.backgroundColor = 'black'
            dark = false
            }
            else{
                document.getElementById('body').style.backgroundColor = 'black'
            document.getElementById('title').style.color = 'white'
            document.getElementById('circle').style.float = 'left'
            document.getElementById('toggle').style.borderColor = 'black'
            document.getElementById('toggle').style.borderColor = 'white'
            document.getElementById('circle').style.backgroundColor = 'white'
            dark = true
            }
        }
    


}

// function resetCounter(){
//     document.getElementById('vid1').style.marginLeft = '500px'
//     document.getElementById('pic1').style.marginLeft = '600px'
//     countLeft = 500
//     countRight = 600    
// }

