// madam fe 2 implementation ana ma7taga el generator 

function *fibonacci(value,type){
    let a=0;
    let b=1;
    //3ada el 2arqam el ttb3 
    //ex count 5---> 0  1  1  2  3 
    if (type==="count"){

        for(let i = 0; i < value; i++)
        {
            yield a;//banady awel func

            let next = a + b;
            a = b;
            b = next;
        }

    }
    else if(type==="max"){
        while(a<=value)
        {
            yield a;
            let next=a+b;
            a=b;
            b=next;

        }
    }

}



//test  A
let gen1 = fibonacci(7, "count");

for(let x of gen1)
{
    console.log(x);
}//0 1 1 2 3 5 8   tab3 7 3naser

//test B
let gen2 = fibonacci(20, "max");

for(let x of gen2)
{
    console.log(x);
}//0 1 1 2 3 5 8 13  DOOL BAS 3SHAN B3ED KEDA 8+13> MN EL VALUE EL HEYA 20


// ana 3andy so2a eh al raqam el gamb el numberes ????
