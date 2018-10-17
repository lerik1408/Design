window.addEventListener('DOMContentLoaded', function() {
let overflow=document.createElement('div'),
p = document.createElement('p'),
buttonMain=document.getElementsByClassName("button-main")[0],
mainScreen=document.getElementsByClassName("main-screen")[0],
portfolioScreen=document.getElementsByClassName("portfolio")[0],
consultation=document.getElementsByClassName("portfolio-button")[0],
heightPortfolioScreen=portfolioScreen.offsetHeight,
heightMainScreen=mainScreen.offsetHeight;
buttonMain.onclick=function(){
	overflow.classList.add("modalonce");
	document.body.insertBefore(overflow,document.body.firstChild);
	overflow.appendChild(p);
	overflow.style.height=heightMainScreen+"px";
	p.textContent="Это мог быть Ваш клиент";
	p.style.marginTop=heightMainScreen/2 +"px";
	p.style.color="#f8a25a";
	document.body.style.overflow="hidden";
}
overflow.onclick=function(){
	if(overflow==document.body.firstChild){
	document.body.removeChild(overflow);
	}else{
  portfolioScreen.removeChild(overflow);
	}
	document.body.style.overflow="auto";
}

consultation.onclick=function(){
	overflow.classList.add("modalonce");
	portfolioScreen.appendChild(overflow);
	overflow.appendChild(p);
	overflow.style.height=heightPortfolioScreen +"px";
	overflow.style.transform="scaleX(1.2)";
	p.textContent="Это мог быть Ваш клиент";
	p.style.marginTop=heightPortfolioScreen/2 +"px";
	p.style.color="#f8a25a";
	document.body.style.overflow="hidden";

}
});