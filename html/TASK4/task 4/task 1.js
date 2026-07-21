var mes = prompt("entr any thing:");
var letter = prompt("entree any character:");
var choice = prompt("case sensitive? anwser (yes/no)");

var count = 0;

for (var i = 0; i < mes.length; i++) {

    if (choice.toLowerCase() === "yes") {

        if (mes[i] === letter) {
            count++;
        }

    } else {

        if (mes[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }

    }
}

document.write("appeared = " + count);