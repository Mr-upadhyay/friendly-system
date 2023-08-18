var place = document.querySelector("#place").value;
var currentTime = new Date();
var timeZoneOffset = currentTime.getTimezoneOffset();
var timeInPlace = new Date(currentTime.getTime() + (timeZoneOffset * 60 * 60 * 1000));
document.querySelector("#time").innerHTML = timeInPlace.toLocaleTimeString();
