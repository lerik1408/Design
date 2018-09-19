window.addEventListener('DOMContentLoaded', function() {
  console.log("slider")
  let slideIndex = 1,
  slides = document.getElementsByClassName('slider-item'),
  dotsWrap = document.querySelector('.slider-dots'),
  dots = document.getElementsByClassName('dot');
  console.log(slides);
  console.log(dotsWrap);
  console.log(dots);
  console.log(dots.length)

  showSlides(slideIndex);
  function showSlides(index){
    if (index > slides.length){
      slideIndex = 1;
    };
    if (index < 1){
      slideIndex = slides.length;
    };
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    };
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('dot-active');
    };
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  };
  function plusSlides(index) {
    showSlides(slideIndex += index);
  };
  
  function currentSlide(index) {
    showSlides(slideIndex = index);
  };
  
  dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length+1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
       
        console.log('ok')
        console.log(currentSlide(i));
        console.log(dots[i-1])
        currentSlide(i);
      }
    }
  });
  console.log('KEK')
  console.log(dots);
  console.log(dots[1-1])
});