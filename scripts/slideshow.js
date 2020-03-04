//JavaScript code for Main Automatic Slideshow ("Home Page")
//This code was heavily inspired from this w3schools article: https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 0;
slideshowSlides();

function slideshowSlides() {
  var i;
  var slides = document.getElementsByClassName('slideshow-item');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(slideshowSlides, 3000); // Change image every 3 seconds
}
