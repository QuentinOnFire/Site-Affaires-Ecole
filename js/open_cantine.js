var menu = "";
var ladate = new Date();
var mois = ladate.getMonth() + 1;
var jour = ladate.getDate();
console.log(`mois = ${mois}\njour = ${jour}`)
if (mois === 11 && jour === 13 || jour === 14 || jour === 15 || jour === 16 || jour && 17 || jour === 18 || jour === 19) {
    menu = "menu_15_21_11.png";
    console.log("PASSE 1");
} else if (mois === 11 && jour === 20 || jour === 21 || jour === 22 || jour === 23 || jour === 24 || jour === 25 || jour === 26) {
    menu = "menu_22_28_11.png";
    console.log("PASSE 2");
} else if (mois === 11 && jour === 27 || jour === 28 || jour === 29 || jour === 30) {
    menu = "menu_29_05_11.png";
    console.log("PASSE 3");
} else if (mois === 12 && jour === 1 || jour === 2 || jour || 3) {
    menu = "menu_29_05_11.png";
    console.log("PASSE 4");
}
document.write(`<a href="cantine/${menu}" target="_blank">
<button>Menu Cantine</button>
</a>`);