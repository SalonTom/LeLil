function console () {
	const name = document.getElementById('input_search');
	name.style.color = "blue";
};

function showResult() {
	var idArray = [{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 2, name: "WALLEZ",student: true, sanitary : false},
	{id : 3, name: "DELORY",student: true, sanitary : true}];

	var nameSearched = document.getElementById('input_name');
	nameSearched.value = nameSearched.value.toUpperCase();
	var resultList = document.getElementById('result_list');
	resultList.innerHTML = "";

	for (var i = 0; i < idArray.length; i++) {
		if (idArray[i].name === nameSearched.value) {
			resultList.innerHTML += "<div>" + idArray[i].name + ": </div>"
			if (idArray[i].student) {
				resultList.innerHTML += "<div><input type=\"checkbox\" name=\"student\" value=\"student\" checked disabled/><label for=\"student\">Carte étudiante</label></div>"
			}
			else {
				resultList.innerHTML += "<div><input type=\"checkbox\" name=\"student\" value=\"student\" disabled/><label for=\"student\">Carte étudiante</label></div>"
			}

			if (idArray[i].sanitary) {
				resultList.innerHTML += "<div><input type=\"checkbox\" name=\"sanitary\" value=\"sanitary\" checked disabled/><label for=\"sanitary\">Pass vaccinal</label></div>"
			}
			else {
				resultList.innerHTML += "<div><input type=\"checkbox\" name=\"student\" value=\"student\" disabled/><label for=\"student\">Pass vaccinal</label></div>"
			}
		}
	}
}

