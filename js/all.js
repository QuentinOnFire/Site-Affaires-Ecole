
var an = "<p class='an'>Anglais : 1 Cahier 24x32 + le TD (facultatif)</p>";
var fr = "<p class='fr'>Francais : 1 Pochette à rabat + le TD (facultatif)</p>";
var maths = "<p class='ma'>Mathématiques : 1 Cahier 24x32 + le TD</p>";
var es = "<p class='es'>Espagnol : 1 Cahier 24x32 + Manuel</p>";
var al = "<p class='al'>Allemand : 1 Cahier 24x32 + Manuel</p>";
var it = "<p class='it'>Italien : 1 Cahier 24x32 + Manuel + TD</p>";
var physique = "<p class='pc'>Physique-Chimie : 1 Classeur souple + Manuel</p>";
var techno = "<p class='te'>Technologie : 1 Classeur souple</p>";
var svt = "<p class='svt'>Science et Vie de la Terre : 1 Cahier 24x32 + 1 Répertoire</p>";
var latin_ = "<p class='la'>Latin : 1 Cahier 24x32</p>";
var h_g_emc = "<p class='hge'>Histoire-Géographie-E.M.C : 1 Cahier 24x32</p>";
var eps = "<p class='eps'>Sport : Affaires de sports + gourde</p>";
var v_d_class = "<p class='vdc'>Vie de classe : Les papiers (si nécessaire)</p>";
var pasto = "<p class='pa'>Pastorale : Affaires de pastorale</p>";
var musique = "<p class='mu'>Musique : 1 Cahier 24x32</p>";
var art = "<p class='ap'>Arts Plastique : 1 Cahier de travaux pratiques + 1 pochette à rabat</p>";
var r = "";

function p_i(paire, impaire){
    currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
    var paire_impaire = result
    var ladate = new Date();
    if (ladate.getDay() === 6 || ladate.getDay() === 0){
        paire_impaire += 1;
    }
        paire_impaire = paire_impaire / 2;
        if(String(paire_impaire).includes(".5")){
            return impaire;
        }
        else{
            return paire;
        }
}

document.getElementById("submit_all").addEventListener("submit", function () {
    var lv_select = document.getElementById("lv2_select");
    var lv_value = lv_select.options[lv_select.selectedIndex].value;
    var lv_texte = lv_select.options[lv_select.selectedIndex].text;
    var latin_select = document.getElementById("latin_select");
    var latin_value = latin_select.options[latin_select.selectedIndex].value;
    var latin_text = latin_select.options[latin_select.selectedIndex].text;
    var jour_select = document.getElementById("jour_select");
    var jour_value = jour_select.options[jour_select.selectedIndex].value;
    var jour_text = jour_select.options[jour_select.selectedIndex].text;
    if (lv_value === "" || latin_value === "" || jour_value === "") {
        alert('Veuillez remplir tous les champs...')
    } else {
        if (lv_value === "es"){
            var lv = es;
        }
        if (lv_value === "al") {
            var lv = al;
        }
        if (lv_value === "it") {
            var lv = it;
        }
        if (latin_value === "oui") {
            var y_n_latin = true;
        }
        var lundi = maths + eps + p_i(physique, lv) + fr + h_g_emc + latin();
        var mardi = p_i(techno, svt) + musique + fr + an + lv + maths + v_d_class;
        var mercredi = p_i(r, maths) + h_g_emc + svt + an;
        var jeudi = physique + techno + lv + fr + pasto + p_i(fr, r) + latin();
        var vendredi = an + art + h_g_emc + fr + maths + latin();
        var head = `
        <link rel="stylesheet" href="css/style.css">
        <title>Affaires du Jour</title>
        `;
        var copy = `
        <h2 class="copy">InYourBag</h2>
        <hr>
        `;

        function afficher(){
            if (jour_value === "1"){
                document.write(head + `<div class="center_">` + copy + lundi + `<hr><a href="">Retour</a></div>`);
            };
            if (jour_value === "2"){
                document.write(head + `<div class="center_">` + copy + mardi + `<hr><a href="">Retour</a></div>`);
            };
            if (jour_value === "3"){
                document.write(head + `<div class="center_">` + copy + mercredi + `<hr><a href="">Retour</a></div>`);
            };
            if (jour_value === "4"){
                document.write(head + `<div class="center_">` + copy + jeudi + `<hr><a href="">Retour</a></div>`);
            }
            if (jour_value === "5"){
                document.write(head + `<div class="center_">` + copy + vendredi + `<hr><a href="">Retour</a></div>`);
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
