// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://api.openweathermap.org/data/2.5/weather?lat=13.0878&lon=80.2785&appid=ea4267f3a9d81e9f16a3375bb247c149';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
console.log("Coordinates-latitude:", data.coord.lat, "Coordinates-longitude:", data.coord.lon);
console.log("City:",data.name);
console.log("Country:",data.sys.country);
console.log("Weather:",data.weather[0].main,",",data.weather[0].description );
}