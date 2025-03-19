const box=document.querySelector("body")

$(document).ready(function() {
    // Appliquer fadeIn automatiquement au chargement de la page
    $("#box").fadeIn(1500); // Durée de l'animation : 1.5 secondes
});


$("#show").click(function() {
    $("#more").fadeToggle(1000); // Affiche ou masque selon l'état actuel
});