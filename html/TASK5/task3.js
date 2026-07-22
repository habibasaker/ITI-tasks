let wind;

function openWindow(){
    wind = window.open("child.html", "_blank", "width=350,height=350");
}

function focusWindow(){
    if(wind){
        wind.focus()
    }
}



function blurWindow(){
    if(wind){
        wind.blur()
    }

}
