var menu = "";
var ladate = new Date();
var mois = ladate.getMonth() + 1;
var jour = ladate.getDate();
switch (mois) {
    case 11:
        switch (jour) {
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
                menu = "menu_22_28_11.png";
                break;
            case 27:
            case 28:
            case 29:
            case 30:
                menu = "menu_29_05_11.png";
                break;
        };
        break;
    case 12:
        switch (jour) {
            case 1:
            case 2:
            case 3:
                menu = "menu_29_05_11.png";
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                menu = "menu_06_12_12.png";
                break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
                menu = "menu_13_18_12.png";
                break;
        }
        break;
}
document.write(`<a href="img/cantine/${menu}" target="_blank">
<button>Menu Cantine</button>
</a>`);
