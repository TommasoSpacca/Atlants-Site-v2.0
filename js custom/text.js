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
        testoAttuale += caratteriStrani[Math.floor(Math.random() * caratteriStrani.length)];
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
    const testi = ['Clan di Fortnite', 'Server Minecraft Minigame', 'Clan di BrawlHalla', 'Atlants', 'In Arrivo il 20/06/2023'];
    const idElemento = 'idElemento';
    let i = 0;

    setInterval(() => {
      if (i < testi.length) {
        animaTesto(idElemento, testi[i]);
        i++;
      } else {
        i = 0;
      }
    }, 5000);
  }

  avviaAnimazione();


