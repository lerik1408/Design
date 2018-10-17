window.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1,
  slides = document.getElementsByClassName('slider-item'),
  dotsWrap = document.querySelector('.slider-dots'),
  dots = document.getElementsByClassName('dot');
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
        clearInterval(p);
      }
    }
  });
// АВТО СЛАЙД
// var timeout = 2500;
// for(var i = 1; i <= slides.length+1; i++) {
//   setInterval(
//     (function (N){
//       return function() {
//         plusSlides(1);
//         console.log(N+"n")
//       }
//     })(i)
//     , 
//     timeout
//   );
//   // timeout += 2500;
// };
// АВТО СЛАЙД
  // setInterval(
  //   (function (N){
  //     return function() {
  //       plusSlides(1);
  //       console.log(N+"n")
  //     }
  //   })(1)
  //   , 
  //   timeout
  // );
  var p =setInterval(function(){
    plusSlides(1);
  },7000);

  // Слайдер1
  // Слайдер дивов
  let PortfolioIndex = 1,
  portfolio=document.getElementsByClassName("portfolio-slider-item"),
  PortfolioDotWrap=document.querySelector('.portfolio-menu'),
  PortfolioDot=document.getElementsByClassName('portfolio-menu-dot');
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
  // var ua = window.navigator.userAgent.toLowerCase(),
  // is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
  // if(is_ie){
  //   document.location.href = "https://www.google.ru/intl/ru/chrome/?brand=CHBD&gclid=CjwKCAjwu5veBRBBEiwAFTqDwTEE9G44sBzSw1ZOPMOH3dbYAYZYGwiYqA7DF_DoIGREXZ6pb2D8GRoCCbwQAvD_BwE&gclsrc=aw.ds&dclid=CLfr-4OFjt4CFQPWGAodQfQMfQ";
  // }
//   if (document.all) {
//     // Код для всех версий IE. В других браузерах выполняться не будет.
//     alert("ddd")
// }