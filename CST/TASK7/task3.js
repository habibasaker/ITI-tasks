let txt = document.getElementById("txt");
//keydown m3na en enta dost 3ala 7aga 3ala el key board 
txt.addEventListener("keydown", function(event){

    console.log("keydown event");

    console.log("key =", event.key);//eh el key

});

//key press mesh bysht8al 3la el shift w el ctrl w el alt bas el letter w el num tmam
txt.addEventListener("keypress", function(event){

    console.log("keypress event");

    console.log("key =", event.key);

});



txt.addEventListener("keydown", function(event){

//low shift hy2ol anhi wa7da left wala right bybtb3 el physical key nafso
    console.log("code =", event.code);

    console.log("key value is =", event.key);

});

//bouns
//hena ana bmn3 el cntrl s

txt.addEventListener("keydown", function(event){

// event.ctrlKey  de method b7aded behakey mn el keeys w m3naha if i press cntl
    if(event.ctrlKey && event.key == "s" ){

        event.preventDefault();

        alert("Ctrl + S disabled");

    }

});