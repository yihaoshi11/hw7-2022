var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(`New speed is ${document.querySelector('video').playbackRate}`)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log(`New speed is ${document.querySelector('video').playbackRate}`)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(`Original location ${video.currentTime}`);
	if (video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}else{
		console.log("Going back to beginning");
		video.currentTime = 0;
	}
	console.log(`New location ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function(e) {
	video.volume = parseFloat(e.target.value / 100);
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	console.log(e.target.value / 100);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})