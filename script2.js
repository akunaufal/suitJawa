const compFingerThumb = document.getElementById('compFingerThumb');
const compFingerPoint = document.getElementById('compFingerPoint');
const compFingerLittle = document.getElementById('compFingerLittle');
const compScore = document.getElementById('compScore')
const playerFingerThumb = document.getElementById('playerFingerThumb');
const playerFingerPoint = document.getElementById('playerFingerPoint');
const playerFingerLittle = document.getElementById('playerFingerLittle');
const playerScore = document.getElementById('playerScore');
const resultText = document.getElementById('result');
const ulang = document.getElementsByClassName('ulang')[0];

let compChoose = '';
let playerChoose = '';
let cScore = '';
let pScore = '';

ulang.addEventListener('click' , function() {
	window.location.reload();
})

function getComp() {
	let random = Math.random();
	if (random < 0.33) {
		compFingerThumb.classList.add('terpilihC');
		compFingerPoint.classList.remove('terpilihC');
		compFingerLittle.classList.remove('terpilihC');
		return compChoose = 'thumb';
	} else if (random < 0.66) {
		compFingerPoint.classList.add('terpilihC');
		compFingerThumb.classList.remove('terpilihC');
		compFingerLittle.classList.remove('terpilihC');
		return compChoose = 'point';
	} else {
		compFingerLittle.classList.add('terpilihC');
		compFingerPoint.classList.remove('terpilihC');
		compFingerThumb.classList.remove('terpilihC');
		return compChoose = 'little';
	}
}

function getPlayer(jari) {
	if (jari == playerFingerThumb) return playerChoose = 'thumb';
	if (jari == playerFingerPoint) return playerChoose = 'point';
	if (jari == playerFingerLittle) return playerChoose = 'little';
}

function result(comp, player) {
	if(comp == player) {
		resultText.innerHTML = 'DRAW';
	} else if(player == 'thumb' && comp == 'point') {
		resultText.innerHTML = 'WIN';
		playerScore.innerHTML = pScore + 1;
		pScore++;
	} else if(player == 'thumb' && comp == 'little') {
		resultText.innerHTML = 'LOSE';
		compScore.innerHTML = cScore + 1;
		cScore++;
	} else if(player == 'point' && comp == 'little') {
		resultText.innerHTML = 'WIN';
		playerScore.innerHTML = pScore + 1;
		pScore++;
	} else if(player == 'point' && comp == 'thumb') {
		resultText.innerHTML = 'LOSE';
		compScore.innerHTML = cScore + 1;
		cScore++;
	} else if(player == 'little' && comp == 'thumb') {
		resultText.innerHTML = 'WIN';
		playerScore.innerHTML = pScore + 1;
		pScore++;
	} else if(player == 'little' && comp == 'point') {
		resultText.innerHTML = 'LOSE';
		compScore.innerHTML = cScore + 1;
		cScore++;
	}
}

playerFingerThumb.addEventListener('click', function() {
	getComp();
	getPlayer(playerFingerThumb)
	console.log(compChoose);
	console.log(playerChoose);
	playerFingerThumb.classList.add('terpilih');
	playerFingerPoint.classList.remove('terpilih');
	playerFingerLittle.classList.remove('terpilih');
	result(compChoose, playerChoose);
})

playerFingerPoint.addEventListener('click', function() {
	getComp();
	getPlayer(playerFingerPoint)
	console.log(compChoose);
	console.log(playerChoose);
	playerFingerPoint.classList.add('terpilih');
	playerFingerThumb.classList.remove('terpilih');
	playerFingerLittle.classList.remove('terpilih');
	result(compChoose, playerChoose);
})

playerFingerLittle.addEventListener('click', function() {
	getComp();
	getPlayer(playerFingerLittle)
	console.log(compChoose);
	console.log(playerChoose);
	playerFingerLittle.classList.add('terpilih');
	playerFingerPoint.classList.remove('terpilih');
	playerFingerThumb.classList.remove('terpilih');
	result(compChoose, playerChoose);
})