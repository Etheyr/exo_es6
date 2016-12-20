'use strict';

var tab = [];

document.getElementById('envoi').addEventListener('click', function () {
	var btn = document.getElementById('inputName').value;
	var listNasus = document.body.appendChild(document.createElement('li')).innerHTML = btn;
	console.log(btn);
	if (btn === '') {
		var nasusSansStack = document.getElementById('nasusSpawn').innerHTML = 'Nasus est à la fête de noël';
	} else {
		var spawnTxt = document.getElementById('nasusSpawn').innerHTML = btn + ' est soyeux et raffiné';
	}
});
