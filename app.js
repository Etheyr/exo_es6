'use strict';

var nasusStack = function nasusStack() {
	var btn = document.getElementById('inputName').value;
	var listNasus = document.getElementById('listInput').innerHTML = '<li>' + btn + '</li>';
	console.log(btn);
	if (btn === '') {
		var nasusSansStack = document.getElementById('nasusSpawn').innerHTML = 'Nasus est à la fête de noël';
	} else {
		var spawnTxt = document.getElementById('nasusSpawn').innerHTML = btn + ' est soyeux et raffiné';
	}
};
