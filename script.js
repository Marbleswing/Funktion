const trommel = 1;
const kabel = 0.12;
let gulash = true;

function Gewicht_berechnen(meter, einheit){
    const ergebnis = meter * kabel + trommel;
    if(einheit == "kg"){
        return ergebnis;
    } else if(einheit == "t") {
        return ergebnis / 1000;
    } else {
        return ergebnis * 1000;
    }
}

$(document).ready(function () {
    $("#berechnen").on("click", function() {
        if (gulash){
            $("#einheit_text").text("Gulash");
            gulash = false;
        } else{
            const länge = $('#länge').val();
            const einheit = $('#einheit').val();
            $("#einheit_text").text(einheit);
            $("#ergebnis").text(Gewicht_berechnen(länge, einheit));
        }
        
    });
});