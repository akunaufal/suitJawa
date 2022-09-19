const playerFingerThumb = document.getElementById('playerFingerThumb');
const playerFingerPoint = document.getElementById('playerFingerPoint');
const playerFingerLittle = document.getElementById('playerFingerLittle');

const compFingerThumb = document.getElementById('compFingerThumb');
const compFingerPoint = document.getElementById('compFingerPoint');
const compFingerLittle = document.getElementById('compFingerLittle');

const resultText = document.getElementById('result');
const pFT = document.querySelector('#playerFingerThumb p')
const pFP = document.querySelector('#playerFingerPoint p')
const pFL = document.querySelector('#playerFingerLittle p')
const jari = document.querySelectorAll('.jari');

const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');

const menu = document.getElementsByClassName('menu')[0];

const ulang = document.getElementById('ulang');
const next = document.getElementById('next');

let pScore = 0;
let cScore = 0;

let playerChoose = '';
let compChoose = '';
function comp() {
	let randomComp = Math.random();
	if (randomComp < 0.33) {
		compChoose = 'jempol';
	} else if (randomComp < 0.66) {
		compChoose = 'telunjuk';
	} else {
		compChoose = 'kelingking';
	}
	console.log(compChoose)
}

function compChoosen() {
	if (compChoose == 'jempol') {
		compFingerThumb.style.transform = 'rotate(180deg) translateX(-215px)';
		compFingerThumb.style.width = '150px'
		compFingerThumb.style.height = '150px'
		compFingerThumb.style.border = '12px solid silver'
		compFingerPoint.setAttribute('hidden','');
		compFingerLittle.setAttribute('hidden','');
	} else if (compChoose == 'telunjuk') {
		compFingerPoint.style.transform = 'rotate(180deg) translateX(-215px)';
		compFingerPoint.style.width = '150px'
		compFingerPoint.style.height = '150px'
		compFingerPoint.style.border = '12px solid silver'
		compFingerThumb.setAttribute('hidden','');
		compFingerLittle.setAttribute('hidden','');
	} else if (compChoose == 'kelingking') {
		compFingerLittle.style.transform = 'rotate(180deg) translateX(-215px)';
		compFingerLittle.style.width = '150px'
		compFingerLittle.style.height = '150px'
		compFingerLittle.style.border = '12px solid silver'
		compFingerPoint.setAttribute('hidden','');
		compFingerThumb.setAttribute('hidden','');
	}
}

function result(compChoose, playerChoose) {
	  if (compChoose === 'telunjuk' && playerChoose === 'jempol') {
		resultText.innerHTML = 'Win';
		pScore = pScore + 1;
		playerScore.innerHTML = pScore;

	} else if (compChoose === 'telunjuk' && playerChoose === 'kelingking') {
		resultText.innerHTML = 'Lose';
		cScore = cScore + 1;
		compScore.innerHTML = cScore;
	} else if (compChoose === 'kelingking' && playerChoose === 'jempol') {
		resultText.innerHTML = 'Lose';
		cScore = cScore + 1;
		compScore.innerHTML = cScore;
	} else if (compChoose === 'kelingking' && playerChoose === 'telunjuk') {
		resultText.innerHTML = 'Win';
		pScore = pScore + 1;
		playerScore.innerHTML = pScore;
	} else if (compChoose === 'jempol' && playerChoose === 'kelingking') {
		resultText.innerHTML = 'Win';
		pScore = pScore + 1;
		playerScore.innerHTML = pScore;
	} else if (compChoose === 'jempol' && playerChoose === 'telunjuk') {
		resultText.innerHTML = 'Lose';
		cScore = cScore + 1;
		compScore.innerHTML = cScore;
	} else if (compChoose === playerChoose) {
		resultText.innerHTML = 'Draw';
	}
}

function pengulangan() {
	menu.classList.remove('hidden');
	menu.style.top = '410px';
	ulang.addEventListener('click', function() {
		window.location.reload();
	})
	next.addEventListener('click', function() {
		menu.classList.add('hidden');
		menu.style.top = '700px';
		compChoosen()
		playerFingerLittle.removeAttribute('hidden','');
		playerFingerPoint.removeAttribute('hidden','');
		playerFingerThumb.removeAttribute('hidden','');
		playerFingerThumb.style.transform = 'translateX(0)';
		playerFingerPoint.style.transform = 'translateX(0)';
		playerFingerLittle.style.transform = 'translateX(0)';
		playerFingerPoint.style.width = '150px'
		playerFingerPoint.style.height = '150px'
		playerFingerPoint.style.border = '4px solid var(--primary-color)'
		playerFingerThumb.style.width = '150px'
		playerFingerThumb.style.height = '150px'
		playerFingerThumb.style.border = '4px solid var(--primary-color)'
		playerFingerLittle.style.width = '150px'
		playerFingerLittle.style.height = '150px'
		playerFingerLittle.style.border = '4px solid var(--primary-color)'
		pilih();
	})
}

for(let i = 0; i < jari.length ; i++) {
jari[i].addEventListener('mouseenter', function() {
	jari[i].style.height = '180px';
	jari[i].style.width = '180px';
	jari[i].style.cursor = 'pointer';
})
jari[i].addEventListener('mouseleave', function() {
	jari[i].style.height = '150px';
	jari[i].style.width = '150px';
	jari[i].style.cursor = 'inherit';
})
;}

function pilih() {
playerFingerThumb.addEventListener('click', function() {
	comp();
	playerFingerThumb.style.width = '170px'
	playerFingerThumb.style.height = '170px'
	playerFingerThumb.style.border = '12px solid gold'
	playerFingerPoint.style.width = '150px'
	playerFingerPoint.style.height = '150px'
	playerFingerPoint.style.border = '4px solid var(--primary-color)'
	playerFingerLittle.style.width = '150px'
	playerFingerLittle.style.height = '150px'
	playerFingerLittle.style.border = '4px solid var(--primary-color)'
	compChoosen();
	playerFingerLittle.setAttribute('hidden','');
	playerFingerPoint.setAttribute('hidden','');
	playerFingerThumb.style.transform = 'translateX(215px)';
	pFT.classList.add('hidden');
	playerChoose = 'jempol';
	console.log(playerChoose);
	result(compChoose,playerChoose);
	pengulangan();
})

playerFingerPoint.addEventListener('click', function() {
	comp();
	playerFingerPoint.style.width = '170px'
	playerFingerPoint.style.height = '170px'
	playerFingerPoint.style.border = '12px solid gold'
	playerFingerLittle.style.width = '150px'
	playerFingerLittle.style.height = '150px'
	playerFingerLittle.style.border = '4px solid var(--primary-color)'
	playerFingerThumb.style.width = '150px'
	playerFingerThumb.style.height = '150px'
	playerFingerThumb.style.border = '4px solid var(--primary-color)'
	compChoosen();
	playerFingerLittle.setAttribute('hidden','');
	playerFingerThumb.setAttribute('hidden','');
	playerFingerPoint.style.transform = 'translateX(215px)';
	pFP.classList.add('hidden');
	playerChoose = 'telunjuk';
	console.log(playerChoose);
	result(compChoose,playerChoose);
	pengulangan();
})

playerFingerLittle.addEventListener('click', function() {
	comp();
	playerFingerLittle.style.width = '170px'
	playerFingerLittle.style.height = '170px'
	playerFingerLittle.style.border = '12px solid gold'
	playerFingerPoint.style.width = '150px'
	playerFingerPoint.style.height = '150px'
	playerFingerPoint.style.border = '4px solid var(--primary-color)'
	playerFingerThumb.style.width = '150px'
	playerFingerThumb.style.height = '150px'
	playerFingerThumb.style.border = '4px solid var(--primary-color)'
	compChoosen();
	playerFingerPoint.setAttribute('hidden','');
	playerFingerThumb.setAttribute('hidden','');
	playerFingerLittle.style.transform = 'translateX(215px)';
	pFL.classList.add('hidden');
	playerChoose = 'kelingking';
	console.log(playerChoose);
	result(compChoose,playerChoose);
	pengulangan();
})
}
pilih();