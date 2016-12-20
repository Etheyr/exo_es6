	let tab =[];

	document.getElementById('envoi').addEventListener('click' ,()=> {
		let btn = document.getElementById('inputName').value;
		let listNasus = document.body.appendChild(document.createElement('li')).innerHTML = btn ;
		console.log(btn);
		if (btn === '') {
			let nasusSansStack = document.getElementById('nasusSpawn').innerHTML = 'Nasus est à la fête de noël';
		} else {
			let spawnTxt = document.getElementById('nasusSpawn').innerHTML = btn + ' est soyeux et raffiné'; 
		}
	});
