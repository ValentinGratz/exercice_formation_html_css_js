<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_SINON"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2etat="inactif" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" nbDecimales="8" totalAffichages="1000" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#a" algoitem="a EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#b" algoitem="b EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#c" algoitem="c EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#delta" algoitem="delta EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#x1" algoitem="x1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#x2" algoitem="x2 EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#a#pasliste" algoitem="LIRE a"/>
        <item code="2#b#pasliste" algoitem="LIRE b"/>
        <item code="2#c#pasliste" algoitem="LIRE c"/>
        <item code="5#delta#b*b-4*a*c#pasliste" algoitem="delta PREND_LA_VALEUR b*b-4*a*c"/>
        <item code="6#delta&lt;0" algoitem="SI (delta&lt;0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Pas de solution#0" algoitem="AFFICHER &quot;Pas de solution&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#delta==0" algoitem="SI (delta==0) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#x1#-b/2/a#pasliste" algoitem="x1 PREND_LA_VALEUR -b/2/a"/>
                    <item code="4#Une solution réelle double : #0" algoitem="AFFICHER &quot;Une solution réelle double : &quot;"/>
                    <item code="3#x1#0#pasliste" algoitem="AFFICHER x1"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="5#x1#(-b - sqrt(delta))/2/a#pasliste" algoitem="x1 PREND_LA_VALEUR (-b - sqrt(delta))/2/a"/>
                        <item code="5#x2#(-b + sqrt(delta))/2/a#pasliste" algoitem="x2 PREND_LA_VALEUR (-b + sqrt(delta))/2/a"/>
                        <item code="4#Deux solutions réelles : #0" algoitem="AFFICHER &quot;Deux solutions réelles : &quot;"/>
                        <item code="3#x1#0#pasliste" algoitem="AFFICHER x1"/>
                        <item code="4# et #0" algoitem="AFFICHER &quot; et &quot;"/>
                        <item code="3#x2#0#pasliste" algoitem="AFFICHER x2"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
