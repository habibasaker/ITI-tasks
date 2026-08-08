let noofelements=parseInt(prompt("entra  number of elements "))
let arr=[];
for(let i=0;i<noofelements;i++){
    let value=parseInt(prompt("entra a number"))
    arr.push(value);//h7oto fe el 2a5er
}

console.log("sort in ascending")
//hnst3mel 7aga esmha el compare sort 3shan yqaran w yros b el raqm mesh el uni code
let asc=[...arr];
asc.sort(function(a, b){
    return a-b;// low -ve result a 2abel el b w el 3akes

});
console.log("sort in ascending: ",asc)


console.log("sort in descending")
let desc = [...arr];
desc.sort(function(a, b)
{
    return b - a;
});
console.log("sort in descendin:  ",desc)

//fe fekra tania m3melsh copy w a3mel reverse l el asc 

