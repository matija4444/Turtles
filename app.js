var donLis =[
    "Donattelo/donattelo1.jpg",
    "Donattelo/donattelo2.jpg",
    "Donattelo/donattelo3.jpg",
    "Donattelo/donattelo4.jpg",
    "Donattelo/donattelo5.jpg",
    "Donattelo/donattelo6.jpg",
    "Donattelo/donattelo7.jpg",
    "Donattelo/donattelo8.jpg"
]
var leoLis = [
    "Leonardo/leonardo1.jpg",
    "Leonardo/leonardo2.jpg",
    "Leonardo/leonardo3.jpg",
    "Leonardo/leonardo4.jpg",
    "Leonardo/leonardo5.jpg",
    "Leonardo/leonardo6.jpg",
    "Leonardo/leonardo7.jpg",
    "Leonardo/leonardo8.jpg"
]
var micLis = [
    "Michelangelo/michelangelo1.jpg",
    "Michelangelo/michelangelo2.jpg",
    "Michelangelo/michelangelo3.jpg",
    "Michelangelo/michelangelo4.jpg",
    "Michelangelo/michelangelo5.jpg",
    "Michelangelo/michelangelo6.jpg",
    "Michelangelo/michelangelo7.jpg",
    "Michelangelo/michelangelo8.jpg"
]
var rapLis = [
    "Raphael/raphael1.jpg",
    "Raphael/raphael2.jpg",
    "Raphael/raphael3.jpg",
    "Raphael/raphael4.jpg",
    "Raphael/raphael5.jpg",
    "Raphael/raphael6.jpg",
    "Raphael/raphael7.jpg",
    "Raphael/raphael8.jpg"
]
var izjLis =[
    "Cowabunga!",
    "BOOYAKASHA!",
    "Are you guys thinking what I’m thinking?",
    "Bodacious!",
    "Gentlemen, and Raphael",
    "Hellacious!",
    "You live, you die, you fight as brothers!"
]
var btnNext = document.getElementById("bNext");
var btnLeonardo = document.getElementById("bLeonardo");
var btnDonatelo = document.getElementById("bDonatelo");
var btnMichelangelo = document.getElementById("bMichelangelo");
var btnRaphael = document.getElementById("bRaphael");
var slika = document.getElementById("pic");
var popis = donLis;
var counter = 1;
btnNext.addEventListener("click" , function(nextPic){
    if (counter ==8){
        counter=0
    }
    slika.src=popis[counter];
    counter= counter+1;
});
btnRaphael.addEventListener("click" , function(){
    popis=rapLis;
    if (counter ==8){
        counter=0
    }
    slika.src=popis[counter];
    counter= counter+1;
});
btnMichelangelo.addEventListener("click" , function(){
    popis=micLis;
    if (counter ==8){
        counter=0
    }
    slika.src=popis[counter];
    counter= counter+1;
});
btnDonatelo.addEventListener("click" , function(){
    popis=donLis;
    if (counter ==8){
        counter=0
    }
    slika.src=popis[counter];
    counter= counter+1;
});
btnLeonardo.addEventListener("click" , function(){
    popis=leoLis;
    if (counter ==8){
        counter=0
    }
    slika.src=popis[counter];
    counter= counter+1;
});