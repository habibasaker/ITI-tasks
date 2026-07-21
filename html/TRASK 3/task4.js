
var x = parseInt(prompt("Enter x"));
var y = parseInt(prompt("Enter y"));
var z = parseInt(prompt("Enter z"));

if (x % y == 0 && x % z == 0)
{
    document.write(x + "  divisible by both " + y + " and " + z);
}
else if (x % y == 0)
{
    document.write(x + " is divisible by " + y + " only");
}
else if (x % z == 0)
{
    document.write(x + " is divisible by " + z + " only");
}
else
{
    document.write(x + " isn't divisible by " + y + " or " + z);
}

