const date = new Date(2021, 5, 29);
const day = document.getElementById("day");
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const playTimer = () => {
    let now = Math.round((date - Date.now()) / 1000);
    let days = Math.floor(now / 60 / 60 / 24);
    let hours = Math.floor((now - days * 24 * 60 * 60) / 60 / 60);
    let minutes = Math.floor((now - days * 24 * 60 * 60 - hours * 60 * 60) / 60);
    let seconds = now - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
}
let timerID = setInterval(playTimer,1000)