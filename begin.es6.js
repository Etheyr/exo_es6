	(()=>{

		const app = {

			tabName: [],
			tabFilter: [],


			init(){

				this.DisplayTXT();
				this.SearchFilter();

			},

			DisplayTXT(){

				document.getElementById('btnName').addEventListener('click' ,()=> {

					let btn = document.getElementById('name').value;
					console.log(btn);
					let majName = btn.charAt(0).toUpperCase();
					console.log(majName)
					let Name = majName + btn.slice(1);

					if (btn === '') {
						let nasusSansStack = document.getElementById('DisplayTxt').innerHTML = 'Nasus est à la fête de noël';
					} else {
						let listNasus = document.body.appendChild(document.createElement('li')).innerHTML = Name ;
						let spawnTxt = document.getElementById('DisplayTxt').innerHTML = `${btn} est soyeux et raffiné`; 
						this.tabName.push(btn);
						console.log(this.tabName);
					}

				});
			},
			SearchFilter(){

				document.getElementById('btnSearch').addEventListener('click' ,()=> {

					let btnSearch = document.getElementById('search').value;
					let minSearch = btnSearch.toLowerCase();

					for(const i= 0; i< this.tabName.length; i++){
						let element = this.tabName[i];
						console.log(element);
						let filter = element.indexOf(minSearch);
						console.log(filter);

						if(filter === 0){
							this.tabFilter.push(element);
							document.getElementById('result').innerHTML = this.tabFilter;
						}
					}
				});
			}
		}
		app.init();
	})();

















