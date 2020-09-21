var nombreLigne = 0; // variable qui permet de compter le nombre de ligne
var nombreLigneMax = 10; // Nombre de ligne max de la commande

 

// Fonction qui permet de créer la classe Livre qui permettra d'instancier des objets Livre
function Livre(ref,titre,prixuni)
{
    this.ref = ref;
    this.titre = titre;
    this.prixuni = prixuni;
}

 

// initialisation du tableau de Livres disponibles
var listeLivre = new Array();
listeLivre[0] = new Livre('lol01','Le grand livre de JavaScript',15);
listeLivre[1] = new Livre('lol02','HTML encore plus vite',20);
listeLivre[2] = new Livre('lol03','Windows NT 4.0',25);
listeLivre[3] = new Livre('lol04','Le kit de Ressource technique de NT',30);
listeLivre[4] = new Livre('lol05','Formation Java',35);
listeLivre[5] = new Livre('lol06','Comment créer son site web',40);

 

// procedure de création d'une nouvelle ligne
function nouvelleLigne(){

 

    if(nombreLigne<nombreLigneMax) {    
        var option = '';
        //On crée un element de type <div>
        var div =  document.createElement("div");
        // on lui attribue un id de type "ligne0"
        div.id = "ligne" + nombreLigne;
        // initialisation des balises <option>
        for(i=0;i<listeLivre.length;i++)
        {
            option = option + '<option value="' + i + '">'+ listeLivre[i].titre +'</option> ';            
        }

 

        //initialisation de la div créée plus tôt    
        div.innerHTML = '<select onchange="affichageInfo(this.id)"; name="choix" id="choix' + nombreLigne + '"> <option value="-1">Choisissez votre livre</option> ' + 
            option +
            '</select> '+ 
            '<input type="text" size="3"  id="ref' + nombreLigne + '" readonly="readonly" /> '+
            '<input type="number" min="0" size="3"  id="qte0' + nombreLigne + '"/> '+
            '<input type="text" size="10" id="prixuni' + nombreLigne + '" readonly="readonly"/> '+
            '<input type="text" size="10" id="prix' + nombreLigne + '" readonly="readonly"/> ' +
            '<input type="button" value="-" id="btn'+nombreLigne+'" class="btn" onclick="suppLigne(this);">';
        // on définit l'élément parent de div
        document.getElementById('tab0').appendChild(div);
        // on insert div juste avant le total
        document.getElementById('tab0').insertBefore(div, document.getElementById('total')) ;

 

        // on masque le total
        if(nombreLigne === nombreLigneMax-1) document.getElementById('btnTot').style.visibility="hidden";     
    }
    // incrémentation du nombre de lignes
    nombreLigne++;
}

function affichageInfo(optionChoisie) {
    var idL = optionChoisie.substr(5, optionChoisie.length);
    var indice = parseInt(document.getElementById(optionChoisie).value);
    if(indice >= 0){
        document.getElementById('ref'+idL).value = listeLivre[indice].ref;
        document.getElementById('prixuni'+idL).value = listeLivre[indice].prixuni;
    }
    else
    {
        document.getElementById('ref'+idL).value = '';
        document.getElementById('prixuni'+idL).value = '';
    }
}

window.onload = function () {
    "use strict";
    nouvelleLigne();
}

 function calculPrix(valQuantite, ValTdl) {
    var regExp = /^[0-9]+/;
    if(valQuantite.match(regExp))
    {
        var prix = (parseInt(valQuantite) * parseInt(document.getElementById('prixuni'+valTdligne).value));
        if (valQuantite ==='' || isNaN(prix)){
              prix = 0;
        }
    }
}

function suppLigne(boutonClick){
    var valeurId = boutonClick.id.substr(3,boutonClick,id.length);
    // on vérifie que le prix n'est pas nul
    if(!(document.getElementById('prix' + valeurId).value === '')){
        // on soustrait le prix du total
        document.getElementById('inpTot').value = parseInt(document.getElementById('inpTot').value) -
        parseInt(document.getElementById('prix' + valeurId).value);
    }
    // on supprime la div
    document.getElementById('tab0').removeChild(document.getElementById('ligne'+valeurId));
    // on incrémente cptLigneMax pour pouvoir recréer des lignes de commandes
    nombreLigneMax += 1;
    // on affiche le bouton '+'
    document.getElementById('btnTot').style.visibility="visible";

    if(nombreLigneMax-nombreLigne === 10)
    {
        document.getElementById('tot').style.visibility="hidden";
        document.getElementById('inpTot').style.visibility="hidden";
    }
}


window.onload = function () {
    "use strict";
    nouvelleLigne();
}


document.getElementById('prix'+valTdligne).value * prix;
if (document.getElementById('inpTot').value===''){
    document.getElementById('inpTot').value= 0;
}