var kosar=document.getElementById("kosar");
var osszes=0;
var MEA=document.getElementById("MEA");
var W3=document.getElementById("W3");
var RDR2=document.getElementById("RDR2")
var MEA_raktaron=30;
var W3_raktaron=27;
var RDR2_raktaron=5;

function kosarba(jatek){
    osszes+=jatek;
    kosar.innerHTML=osszes+"Ft";
    if(jatek=MEA){
        MEA_raktaron--;
    }
    if(jatek=W3){
        W3_raktaron--;
    }
    if(jatek=RDR2){
        RDR2_raktaron--;
    }
    if(MEA_raktaron==0){
        alert("A Mass Effect Andromeda nincs raktáron");
    }
    if(W3_raktaron==0){
        alert("A Witcher 3:Wild Hunt nincs raktáron");
    }
    if(RDR2_raktaron==0){
        alert("A Red Dead Redemption 2 nincs raktáron");
    }

}


$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});



$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})