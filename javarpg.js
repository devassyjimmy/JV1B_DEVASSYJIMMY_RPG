var VikingbleuHTML = document.getElementById("viking bleu Pic");
var VikingrougeHTML = document.getElementById("viking rouge Pic");
var VikingvertHTML = document.getElementById("viking vert Pic");
var VikinggrisHTML = document.getElementById("viking gris Pic");
var VikingbleuPVHTML = document.getElementById("viking bleu PV");
var VikingrougePVHTML = document.getElementById("viking rouge PV");
var VikingvertPVHTML = document.getElementById("viking vert PV");
var VikinggrisPVHTML = document.getElementById("viking gris PV");
var CommentaireHTML = document.getElementById("Text");
var MageHTML = document.getElementById("mage Pic");
var MagePVHTML = document.getElementById("mage PV");
var AndromaliusHTML = document.getElementById("andromalius Pic");
var AndromaliusPVHTML =  document.getElementById("andromalius PV");
var SpiderHTML = document.getElementById("spider Pic");
var SpiderPVHTML =  document.getElementById("spider PV");
var ActionsHTML = document.getElementsByClassName("actions")[0];
var AttaqueHTML = document.getElementById("Attaque")

var MagePV = 250
var MageATK= 60
var AndromaliusPV = 150
var AndromaliusATK=40
var SpiderPV = 50
var SpiderATK =25
var VikindbleuPV = 120
var VikingbleuATK = 100
var VikingrougePV = 80
var VikingrougeATK = 40
var VikingvertPV = 100
var VikingvertATK = 50
var VikinggrisPV = 100
var VikinggrisATK = 35




VikingbleuHTML.onclick = function() {
    if(isPlay == false) {
        isPlay == true;
        if(VikingbleuPlay)
    
    CommentaireHTML.innerHTML = "Actions de viking bleu";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Quelle ennemi veut tu attaquer";
        MageHTML.onclick = function() {
            MagePV = MagePV - VikingbleuATK
            MagePVHTML.innerHTML = "<h2>" + MagePV + "/250 PV </h2>";
            CommentaireHTML.innerHTML =  + VikingbleuATK + " de dégâts  !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }
           
        HTML.onclick = function() {
            AndromaliusPV = AndromaliusPV - VikingbleuATK
            AndromaliusPVHTML.innerHTML = "<h2>" + AndromaliusPV + "/150 PV </h2>";
            CommentaireHTML.innerHTML =  + VikingbleuATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }

        SpiderHTML.onclick = function() {
            SpiderPV = SpiderPV - VikingbleuATK
            SpiderPVHTML.innerHTML = "<h2>" + SpiderPV + "/50 PV </h2>";
            CommentaireHTML.innerHTML =  + VikingbleuATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }
        ActionsHTML.style.visibility = "hidden";
        VikingbleuHTML.onclick = "none";
        
    }
    

}

MageHTML. {
    
    CommentaireHTML.innerHTML = "Attaque de Mage";
    ActionsHTML.style.visibility = "visible";
    
        
        CommentaireHTML.innerHTML = "Attaque";
        
            VikingbleuPV = VikingbleuPV - MageATK
            VikingbleuPVHTML.innerHTML = "<h2>" + VikingbleuPV + "/120 PV </h2>";
            CommentaireHTML.innerHTML =  + MageATK + " de dégâts"
           
        }
        

            VikingrougePV = VikingrougePV - MageATK
            VikingrougePVHTML.innerHTML = "<h2>" + VikingrougePV + "/80 PV </h2>";
            CommentaireHTML.innerHTML =  + MageATK + " de dégâts"
           
        }

    
            VikingvertPV = VikingvertPV - MageATK
            VikingvertPVHTML.innerHTML = "<h2>" + VikingvertPV + "/100 PV </h2>";
            CommentaireHTML.innerHTML =  + MageATK + " de dégâts"

         }

    
        VikinggrisPV = VikinggrisPV - MageATK
        VikinggrisPVHTML.innerHTML = "<h2>" + VikinggrisPV + "/100 PV </h2>";
        CommentaireHTML.innerHTML =  + MageATK + " de dégâts"
    
            
           
    

        ActionsHTML.style.visibility = "hidden";
        VikingbleuHTML.onclick = "none";

VikingrougeHTML.onclick = function() {
    CommentaireHTML.innerHTML = "Actions de viking rouge";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Quelle ennemi veut tu attaquer";
        MageHTML.onclick = function() {
            MagePV = MagePV - VikingrougeATK
            MagePVHTML.innerHTML = "<h2>" + MagePV + "/250 PV </h2>";
            CommentaireHTML.innerHTML =  + VikingrougeATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }
           
        AndromaliusHTML.onclick = function() {
            AndromaliusPV = AndromaliusPV - VikingrougeATK
            AndromaliusPVHTML.innerHTML = "<h2>" + AndromaliusPV + "/150 PV </h2>";
            CommentaireHTML.innerHTML =  + VikingrougeATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }

        SpiderHTML.onclick = function() {
            SpiderPV = SpiderPV - VikingrougeATK
            SpiderPVHTML.innerHTML = "<h2>" + SpiderPV + "/50 PV </h2>";
            CommentaireHTML.innerHTML =  + SkyATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }
            ActionsHTML.style.visibility = "hidden";
            VikingrougeHTML.onclick = "none";
        
    }

}

vikingvertHTML.onclick = function() {
    CommentaireHTML.innerHTML = "Actions de viking vert";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Quelle ennemi veut tu attaquer";
        MageHTML.onclick = function() {
            MagePV = MagePV - VikingvertATK
            MagePVHTML.innerHTML = "<h2>" + MagePV + "/250 PV </h2>";
            CommentaireHTML.innerHTML = + VikingvertATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }
           
        AndromaliusHTML.onclick = function() {
            AndromaliusPV = AndromaliusPV - VikingvertATK
            AndromaliusPVHTML.innerHTML = "<h2>" + AndromaliusPV + "/150 PV </h2>";
            CommentaireHTML.innerHTML =  + VikingvertATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            spiderHTML.onclick = "none";
        }

        SpiderHTML.onclick = function() {
            SpiderPV = SpiderPV - VikingvertATK
            spiderPVHTML.innerHTML = "<h2>" + spiderPV + "/50 PV </h2>";
            CommentaireHTML.innerHTML =  + vikingvertATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }
            ActionsHTML.style.visibility = "hidden";
            VikingvertHTML.onclick = "none";
        
    }

}

VikinggrisHTML.onclick = function() {
    CommentaireHTML.innerHTML = "Actions de viking gris";
    ActionsHTML.style.visibility = "visible";
    AttaqueHTML.onclick = function() {
        
        CommentaireHTML.innerHTML = "Quelle ennemi veut tu attaquer";
        BossHTML.onclick = function() {
            MagePV = MagePV - VikinggrisATK
            magePVHTML.innerHTML = "<h2>" + MagePV + "/250 PV </h2>";
            CommentaireHTML.innerHTML = + vikinggrisATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }
           
        AndromaliusHTML.onclick = function() {
            AndromaliusPV = AndromaliusPV - VikinggrisATK
            AndromaliusPVHTML.innerHTML = "<h2>" + AndromaliusPV + "/150 PV </h2>";
            CommentaireHTML.innerHTML =  + VikinggrisATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AndromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";
        }

        SpiderHTML.onclick = function() {
            SpiderPV = SpiderPV - VikinggrisATK
            SpiderPVHTML.innerHTML = "<h2>" + SpiderPV + "/50 PV </h2>";
            CommentaireHTML.innerHTML = + VikinggrisATK + " de dégâts !<br> Sélectionnez un personnage";
            MageHTML.onclick = "none";
            AbdromaliusHTML.onclick = "none";
            SpiderHTML.onclick = "none";

        }
            ActionsHTML.style.visibility = "hidden";
            VikinggrisHTML.onclick = "none";

    }

}