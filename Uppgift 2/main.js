document.write(
    "Redovisning av Uppgift 1_2 <br> Informatik-Systemutveckling, Malmö universitet, 2022-11-25 <br><br> Elias Frostensson, datorid: an3899 <br> ========================================================== <br><br>"
);

function getCount(tal1, tal2, rand, op) {
    console.log(tal1, tal2);
    let numArr = [];
    for (i = tal1; i <= tal2; i++) {
        numArr.push(Number(i)); //
        console.log("numArr: ", i);
    }
    console.log(numArr);
    calc(numArr, numRand, op);
    return;
}

function calc(numArr, numRand, op) {
    let svar = [];
    let resultat = 0;
    // let numRand = Math.floor(Math.random() * rand) + 1; // Gör ett slumpat nummer med tak som rand där user:n väljer.
    document.write(`Tabell ${op} ${numRand} <br>`);
    console.log("numArr in calc: ", numArr);
    console.log("Operation in calc: ", op);
    console.log("Rand nmr: ", numRand);
    for (i = 0; i < numArr.length; i++) {
        // Alla resulaten
        svar.push(eval(numArr[i] + op + numRand)); // Räknar ut svaret och pushar in svaret i arrayn svar.
        if (svar[i] == Infinity) {
            // Kollar så man inte delar något med 0.
            document.write(`${numArr[i]} ${op} ${numRand} = Omöjligt<br>`);
        } else {
            //
            console.log("Parse:", parseInt(numArr[i] + op + numRand));
            document.write(
                `${numArr[i]} ${op} ${numRand} = ${
                    Math.round(svar[i] * 100) / 100
                } <br>`
            ); // Avrundar svaret till två decimaler.
        }
    }
    for (i = 0; i < svar.length; i++) {
        resultat = eval(svar[i] + resultat); // Adderar allt ihop.
    }
    resultat = eval(resultat / svar.length); // Delar alla nummer tillsammans med svar.length för att få medeln.
    document.write(
        "<br> ========================================================== <br> Medel: ",
        Math.round(resultat * 100) / 100
    );
}
let numRand;
let fraga1 = window.prompt("Välj Start Tal."); // Start Tal.
let fraga2 = window.prompt("Välj Slut Tal."); // Slut tal.
let fraga3 = window.prompt("Välj tal eller slump."); // Random nmr tak.
let op = window.prompt("Operator"); // Välj Operator.
let num1 = parseInt(fraga1);
let num2 = parseInt(fraga2);

if (fraga3.toLowerCase() === "slump") {
    numRand = Math.floor(Math.random() * 10) + 1;
} else {
    numRand = parseInt(fraga3);
}
getCount(num1, num2, numRand, op); // Funktionen
