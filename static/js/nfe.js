$(document).ready(function() {

	var progressPosition = 50;

	var progressProgress=setInterval(function(){
		progressTimer()
	}, 1000);

	function progressTimer() {
		$('.progress-element progress').attr('value', progressPosition);
		$('.progress-progress').text(progressPosition);

		if (progressPosition >= 100) {
			progressPosition = 0;
		} else {
			progressPosition += 2;
		}
	}

});