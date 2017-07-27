
function playclip() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
	if (document.all)
	 {
	  document.all.sound.src = "good_shit.mp3";
	 }
}else{	
	var audio = document.getElementsByTagName("audio")[0];
	audio.volume = 0.1;
	if(!audio.paused)
	{
		audio.pause();
	}else{
		audio.currentTime = 0;
		audio.play();
	}
		
	}
}
