document.addEventListener("DOMContentLoaded", function() {
  var images = [
    "assets/vanilla1.png",
    "assets/vanilla2.png",
    "assets/vanilla3.png",
    "assets/vanilla4.png",
    "assets/vanilla5.png",
    "assets/vanilla6.png",
    "assets/vanilla7.png",
    "assets/vanilla8.png"
  ];

  var currentIndex = 0;
  var imageElement = document.getElementById("myImage");
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var resetButton = document.getElementById("resetButton");
  var imageIndicator = document.getElementById("imageIndicator");
  var autoChangeInterval;

  function updateImageIndicator() {
    var currentImageIndex = currentIndex + 1;
    var totalImages = images.length;

    imageIndicator.textContent = currentImageIndex + "/" + totalImages;
  }

  function changeImage(index) {
    currentIndex = index;
    imageElement.src = images[currentIndex];
    updateImageIndicator();
  }

  function startAutoChange() {
    autoChangeInterval = setInterval(function() {
      currentIndex = (currentIndex + 1) % images.length;
      changeImage(currentIndex);
    }, 5000);
  }

  function stopAutoChange() {
    clearInterval(autoChangeInterval);
    autoChangeInterval = null;
  }

  function reset() {
    stopAutoChange();
    currentIndex = 0;
    changeImage(currentIndex);
    startAutoChange();
  }

  function preloadImages() {
    var loadedImages = 0;

    function imageLoaded() {
      loadedImages++;
      if (loadedImages === images.length) {
        changeImage(currentIndex);
        startAutoChange();
      }
    }

    images.forEach(function(imageUrl) {
      var img = new Image();
      img.onload = imageLoaded;
      img.src = imageUrl;
    });
  }

  imageElement.addEventListener("load", function() {
    updateImageIndicator();
  });

  resetButton.addEventListener("click", reset);

  prevButton.addEventListener("click", function() {
    stopAutoChange();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
  });

  nextButton.addEventListener("click", function() {
    stopAutoChange();
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  });

  // Carica le immagini in anticipo
  preloadImages();
});
