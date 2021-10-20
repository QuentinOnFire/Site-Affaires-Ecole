
var an = "<p class='an'>Anglais : 1 Cahier 24x32 + le TD (facultatif*)</p>";
var fr = "<p class='fr'>Francais : 1 Classeur + le TD (facultatif*)</p>";
var maths = "<p class='ma'>Mathématiques : 1 Cahier 24x32 + le TD</p>";
var es = "<p class='es'>Espagnol : 1 Cahier 24x32 + Manuel</p>";
var physique = "<p class='pc'>Physique-Chimie : 1 Classeur souple + Manuel</p>";
var techno = "<p class='te'>Technologie : 1 Classeur souple</p>";
var svt = "<p class='svt'>Science et Vie de la Terre : 1 Cahier 24x32 + 1 Répertoire</p>";
var latin_ = "<p class='la'>Latin : 1 Cahier 24x32</p>";
var h_g_emc = "<p class='hge'>Histoire-Géographie-E.M.C : 1 Cahier 24x32</p>";
var eps = "<p class='eps'>Sport : Affaires de sports + gourde</p>";
var v_d_class = "<p class='vdc'>Vie de classe : Les papiers (facultatif*)</p>";
var pasto = "<p class='pa'>Pastorale : Affaires de pastorale</p>";
var musique = "<p class='mu'>Musique : 1 Cahier 24x32</p>";
var art = "<p class='ap'>Arts Plastique : 1 Cahier de travaux pratiques + 1 pochette à rabat</p>";
var devoir_fait = "<p style='color: black;'>Devoir Fait : Pensez a regarder vos devoirs</p>"
var r = "";
 
var ladate = new Date();
var oneJan = new Date(ladate.getFullYear(),0,4);
var numberOfDays = Math.floor((ladate - oneJan) / (24 * 60 * 60 * 1000));
var result_base = Math.ceil((1 + numberOfDays) / 7);
var result = result_base;
var nb_jour = ladate.getDay();
var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
console.warn(`Nous sommes a ${numberOfDays} jours du 4 janvier 2021 (debut semaine 1)\nNous sommes pendant la semaine ${result_base}\nNoud sommes le ${tab_jour[nb_jour]} ${ladate.getDate()} ${tab_mois[ladate.getMonth()]} ${ladate.getFullYear()}`)

function p_i(paire, impaire){
    result= result_base;

    if (nb_jour === 6 || nb_jour === 0){
        result += 1;
    }
        result = result / 2;
        if(String(result).includes(".5")){
            return impaire;
        }
        else{
            console.log("PAIRE");
            return paire;
        }
}

document.getElementById("submit_all").addEventListener("submit", function () {
    var latin_select = document.getElementById("latin_select");
    var latin_value = latin_select.options[latin_select.selectedIndex].value;
    var jour_select = document.getElementById("jour_select");
    var jour_value = jour_select.options[jour_select.selectedIndex].value;
    if (latin_value === "" || jour_value === "") {
        alert('Veuillez remplir tous les champs...');
    } else {
        if (latin_value === "oui") {
            var y_n_latin = true;
        }
        var lundi = h_g_emc + fr + maths + an + musique + es + physique + latin();
        var mardi = v_d_class + es + maths + fr + h_g_emc + an;
        var mercredi = fr + eps;
        var jeudi = techno + an + maths + svt + pasto + p_i(physique, es) + latin() + devoir_fait;
        var vendredi = p_i(techno, fr) + fr + p_i(maths, svt) + art + h_g_emc+ latin();
        var head = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">
        <title>Affaires du Jour</title>
        <div class="center_">
        <h2 class="copy">InYourBag</h2>
        <hr>
        `;
        var footer = `<hr>
        <p>Facultatif : Si le professeur en question le/la demande.</p>
        <a href="">Retour</a>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js" 
            integrity="sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g==" 
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossorigin="anonymous"></script>`;

        function afficher(){
            if (jour_value === "1"){
                document.write(head + lundi + footer);
            };
            if (jour_value === "2"){
                document.write(head + mardi + footer);
            };
            if (jour_value === "3"){
                document.write(head + mercredi + footer);
            };
            if (jour_value === "4"){
                document.write(head + jeudi + footer);
            }
            if (jour_value === "5"){
                document.write(head + vendredi + footer);
            };
        }

        function latin(){
            if (y_n_latin) {
                return latin_;
            }
            else{
                return r
            }
        }

        afficher();
    }
});
