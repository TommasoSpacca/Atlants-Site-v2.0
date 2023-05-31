function animaTesto(idElemento, testoFinale) {
    const caratteriStrani = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|'];
    const durataAnimazione = 1000;
    const intervalloCaratteri = 50;
    const elemento = $('#' + idElemento);
    const lunghezzaTesto = testoFinale.length;
    let testoAttuale = '';
    let indiceCarattere = 0;

    const animazione = setInterval(() => {
      if (indiceCarattere < lunghezzaTesto) {
        testoAttuale += testoFinale[indiceCarattere];
        elemento.text(testoAttuale);
        indiceCarattere++;
      } else {
        clearInterval(animazione);
        elemento.text(testoFinale);
      }
    }, intervalloCaratteri);

    setTimeout(() => {
      clearInterval(animazione);
      elemento.text(testoFinale);
    }, durataAnimazione);
  }

  function avviaAnimazione() {
    const testi = ['Clan di Fortnite', 'Server Minecraft Minigame', 'Clan di BrawlHalla', 'Atlants', 'In Arrivo il 9/06/2023'];
    const idElemento = 'idElemento';
    const testoFinale = testi[Math.floor(Math.random() * testi.length)];

    animaTesto(idElemento, testoFinale);
  }

  setInterval(avviaAnimazione, 5000);