var menu = "";
var ladate = new Date();
var mois = ladate.getMonth() + 1;
var jour = ladate.getDate();
if (mois === 10 && jour === 16 || jour === 17 || jour === 18 || jour === 19 || jour === 20 || jour === 21 || jour === 22){
    menu = "menu_18_24.png";
};
document.write(`<a href="cantine/${menu}" target="_blank">
<button>Menu Cantine</button>
</a>`);