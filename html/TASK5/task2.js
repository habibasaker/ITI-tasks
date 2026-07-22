let addrObj = {
    street: prompt("entre street name "),
    bulidingNO: parseInt(prompt("entre building number")),
    city: prompt("entre city")


};

function showaddr(addrObj){
    let today=new Date(); 
    let date = today.getDate() + "/" +
    (today.getMonth() + 1) + "/" +
    today.getFullYear();

    return addrObj.bulidingNO + " " +
           addrObj.street + ", " +
           addrObj.city +
           date;
}

console.log(showaddr(addrObj));