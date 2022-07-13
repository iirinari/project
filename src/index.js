let now = new Date();
let currentDayTime = document.querySelector("h3");

let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();

currentDayTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;
function search(event) {
	event.preventDefault();
	let cityInput = document.querySelector("#input-search");
	let cityName = document.querySelector("#cityName");

	cityName.innerHTML = `${cityInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

/*hw5*/
function showTemperature(response) {
	let h2 = document.querySelector("h2");
	let temperature = Math.round(response.data.main.temp);
	h2.innerHTML = `${temperature} °C`;
}

function showCity(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#input-search");
	let h1 = document.querySelector("h1");
	h1.innerHTML = `${searchInput.value}`;
	let apiKey = "5121b4b172caf34974fb364c8a8b7ede";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
	axios.get(`${apiUrl}&app=id${apiKey}`).then(showTemperature);
}

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", showCity);
