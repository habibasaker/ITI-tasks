// context menue de el event w htb2 function  w ana syba enha tb2a false fe el capture f keda htb2a fe el bubling
document.addEventListener("contextmenu", function(event){

    // de 3shan tmn3 el defailt 
    event.preventDefault();

    alert("Context Menu Disabled");

    console.log(event);

    // eh el element el fired 
    console.log(event.target);

    // w da byshawer 3ala el listner el lama bnb2a tl3een fee el bubling 
    console.log(event.currentTarget);

});