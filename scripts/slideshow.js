//This code was heavily inspired from this w3schools article: https://www.w3schools.com/howto/howto_js_slideshow.asp

// declare and assign slideIndex variable, and call slideshowSlides function
var slideIndex = 0;
slideshowSlides();

/**
 *  Makes slideshow change slide automatically
 */
function slideshowSlides() {
  //declare variable i
  var i;
  // get element with classname slideshow-item
  var slides = document.getElementsByClassName('slideshow-item');
  // loop through slides and and set their style display as none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // increment slideIndex variable by 1
  slideIndex++;
  // if slideIndex's value is greater than the number of slides set it to equal 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // set slide with index slideIndex - 1 's style display to block
  slides[slideIndex - 1].style.display = 'block';
  // Change image every 3 seconds
  setTimeout(slideshowSlides, 3000);
}
