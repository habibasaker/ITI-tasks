
document.getElementById("myForm")
.addEventListener("submit", function(event){

  //hena bs2al enta 3awex tsalem ?
    let result = confirm("doyou want to submit the form");

    if(result === false){

        // keda h3mel leh prevent eno ykmel 
        event.preventDefault();

        alert("submition is cancelled");
    }
    else{

        alert("submitted");
    
    }

});


//custom event

// h3melo b el constructor way
const custEvent = new Event("custEvent");

document.addEventListener("custEvent", function(){

    alert("it has been 30 sec and you didn't subbmit any thing");

    console.log("custEvent fired");

});


// hena n5ali y3ed el 30 sec
setTimeout(function(){

    let txt = document.getElementById("txtName");


        document.dispatchEvent(custEvent);


},5000);