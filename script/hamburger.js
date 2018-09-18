// window.addEventListener('DOMContentLoaded', function() {
// console.log("kekarus")
//   $('.menu-btn').on('click', function(e) {
//   e.preventDefault;
//   $(this).toggleClass('menu-btn_active');
//   });
// });

window.addEventListener('DOMContentLoaded', function() {
  var menuBtn=document.getElementsByClassName("menu-btn")[0];
  var menuDisplay=document.getElementsByClassName("menu")[0];
  console.log(menuDisplay)
  function openMenu(event){
    event.preventDefault();
    menuBtn.classList.toggle("menu-btn_active");
    if(menuBtn.classList.contains("menu-btn_active")){
      menuDisplay.style.display="block";
    }else{
      menuDisplay.style.display="none";
    }
  }
  menuBtn.addEventListener("click",openMenu);
});

// window.addEventListener('DOMContentLoaded', function() {
//   var menuBtn=document.getElementsByClassName("menu-btn")[0];
//   function lul(event){
//     event.preventDefault();
//   }
//   menuBtn.addEventListener("click",lul);
// });