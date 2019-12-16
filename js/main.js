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

///////////////// Вычисление высоты блока slider

window.onload = function() {
  let block = document.querySelector('.slider');
  let banner = document.querySelector('.slider__img');
  block.style.height = banner.height - 10 + 'px';
};

///////////////// Изменение высоты слайдера при ресайзе

window.addEventListener('resize', function heightOfSlider(){
  let block = document.querySelector('.slider');
  let banner = document.querySelector('.slider__img');
  block.style.height = banner.height - 10 + 'px';
})

//yandex maps location

ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.897289,
        longitude: 30.522013,

    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.896167, 30.490350],
        zoom: 14,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
                hintContent: '<p class="hint">г. Санкт-Петербург, Мурманское шоссе, 12-й километр, 5</p>'
            },
                
            {
                iconLayout: 'default#image',
                iconImageHref: './images/icons/map-marker.png',
                iconImageOffset: [-23, -57],
                iconImageSize: [46, 57]
            });
            map.geoObjects.add(geoObjects[i]);
    };
}

  

