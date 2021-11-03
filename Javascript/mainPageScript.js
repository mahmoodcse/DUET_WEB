
var section_img = ["duet-field.jpg","duet-gate.jpg","gate2.jpg"];
var i=0;
var n= section_img.length;

setInterval(imgLoop,3000);
function imgLoop(){
	
	document.getElementById("img_section3").src= "../picture/" + section_img[i];
	i=i+1;
	if(i==3){
		i=0;
	}
}