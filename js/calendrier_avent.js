var ladate = new Date();
var mois = ladate.getMonth() + 1;
var jour = ladate.getDate();
var intro_ = `<p>Calendrier de l'Avent du <script src="js/nom_jour.js"></script> <script src="js/nb_jour.js"></script> <script src="js/mois.js"></script></p>`
//debut le 26 novembre et fin le 24 decembre

function intro() {
    document.write(intro_);
}

function lien(address, nom, citation, prenom) {
    var total_address = `
    <p>` + prenom + " : " + `</p>
    <a target="_blank" style="color: blue;" href="` + address + `">` + nom + `</a>` + 
    `<p>` + citation + `</p>`;
    document.write(total_address);
}

function musique(address, nom, citation, prenom) {
    var musique = `
    <figure>
        <figcaption>` + prenom + " : <br>" + nom + "<br>" + citation + `</figcaption>
        <audio
            controls
            src="js/musique/` + address + `">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
    </figure>`;
    document.write(musique);
}

function video(address, nom, citation, prenom) {
    var video = `
    <figure>
        <figcaption>` + prenom + " : <br>" + nom + "<br>" + citation + `</figcaption>
        <video
            controls
            src="js/video/` + address + `">
            Your browser does not support the
            <code>video</code> element.
        </video>
    </figure>`;
    document.write(video);
}
/*<iframe width="560" height="315" src="https://www.youtube.com/embed/IG6QtW_nOzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/ 

function image(address, nom, citation, prenom) {
    var image = `
    <figure>
        <figcaption>` + prenom + " : <br>" + nom + "<br>" + citation + `</figcaption>
        <img
            controls
            src="js/image/` + address + `">
    </figure>`;
    document.write(image);
}

function integration_video(nom, citation, prenom, integration) {
    var video = `
    <figure>
        <figcaption>` + prenom + " : <br>" + nom + "<br>" + citation + `</figcaption>`
        + integration + 
    `</figure>`;
    document.write(video);
}

switch (mois) {
    case 11:
        switch (jour) {

            case 26:
                intro();
                musique("Summer.mp3", "Summer (Calvin Harris)", "Parce que elle est joyeuse et j'aime bien la musique.", "Marion")
                break;
            case 27:
                intro();
                musique("Knockin !.mp3", "Knockin ! On Heaven's Door", "J'aime beacoup l'histoire que raconter par cette chanson mais aussi la musique que je trouve jolie et émouvante.", "Hugo")
                break;
            case 28:
                intro();
                musique("No cigar.mp3", "No Cigar (Lil Story)", "Quelqu'un me la fait découvrir récemment et je l'aime bien.", "Valentin")
                break;
            case 29:
                intro();
                lien("https://youtu.be/2LJAspSQzX8", "Le Hobbit", "Car c'est mon film préféré, il est légendaire.", "Sacha")
                break;
            case 30:
                intro();
                musique("Blue.mp3", "Blue (Eiffel 65)", "Parce que j'aime le rythme de la musique et les nuances.", "Julien")
                break;
        };
        break;
    case 12:
        switch (jour) {
            case 1:
                intro();
                musique("Nouvlr.mp3", "NouvlR", "J'aime le style musical de cette musique.", "Mahé")
                break;
            case 2:
                intro();
                musique("Believer.mp3", "Believer (Imagine Dragon)", "Car c'est ma musique préféré, mon style de musique. Je l'écoute depuis longtemps.", "Lénaïc")
                break;
            case 3:
                intro();
                musique("Gooba.mp3", "Gooba (SixNine)", "Car je l'aime bien.", "???")
                break;
            case 4:
                intro();
                musique("Pudlabouche.mp3", "Pudlabouche (Kanoë)", "Car c'est ma musique préféré.", "Timéo")
                break;
            case 5:
                intro();
                integration_video("Résumé foireux Attaque des Titans s2 (CrayziBomb World)", "C'est drôle et si on passe une mauvaise journéee sa remonte le moral.", "Amauri", `<iframe width="560" height="315" src="https://www.youtube.com/embed/IG6QtW_nOzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
                break;
            case 6:
                intro();
                musique("Il est ou le sav.mp3", "Il est où le SAV (Suzane)", "Car je trouve que ça a un sérieux rapport avec l'écologie et àa raconte la réalité.", "Alice")
                break;
            case 7:
                intro();
                video("canena.mp4", "Canena Meme", "😀", "Enzo")
                break;
            case 8:
                intro();
                musique("La chanson des cours et des vacances.mp3", "La chanson des cours et des vacances","Car ça me rappelle les vacances, et c'est drôle.", "Laurène")
                break;
            case 9:
                intro();
                break;
            case 10:
                intro();
                break;
            case 11:
                intro();
                break;
            case 12:
                intro();
                break;
            case 13:
                intro();
                break;
            case 14:
                intro();
                break;
            case 15:
                intro();
                break;
            case 16:
                intro();
                break;
            case 17:
                intro();
                break;
            case 18:
                intro();
                break;
            case 19:
                intro();
                break;
            case 20:
                intro();
                break;
            case 21:
                intro();
                break;
            case 22:
                intro();
                break;
            case 23:
                intro();
                break;
            case 24:
                intro();
                lien("https://www.universdelabible.net/lire-la-segond-21-en-ligne/luc/2.1-20/", "Luc 2.1-20", "Parce que c'est ça Noël.", "Calixte")
                break;
            case 25:
                document.write(`<h3>!!! Joyeux NOEL !!!</h3>`)
                break;

        };
        break;
};