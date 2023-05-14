//poi si vede cosa metterci :)
function copiaTesto() {
    // seleziona il testo da copiare
    var testo = document.getElementById("testo");
    var selezione = window.getSelection();
    var intervallo = document.createRange();
    intervallo.selectNodeContents(testo);
    selezione.removeAllRanges();
    selezione.addRange(intervallo);

    // copia il testo selezionato nella clipboard
    document.execCommand("copy");

    // deseleziona il testo selezionato
    selezione.removeAllRanges();

    // mostra un messaggio di conferma
    alert("Hai copiato l'ip del server. Buon Divertimento! 😀");
}