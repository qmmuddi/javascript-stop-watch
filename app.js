var hours = document.getElementById("hours")
var minutes = document.getElementById("mins")
var seconds = document.getElementById("sec")

var updated = setInterval(function () {
    var date = new date()
    hours.innerText = Date.getHours()
    minutes.innerText = date.getMinutes()
    seconds.innerText = date.getSeconds()


}, 1000)