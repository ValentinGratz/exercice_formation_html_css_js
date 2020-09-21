var maFenetre;
   
  function ouvreFenetre()
  {
  maFenetre=window.open("","maFenetre","width=200,height=100");
  maFenetre.document.write ("<p>je suis la nouvelle fenetre</p><br /><button onclick='javascript:window.opener.close()'>Fermer la fenetre parent</button><br><button onclick='javascript:window.close()'>Fermer</button>")
  }
  function fermeFenetre(){
  mafenetre=window.close("","maFenetre","width=200,height=100");
  
   }
  function movFenetre()
  {
  maFenetre.moveTo(0,400);
  maFenetre.focus();
  }
  function resizeFenetre()
  {
  maFenetre.resizeBy(350,350);
  maFenetre.focus();
  }