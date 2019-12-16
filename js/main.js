///////////////// Слайдер

var slides = document.querySelectorAll('.slider__list .slider__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);
var next = document.getElementById('next');
var previous = document.getElementById('prev');

function nextSlide() {
  goToSlide(currentSlide+1);
 }
 
function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slider__item showing';
  next.classList.toggle('active');
  previous.classList.toggle('active');
}

var playing = true;
 
function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
}
 
function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide,4000);
}

next.onclick = function() {
  if (this.classList.contains('active')){
    event.preventDefault();
  } else {
    pauseSlideshow();
    nextSlide();
    this.classList.add('active');
    previous.classList.remove('active');
  }
};

previous.onclick = function() {
  if (this.classList.contains('active')) {
    event.preventDefault();
  } else {
    pauseSlideshow();
    previousSlide();
    this.classList.add('active');
    next.classList.remove('active');
  }
};
