

fetch('http://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {
			console.log(data);


		var myUl = document.querySelector('ul');
		var stations = data.network.stations;

		for (var i = 0; i < stations.length; i++) {
			var myLi = document.createElement('li');
			var myStation = stations[i].name + '<br/>' + 'Nombres de places disponibles ' +
			stations[i].empty_slots + '<br/>' +'nombre de vélos disponibles ' +
			stations[i].free_bikes;
			myLi.innerHTML = myStation;
			myUl.appendChild(myLi);
			if (stations[i].empty_slots === 0){
		  myLi.classList.add('rouge'); 
			}
		}







	});
});
