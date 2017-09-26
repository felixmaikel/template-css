var index = 0;
var videoIndex = 0;

function recalculateMargin(position) {
	return position * -1 * 100;
}

function repaintButton(position) {
	var buttons = document.getElementsByClassName("button-slider");
	for(i=0; i<buttons.length; i++) {
		if(buttons[i].className.includes("button-active")) {
			buttons[i].className = buttons[i].className.replace("button-active","");
			break;
		}
	}
	buttons[position].className += " button-active";
}

function showSlider(position) {
	index = position;
	var sliders = document.getElementsByClassName("slider-box");
	var margin = recalculateMargin(position);
	sliders[0].style.marginLeft = margin+"%";
	repaintButton(position);
}

function moveSlider() {
	if(index > 2) {
		index = 0;
	}
	showSlider(index);
	index++;
}

function showVideoSlider(position) {
	videoIndex = position;
	var sliders = document.getElementsByClassName("video-slider");

	for(i=0; i<sliders.length; i++) {
		if(sliders[i].className.includes("video-slider-active")) {
			sliders[i].className = sliders[i].className.replace("video-slider-active","");
			break;
		}
	}
	sliders[position].className += " video-slider-active";
}

function showVideoSliderNext() {
	videoIndex++;
	if(videoIndex > 3) {
		videoIndex = 0;
	}
	showVideoSlider(videoIndex);
}

function showVideoSliderAfter() {
	videoIndex--;
	if(videoIndex < 0) {
		videoIndex = 3;
	}
	showVideoSlider(videoIndex);
}

setInterval("moveSlider()", 3000);