function change()
{
 a = document.getElementById("hs").getAttribute("src"); //1er getelement : mettre premiere image, getattribute: mettre "src"
 if (a=='AmpouleHS.GIF') { //si variable est (==) et indiqué fichier image à remplacer
              document.getElementById("hs").src='AmpouleOK.GIF'; //indiqué id de l'img.src="nom de l'image qui remplace"
          }

          else { // sinon
         document.getElementById("hs").src='AmpouleHS.GIF'; // indiqué id de l'img.src de l'image hs
          }

}