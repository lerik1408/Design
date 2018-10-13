window.addEventListener('DOMContentLoaded', function() {
let controls = {
	video:document.getElementById('myvideo'),
  pauseplay:document.getElementById("pauseplay"),
  button:document.getElementById("button-video-player"),
  dynamic:document.getElementById("dynamic"),
  togglePlayback: function() {
    (controls.video.paused) ? controls.video.play() : controls.video.pause();
    }
}
let ph=document.getElementsByClassName('presentation')[0].getElementsByTagName('p')[0];
//Main button
controls.button.addEventListener('click',function(){
	controls.togglePlayback();
	this.style.display="none";
	ph.style.display="none";
	controls.dynamic.style.display="block";
	controls.pauseplay.style.display="block";
});
//Control button
controls.pauseplay.addEventListener('click',function(){
	controls.togglePlayback();
});
//Ended video
controls.video.addEventListener("ended", function() {
	this.pause();
	controls.pauseplay.textContent="PLAY";
});
//click on contextmenu
controls.video.addEventListener("play",function(){
	controls.button.style.display="none";
	ph.style.display="none";
	controls.pauseplay.style.display="block";
	controls.dynamic.style.display="block";
	controls.pauseplay.textContent="PAUSE";
});

controls.video.addEventListener("pause",function(){
	controls.pauseplay.textContent="PLAY";
})
//click on video
controls.video.addEventListener("click",function(){
	controls.togglePlayback();
})
//mute volume
controls.dynamic.addEventListener("click",function(){
	if(controls.video.muted==false){
	controls.video.muted=true;
	this.classList.add('off');
	}else{
	controls.video.muted=false;
	this.classList.remove('off');
	}
})
});