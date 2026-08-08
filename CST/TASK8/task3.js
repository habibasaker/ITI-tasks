//geenrate card methode
document.getElementById("btnGenerate").addEventListener("click", function(){

    var cards =document.getElementsByName("card");
    var selectedImage = "";

    //here he will see wich one you selected from radio button 
    for(var i=0;i<cards.length;i++)
    {
        if(cards[i].checked)
        {
            selectedImage = cards[i].value;
            break;
        }
    }

    //hena el message el httketb
    var message =document.getElementById("msg").value;

    //zy el child window in task 5
    var win =window.open("","_blank","width=500,height=600");

    var img = win.document.createElement("img");

    img.src = selectedImage;
    img.style.width = "300px";


// to make parag oin new window
    var p =win.document.createElement("p");

//inner to focus on text bas
    p.innerHTML = message;



    var btn =win.document.createElement("button");

    btn.innerHTML = "Close Preview";

    btn.onclick = function()
    {
        win.close();
    };


//align centre
    win.document.body.style.textAlign =
    "center";

//append y3ani add an img el choosen
    win.document.body.appendChild(img);

    win.document.body.appendChild(win.document.createElement("br"));

    win.document.body.appendChild(p);

    win.document.body.appendChild( win.document.createElement("br")
    );

    win.document.body.appendChild(btn);

});