// your code here
const name= document.getElementById("name").value;
const year= document.getElementById("year").value;
const button= document.getElementById("button");
button.addEventListener('click', (e) =>{
	e.preventDefault();
	console.log(name, year);
	document.getElementById("url").innerText= `https://localhost:8080/?name=${name}&year=${year}`
})