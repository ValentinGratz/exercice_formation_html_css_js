function validateForm(){
	            
                 var Nom = document.forms["myForm"]["nom"]; 			 
                 if (Nom.value == ""){ 
                 document.getElementById('erreurnom').innerHTML=
				 "Veuillez entrez un nom valide";  
                 Nom.focus;
                 return false;
			 }
				 else{
                 document.getElementById('erreurnom').innerHTML="";
				 }
				 
				 var Prenom=document.forms["myForm"]["prenom"];
				 if (Prenom.value == ""){ 
                 document.getElementById('erreurprenom').innerHTML=
				 "Veuillez entrez un prénom valide";  
                 Prenom.focus;
                 return false;
			 }
				 else{
                 document.getElementById('erreurprenom').innerHTML="";
				 }
				 
				 var Adresse=document.forms["myForm"]["adresse"];
				 if (Adresse.value == ""){ 
                 document.getElementById('erreuradresse').innerHTML=
				 "Veuillez entrez une adresse valide";  
                 Adresse.focus;
                 return false;
			 }
				 else{
 
                 document.getElementById('erreuradresse').innerHTML="";
				 }
				 
				 var Code = document.forms["myForm"]["code"].value.replace(/(^\s*)|(\s*$)/g,'')
				 if (Code.length != 5){
                 document.getElementById('erreurcode').innerHTML=
				 "Veuillez entrez un code postale à 5 chiffre"; 
                 Code.focus;				 
                 return false;
				 }
				 else{
 
                 document.getElementById('erreurcode').innerHTML="";
		         }
				 var Membre = document.forms["myForm"]["membre"].value.replace(/(^\s*)|(\s*$)/g,'')
				 if (Membre.length != 8){
                 document.getElementById('erreurmembre').innerHTML=
				 "Veuillez entrez un numéro à 8 chiffre"; 
                 Membre.focus;				 
                 return false;
				 }
				 else{
 
                 document.getElementById('erreurmembre').innerHTML="";
		         }
				 var Tel = document.forms["myForm"]["tel"].value.replace(/(^\s*)|(\s*$)/g,'')
				 if (Tel.length != 10){
                 document.getElementById('erreurtel').innerHTML=
				 "Veuillez entrez un numéro à 10 chiffre"; 
                 Tel.focus;				 
                 return false;
				 }
				 else{
 
                 document.getElementById('erreurtel').innerHTML="";
		         }
				 
		         
		 }
		

function verifMail(a){
// On ouvre la fonction en lui envoyant la contenu du champ
testm = false ;
/*
la on spécifie que l'adresse est false (fausse) dès le début. Cela permet de pouvoir dire que si rien n'est entré dans le champ l'adresse est fausse.
*/

 for (var j=1 ; j<(a.length) ; j++) {

/*
Ici, ouverture d'une boucle for à 1 qui permettra de tester du premier jusqu'au dernier caractère de l'adresse e-mail entrée.
*/

  if (a.charAt(j)=='@') {
// La on commence les conditions de tests. Ici on cherche l'@
   if (j<(a.length-4)){
// Ici on regarde si il y a bien 4 caractère après le @
    for (var k=j ; k<(a.length-2) ; k++) {
// On ouvre une seconde boucle pour
     if (a.charAt(k)=='.') testm = true;
/*
on vérifie qu'il y ai bien un point et on met la variable testm à true (implicitement si toutes les conditions sont remplies) puis on ferme les conditions et boucles
*/
    }
   }
  }
 }

if (testm==false) alert('Votre adresse e-mail est incorrecte.');
// si testm est évalué à false, on ouvre une boite d'alerte pour prévenir.

else {document.getElementById('erreurm').innerHTML="";;
/*
Cette boite d'alerte est facultative hein, ici c'est pour le besoin de la démonstration. Chez vous vous pouvez complètement enlever cette condition else car si c'est true le traitement du formulaire peu avoir lieu.
*/

return testm ;

}
}
// et on ferme la fonction.

// fin du script