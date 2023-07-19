// your code here
let head= document.getElementById("url");
let name= document.getElementById("name");
let year= document.getElementById("year");
let button= document.getElementById("button");

button.addEventListener('click', addEvent);

function addEvent(callback) {
	callback.preventDefault();
	if(name.value == "" && year.value != ""){
		head.innerHTML = `https://localhost:8080/?year=${year.value}`
	}
	else if(name.value != "" && year.value == ""){
		head.innerHTML = `https://localhost:8080/?name=${name.value}`
	}
	else if(name.value== "" && year.value== ""){
		head.innerHTML = `https://localhost:8080/?name=${name.value}&year=${year.value}`
	}
	else {
		head.innerHTML = `https://localhost:8080/`
	}
}