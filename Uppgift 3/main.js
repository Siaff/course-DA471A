document.write(
    "Redovisning av Uppgift 1_3 <br> Informatik-Systemutveckling, Malmö universitet, 2022-11-25 <br><br> Elias Frostensson, datorid: an3899 <br> ========================================================== <br><br>"
);
function countDays(x, y) {
    let daysAway = 0;
    let chillDays = 0;
    let resDay = 0;
    let xPositive = Math.abs(x); // Gör om allt till positivt.
    let yPositive = Math.abs(y);
    console.log("X: ", xPositive);
    console.log("Y: ", yPositive);
    daysAway = xPositive + yPositive; // Lägger ihop de både talen.
    console.log("Days: ", daysAway);
    chillDays = daysAway / 5; // Delar summan på 5 för att få reda på hur många vilodagar.
    if (chillDays == Math.floor(chillDays)) {
        chillDays = chillDays - 1;
    }
    console.log("Chill days: ", chillDays);
    resDay = Math.floor(chillDays) + daysAway; // Adderar vilodagar med "Travel days".
    console.log("Days to travel: ", resDay);
    document.write(
        `Utskrift 1: Det tog Blackbeard ${resDay} antal dagar att ta sig till skatten.<br>`
    ); // Skriver ut resultatet.
    return resDay; // Returna resDay till whoFoundTreasure.
}

function whoFoundTreasure(travelDays) {
    console.log("Traveled days: ", travelDays);
    if (travelDays > 30) {
        // Om traveldays är större än 30 Jack Sparrow vann.
        document.write(
            `Utskrift 2: Det tog Blackbeard ${travelDays} antal dagar att ta sig till skatten, men Jack Sparrow hann före...`
        );
    } else {
        // Annars vann Blackbeard
        document.write(
            `Utskrift 2: Det tog Blackbeard ${travelDays} antal dagar att ta sig till skatten. Blackbeard var snabbare än Sparrow!`
        );
    }
}

let fraga1 = window.prompt("Välj X"); // Frågar om X & Y
let fraga2 = window.prompt("Välj Y");
let num1 = parseInt(fraga1); // 32 bit integer
let num2 = parseInt(fraga2);

whoFoundTreasure(countDays(num1, num2)); // Kör whoFoundTreasure med countDays.
