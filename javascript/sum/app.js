function sum(a, b) {
	return a + b;
}

function onCalculateClick() {
	var resultEl = document.getElementById('result');
	var aEl = document.getElementById('a');
	var bEl = document.getElementById('b');
	var a = parseInt(aEl.value, 10);
	var b = parseInt(bEl.value, 10);
	var result = sum(a, b);

	resultEl.innerHTML = result;
}

function load() {
	var calculateEl = document.getElementById('calculate');
	calculateEl.addEventListener('click', onCalculateClick, false);
}
