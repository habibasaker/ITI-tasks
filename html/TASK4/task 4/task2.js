var text=prompt("please entre your text");
document.write(largestword(text));
function largestword(str){

    var words = str.split(" ");//keda b2ol eny h3melo array of string w ht2sem 3n tary2 el spaces 
    var largest = words[0];//intialize

    for(var i = 1; i < words.length; i++)
    {
        if(words[i].length > largest.length)
        {
            largest = words[i];
        }
    }

    return largest;
}

// graby b dee:t  his is a javascript string demo

