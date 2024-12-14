const trommel = 1;
const kabel = 0.12;

function Gewicht_berechnen(meter, einheit){
    const ergebnis = meter * kabel + trommel;
    if(einheit == "G" || einheit == "g"){
        return ergebnis * 1000;
    } else if(einheit == "T" || einheit == "t") {
        return ergebnis / 1000;
    } else {
        return ergebnis;
    }
}

$(document).ready(function () {
    $("#berechnen").on("click", function() {
        const länge = $('#länge').val();
        const einheit = $('#einheit').val();
        $("#einheit_text").text(einheit);
        $("#ergebnis").text(Gewicht_berechnen(länge, einheit));
    });
});