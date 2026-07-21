let sum = 0;
let num;

while (sum <= 100)
{
    num = prompt("Enter a number:");

    if (isNaN(num))
    {
        alert("Please enter a number");
        continue;
    }

    num = Number(num);

    if (num == 0)
    {
        break;
    }

    sum =sum+ num;
}

console.log(" Sum = " + sum);