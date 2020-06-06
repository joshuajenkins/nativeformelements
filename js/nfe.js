let progressValue = 50
const progressProgress = setInterval(progressTimer, 1000)

const progressEl = document.getElementById('progress-meter')
const progressTextEl = document.getElementById('progress-meter-value')

function progressTimer() {
	progressEl.setAttribute("value", progressValue)
	progressTextEl.textContent = `${progressValue}`

	progressValue = (progressValue >= 100) ? 0 : progressValue += 2
}

let meterValue = 50
const meterProgress = setInterval(meterTimer, 250)

const meterEl = document.getElementById('meter-meter')
const meterTextEl = document.getElementById('meter-meter-value')

function meterTimer() {
	meterEl.setAttribute("value", meterValue)
	meterTextEl.textContent = `${meterValue}`

	meterValue = (meterValue >= 100) ? 0 : meterValue += 2
}

let showDisabled = false
const showDisabledEl = document.getElementById('show-disabled')
const elementsEl = document.getElementById('elements')

showDisabledEl.onclick = () => {
	showDisabled = !showDisabled
	if (showDisabled) {
		elementsEl.classList.add('disabled-visible')
	} else {
		elementsEl.classList.remove('disabled-visible')
	}
}