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
    }
        $(window).resize(function() {
            console.log("ss")
        checkSize();
    });
    if(document.documentElement.clientWidth < 1153){
        console.log("768")
        logo768();
        }else{
            console.log("1000")
            logo() 
        }
        for(let i=1;i<10;i++){
            console.log(i)
        }
});