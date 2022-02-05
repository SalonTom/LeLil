function console () {
	const name = document.getElementById('input_search');
	name.style.color = "blue";
};

var test = 5;
function showResult() {
	var idArray = [{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 2, name: "WALLEZ",student: true, sanitary : false},
	{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 1, name: "SALON",student: true, sanitary : false},
	{id : 1, name: "W",student: true, sanitary : false},
	{id : 1, name: "WEEEEEEEEEEEEEEEE",student: true, sanitary : false},
	{id : 3, name: "DELORY",student: true, sanitary : true}];

	var nameSearched = document.getElementById('input_name');
	nameSearched.value = nameSearched.value.toUpperCase();
	var resultList = document.getElementById('result_list');
	resultList.innerHTML = "";
	var resutltsFound = false;

	if(nameSearched.value) {
		for (var i = 0; i < idArray.length; i++) {
			if (idArray[i].name.includes(nameSearched.value)) {
				resultList.innerHTML += "<div id=\"result_spot" + i + "\" class=\"flex-box-horizontal flex-justify-content-start\" style=\"height:15px;margin:5px\">";
				
				var resultSpot = document.getElementById('result_spot'+ i);
				var checked = "";
				
				resultSpot.innerHTML += "<div style=\"flex-grow:4\">" + idArray[i].name + ": </div>"

				if (idArray[i].student) {
					checked = "checked";
				}
				else {
					checked= "";
				}
				resultSpot.innerHTML += "<div><input type=\"checkbox\" name=\"student\" value=\"student\"" + checked +" disabled/><label for=\"student\">Carte étudiante</label></div>"
	
				if (idArray[i].sanitary) {
					checked = "checked";
				}
				else {
					checked = "";
				}

				resultSpot.innerHTML += "<div><input type=\"checkbox\" name=\"student\" value=\"student\"" + checked + " disabled/><label for=\"student\">Pass vaccinal</label></div>"
				resultSpot.innerHTML+="</div>";
	
				resutltsFound = true;
			}
		}
	
		if(!resutltsFound) {
			resultList.innerHTML = "<p style=\"text-align:center;font-style: italic\">Aucun résultat trouvé.</p>";
		}
	}
}

