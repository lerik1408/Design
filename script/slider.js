window.addEventListener('DOMContentLoaded', function() {
  console.log("slider")
  let slideIndex = 1,
  slides = document.getElementsByClassName('slider-item'),
  dotsWrap = document.querySelector('.slider-dots'),
  dots = document.getElementsByClassName('dot');
  console.log(slides);
  console.log("ggggdg")
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
    for (let i = 0; i <= dots.length; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i-1]){
        currentSlide(i);
      }
    }
  }); 
  // Слайдер1
  // Слайдер дивов
  let PortfolioIndex = 2,
  portfolio=document.getElementsByClassName("portfolio-slider-item"),
  PortfolioDotWrap=document.querySelector('.portfolio-menu'),
  PortfolioDot=document.getElementsByClassName('portfolio-menu-dot');
  console.log(PortfolioDotWrap);
  console.log(portfolio);
  showPortfolio(PortfolioIndex);
  function showPortfolio(index){
    if(index>portfolio.length){
      PortfolioIndex =1;
    }
    if(index<0){
      PortfolioIndex=portfolio.length;
    }
    for(let i=0;i<portfolio.length;i++){
      portfolio[i].style.display="none";
      PortfolioDot[i].classList.remove('portfolio-menu-dot-active');
    }
    portfolio[PortfolioIndex-1].style.display="block";
    PortfolioDot[PortfolioIndex-1].classList.add('portfolio-menu-dot-active');
  }
  function currentPortfolio(index){
    showPortfolio(PortfolioIndex = index)
  }
  PortfolioDotWrap.addEventListener('click',function(event){
    for (let i = 0; i <= PortfolioDot.length; i++){
      if(event.target.classList.contains('portfolio-menu-dot') && event.target == PortfolioDot[i-1]){
        currentPortfolio(i);
      }
    }
  })
});