document.write(
  "Redovisning av Uppgift 1_4 <br> Informatik-Systemutveckling, Malmö universitet, 2022-11-25 <br><br> Elias Frostensson, datorid: an3899 <br> ========================================================== <br><br>"
);

// Kategorier av drycker med drycker i sig. Som const för de ändras inte och ska inte ändras.
const alcoholic = ["Beer", "Wine", "Cider", "Cocktail", "Shots"];
const soft = ["Coke", "Fanta", "Sprite", "Dr.Pepper", "Mountain Dew", "Pepsi"];
const hot = ["Coffee", "Cappuccino", "Espresso", "Hot Chocolate", "Latte"];
const cold = ["Lemonade", "Juice", "Smoothie", "Milkshake", "Ice tea"];
const drinks = [alcoholic, soft, hot, cold];

function printDrinks(choice) {
  // Skriv ut en kategori med drycker.
  let getDrinks = drinks[choice]; // Hitta vilken katergori.
  console.log(choice, " Drinks: ", getDrinks);
  for (i = 0; i < getDrinks.length; i++) {
    // Loopar igenom den valda kategorin av drycker och skriver ut alla.
    document.write(getDrinks[i], "<br>");
  }
}

function printAllDrinks() {
  // Skriver ut alla drycker.
  for (i = 0; i < drinks.length; i++) {
    // Loopar igenom alla kategorier av drycker
    let catDrink = drinks[i];
    for (p = 0; p < catDrink.length; p++) {
      // Loopar igenom alla drycker i en kategori.
      document.write(catDrink[p], "<br>"); // Skriver ut
    }
    document.write("- - - - - - - - - - - - - - - - <br>");
  }
}

function searchForDrink() {
  // Söker efter dryck
  let searchBar = window.prompt("Vad vill du söka på?");
  let keyWord = searchBar.toLowerCase(); // Så man slipper ha stor bokstav i början.
  for (i = 0; i < drinks.length; i++) {
    // loopar igenom alla kategorier.
    let catDrink = drinks[i];
    for (p = 0; p < catDrink.length; p++) {
      // Loopar igenom drycker i en kategori.
      if (keyWord === catDrink[p].toLowerCase()) {
        // Jämnför varje dryck i kategorin med vad användaren har skrivit in.
        alert(`${catDrink[p]} finns i lagret!`);
        return;
      } else {
        console.log("No Match");
      }
    }
  }
  alert("Finns inte i lagret!"); // Sökordet fanns inte.
}

let fraga = window.prompt(`Which products are you looking for? 
0. Alcoholic Drinks
1. Soft Drinks
2. Hot Drinks
3. Cold Drinks
- - - - - - - - -
4. List all drinks
5. Search for a drink`); // Första frågan.
let val = parseInt(fraga); // 32 bit integer.

if (val <= 3) {
  // Om man väljer under eller 3 kör printDrinks().
  console.log("Below or equal to 3");
  printDrinks(val);
} else if (val === 4) {
  // Om man väljer 4 kör printAllDrinks().
  console.log("4 –––––");
  printAllDrinks();
} else if (val === 5) {
  // Om man väljer 5 kör searchForDrink().
  console.log("5 –––––");
  searchForDrink();
} else {
  alert("You did something wrong!");
}
