const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

let is24HourFormat = true;

const clock = setInterval(
    function time(){
        const date_now = new Date();
        let hr = date_now.getHours();
        let min = date_now.getMinutes();
        let sec = date_now.getSeconds();

        if (!is24HourFormat) {
            hr = hr % 12 || 12; // Convert to 12-hour format
        }

        hr = hr.toString().padStart(2, "0");
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");
        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;
    },
500
);

function set24HourFormat() {
    is24HourFormat = true;
}

function set12HourFormat() {
    is24HourFormat = false;
}