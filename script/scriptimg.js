window.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById("logo");
    function logo768(){
        img.src="../img/mainScreen/logo768.png";
    }
    function logo(){
        img.src="../img/mainScreen/logo.png"; 
    }
    function checkSize(){
        if(document.documentElement.clientWidth < 1153){
        logo768();
        }   else{
            logo() 
            }
    }
        $(window).resize(function() {
        checkSize();
    });
});