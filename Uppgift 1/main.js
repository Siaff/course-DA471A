document.write(
  "Redovisning av Uppgift 1_1 <br> Informatik-Systemutveckling, Malmö universitet, 2022-11-25 <br><br> Elias Frostensson, datorid: an3899 <br> ========================================================== <br><br>"
);

function calc(tal1, op, op2, tal2) {
  // Calc Operation
  let svar = []; // Svar Array
  console.log(tal1);
  console.log(tal2);
  console.log("parse:", parseInt(tal1 + op2 + tal2));
  document.write(
    `Vald operator: ${tal1} ${op2} ${tal2} = ${eval(
      tal1 + op2 + tal2
    )} <br><br>`
  );
  for (i = 0; i < op.length; i++) {
    // for loop igenom alla operations.
    svar.push(eval(tal1 + op[i] + tal2)); // Uträkning och push in i arrayn.
    if (svar[i] == Infinity) {
      // Kollar om man har delat något på 0.
      document.write(`${tal1} ${op[i]} ${tal2} = Omöjligt<br>`);
      return;
    } else {
      // Skriver ut resultaten
      console.log("parse:", parseInt(tal1 + op[i] + tal2));
      document.write(`${tal1} ${op[i]} ${tal2} = ${svar[i]} <br>`);
      console.log("svar:", svar);
    }
  }
  miniResult(svar); // Kör miniResultat funktionen med svar arrayn.
  return;
}

function miniResult(answerArr) {
  let miniRes = Infinity; // Går inte eftersom vi redan har eliminerat detta svaret i funktionen ovan.
  for (i = 0; i < answerArr.length; i++) {
    // Loopar genom hela svar.length
    if (miniRes == Infinity) {
      // Kollar om ett nummer har lagts in än annars lägg första nummret i array:n in.
      miniRes = answerArr[i];
    } else if (miniRes > answerArr[i]) {
      // Om miniRes är större än det svaret man är på byt ut siffran.
      miniRes = answerArr[i];
    }
  }
  document.write("- - - - - - - - - - - - - - - - <br>");
  document.write("Minsta värdet är: ", miniRes); // Skriver ut minsta värdet.
  return;
}

let op = ["+", "-", "*", "/"]; // Operationsen
let fraga1 = window.prompt("Välj Tal 1"); // Får tal 1
let fraga2 = window.prompt("Välj Tal 2"); // Får tal 2
let op2 = window.prompt("Operator"); // Välj Operator.
let num1 = parseInt(fraga1); // paresInt gör om till 32bit (Vet inte varför det behövs men efter en lång felsökning blev detta lösningen)
let num2 = parseInt(fraga2);
calc(num1, op, op2, num2); // Räknar ut och skriver ut.
