let textst = "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>" +
"<p>Browser Language: " + navigator.language + "</p>" +
"<p>Browser Geolocation: " + navigator.geolocation.getCurrentPosition(showPosition) + "</p>" +
"<p>Browser Online: " + navigator.onLine + "</p>" +
"<p>User-agent header: " + navigator.userAgent + "</p>";

document.getElementById("navigation").innerHTML = textst;
console.log(textst)

function showPosition(position) {
    let lat = position.coords.latitute;
    let long = position.coords.longidute;
    console.log(lat, long)
}