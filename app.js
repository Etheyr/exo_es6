'use strict';

(function () {

	var app = {

		tabName: [],
		tabFilter: [],

		init: function init() {

			this.DisplayTXT();
			this.SearchFilter();
		},
		DisplayTXT: function DisplayTXT() {
			var _this = this;

			document.getElementById('btnName').addEventListener('click', function () {

				var btn = document.getElementById('name').value;
				console.log(btn);
				var majName = btn.charAt(0).toUpperCase();
				console.log(majName);
				var Name = majName + btn.slice(1);

				if (btn === '') {
					var nasusSansStack = document.getElementById('DisplayTxt').innerHTML = 'Bonjour père Noël';
				} else {
					var listNasus = document.body.appendChild(document.createElement('li')).innerHTML = Name;
					var spawnTxt = document.getElementById('DisplayTxt').innerHTML = 'Bonjour ' + btn;
					_this.tabName.push(btn);
					console.log(_this.tabName);
				}
			});
		},
		SearchFilter: function SearchFilter() {
			var _this2 = this;

			document.getElementById('btnSearch').addEventListener('click', function () {

				var btnSearch = document.getElementById('search').value;
				var minSearch = btnSearch.toLowerCase();

				for (var i = 0; i < _this2.tabName.length; i++) {
					var element = _this2.tabName[i];
					console.log(element);
					var filter = element.indexOf(minSearch);
					console.log(filter);

					if (filter === 0) {
						_this2.tabFilter.push(element);
						document.getElementById('result').innerHTML = _this2.tabFilter;
					}
				}
			});
		}
	};
	app.init();
})();
