let wind;

function openWindow() {
    wind = window.open(
        "child.html",
        "_blank",
        "width=350,height=350,scrollbars=yes"
    );

    let scrollInterval = setInterval(() => {

        if (wind.closed) {
            clearInterval(scrollInterval);// interval of time
            return;
        }

        wind.scrollBy(0, 10); // hynzel 10 px

        if (
            wind.innerHeight + wind.scrollY >=
            wind.document.body.scrollHeight
        ) {
            wind.scrollTo(0, 0); // hyrg3 tani
        }

    }, 100);
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
