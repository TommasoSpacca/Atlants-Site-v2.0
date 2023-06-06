$(document).ready(function() {
    // Verifica se l'utente ha già accettato i cookie
    var cookieAccepted = localStorage.getItem('cookieAccepted');
  
    if (!cookieAccepted) {
      // Il banner dei cookie viene visualizzato solo se l'utente non ha ancora accettato i cookie
      $('#cookie-banner').show();
    } else {
      // Nascondi il banner dei cookie se l'utente ha già accettato i cookie
      $('#cookie-banner').hide();
    }
  
    // Chiudi il banner dei cookie quando viene cliccato sul pulsante di chiusura
    $('#cookie-banner .close').click(function() {
      $('#cookie-banner').fadeOut();
  
      // Salva lo stato di accettazione dei cookie
      localStorage.setItem('cookieAccepted', true);
    });
  
    // Accetta i cookie quando viene cliccato sul pulsante "Accetta"
    $('#cookie-accept').click(function() {
      // Salva lo stato di accettazione dei cookie
      localStorage.setItem('cookieAccepted', true);
  
      // Nascondi il banner dei cookie
      $('#cookie-banner').fadeOut();
    });
  });
  