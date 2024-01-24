(function (window) {
	var byeSpeaker={};
	var speakWord="Good Bye";
	byeSpeaker.speak=function (name) {
		document.write(speakWord+" "+name+" ");
	}
	window.byeSpeaker=byeSpeaker;
})(window);
