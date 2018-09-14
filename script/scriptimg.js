window.addEventListener('DOMContentLoaded', function() {
    var imglog = document.getElementById("imglogo");
    var imgimg = document.getElementById("imgimg")
    function logo768(){
        imglog.src="img/mainScreen/logo768.png";
    }
    function logo(){
        imglog.src="img/mainScreen/logo.png"; 
    }
    function checkSize(){
        if(document.documentElement.clientWidth < 1153){
        logo768();
        }else{
            logo() 
        }
        // if(document.documentElement.clientWidth < 768){
        //     imgimg.src="../img/mainScreen/image768.png";
        // }else{
        //     imgimg.src="../img/mainScreen/image.png";
        // }
    }
        $(window).resize(function() {
            console.log("ss")
        checkSize();
    });
});