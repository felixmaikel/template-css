var index = 0;

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

setInterval("moveSlider()", 2000);