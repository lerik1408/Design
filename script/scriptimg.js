window.addEventListener('DOMContentLoaded', function() {
    var imglog = document.getElementById("imglogo");
    var imgimg = document.getElementById("imgimg");
    var imgvid=document.getElementById("myvideo")
    function screenDesktop(){
        imglog.src="img/mainScreen/logo.png"; 
        imgvid768.poster="img/video/preview.png";
    }
    function screen1170(){
        imglog.src="img/mainScreen/logo768.png";
        imgvid.poster="img/video/preview.png";
        // imgvid768.poster="img/video/preview768.png";
    }
    function screen768(){
        imglog.src="img/mainScreen/logo768.png";
        imgvid.poster="img/video/preview768.png";
    }
    function screen320(){
        imglog.src="img/mainScreen/logo768.png";
        imgvid.poster="img/video/preview320.png";
    }
    function checkSize(){
        if(document.documentElement.clientWidth <= 320){
            screen320();
        }else if(document.documentElement.clientWidth <= 768){
            screen768();
        }else if(document.documentElement.clientWidth < 1170){
            screen1170();
        }else{
            screenDesktop();
        }
    }
        $(window).resize(function() {
        checkSize();
    });
    checkSize()
});