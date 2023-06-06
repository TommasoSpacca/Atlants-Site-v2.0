$(document).ready(function() {
  var images = [
    "assets/vanilla1.png",
    "assets/vanilla2.png",
    "assets/vanilla3.png",
    "assets/vanilla4.png",
    "assets/vanilla5.png",
    "assets/vanilla6.png",
    "assets/vanilla7.png",
    "assets/vanilla8.png",
    "assets/vanilla9.png",
    "assets/vanilla10.png",
    "assets/vanilla11.png",
    "assets/vanilla13.png",
    "assets/vanilla14.png",
    "assets/vanilla15.png",
    "assets/vanilla16.png",
    "assets/vanilla17.png",
    "assets/vanilla18.png",
    "assets/vanilla19.png",
    "assets/vanilla20.png",
    "assets/vanilla21.png",
    "assets/vanilla22.png",
    "assets/vanilla23.png",
    "assets/vanilla24.png"
  ];
  var targetImages = [
    "assets/vanilla14.png", 
    "assets/vanilla15.png", 
    "assets/vanilla17.png", 
    "assets/vanilla18.png", 
    "assets/vanilla19.png", 
    "assets/vanilla20.png", 
    "assets/vanilla22.png", 
    "assets/vanilla23.png", 
    "assets/vanilla24.png"
  ];

  var currentIndex = 0;
  var myImage = $("#myImage")[0];
  var prevButton = $("#prevButton");
  var nextButton = $("#nextButton");
  var resetButton = $("#resetButton");
  var imageIndicator = $("#imageIndicator");
  var myDiv = $("#myDiv");
  var myText = $("#myText");
  var autoChangeInterval;

  function updateImageIndicator() {
    var currentImageIndex = currentIndex + 1;
    var totalImages = images.length;

    imageIndicator.text(currentImageIndex + "/" + totalImages);
  }

  function changeImage(index) {
    currentIndex = index;
    myImage.src = images[currentIndex];
    updateImageIndicator();
    checkImageBackground();
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

  function checkImageBackground() {
    var currentImage = images[currentIndex];

    if (targetImages.includes(currentImage)) {
      myDiv.removeClass("mc-gradiant").addClass("nether-gradiant");
    } else {
      myDiv.removeClass("nether-gradiant").addClass("mc-gradiant");
    }
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

    $.each(images, function(index, imageUrl) {
      var img = new Image();
      img.onload = imageLoaded;
      img.src = imageUrl;
    });
  }

  myImage.addEventListener("load", function() {
    updateImageIndicator();
    checkImageBackground();
  });

  resetButton.on("click", reset);

  prevButton.on("click", function() {
    stopAutoChange();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
  });

  nextButton.on("click", function() {
    stopAutoChange();
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
  });

  preloadImages();
});
