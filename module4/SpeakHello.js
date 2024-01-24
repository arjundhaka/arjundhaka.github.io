(function (window) {
	var helloSpeaker={};
	var speakWord="Hello";
	helloSpeaker.speak=function (name) {
		document.write(speakWord+" "+name+" ");
	}
	window.helloSpeaker=helloSpeaker;
})(window);
