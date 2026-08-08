var fruit = [ "apple","strawberry","banana","orange","mango"];
//test a  nt2aked en kolo string 
let res1=fruit.every(function(fruit){
    return typeof fruit==="string";//veery loop htlef 3ala kol wa7ed tshof howa string walal laa
});

console.log(res1);

//test b howa bybd1 b A ?
//marteen low 3owza y2ol ah aw laa w mara eh el kelma nafsha 

let res2=fruit.some(function(fruit){
   return fruit.startsWith("a")
});
console.log(res2);




//TEST C 
let res3 = fruit.filter(function(fruit)
{
    return fruit.startsWith("b")|| fruit.startsWith("s");
});

console.log(res3);


//el map 
let res4 = fruit.map(function(fruit)
{
    return `I like ${fruit}`;
});

console.log(res4);

//display all
res4.forEach(function(item)
{
    console.log(item);
});