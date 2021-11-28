var menu = "";
var ladate = new Date();
var mois = ladate.getMonth() + 1;
var jour = ladate.getDate();
switch (mois) {
    case 11:
        switch (jour) {
            case 20 || 21 || 22 || 23 || 24 || 25 || 26:
                menu = "menu_22_28_11.png";
                break;
            case 27 || 28 || 29 || 30:
                menu = "menu_29_05_11.png";
                break;
        };
        break;
    case 12:
        switch (jour) {
            case 1 || 2 || 3:
                menu = "menu_29_05_11.png";
                break;
        }
        break;
}

document.write(`<a href="img/cantine/${menu}" target="_blank">
<button>Menu Cantine</button>
</a>`);