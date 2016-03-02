$(document).ready(function() {

  var progressValue = 50;
  var progressProgress=setInterval(progressTimer, 1000);

  function progressTimer() {
    $('.progress-element progress').attr('value', progressValue);
    $('.progress-progress').text(progressValue);

    if (progressValue >= 100) {
      progressValue = 0;
    } else {
      progressValue += 2;
    }
  }

  var meterValue = 50;
  var meterProgress = setInterval(meterTimer, 250);

  function meterTimer() {
    $('.meter-element meter').attr('value', meterValue);
    $('.meter-value').text(meterValue);

    if (meterValue >= 100) {
      meterValue = 0;
    } else {
      meterValue += 2;
    }
  }

});