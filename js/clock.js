const clock = document.querySelector("h2#clock");

let lastSecond;

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function firstClock() {
    const date = new Date();
    second = date.getSeconds();
    if (lastSecond === undefined) {
        lastSecond = second;
    } else if (second !== lastSecond) {
        clearInterval();
        getClock();
        setInterval(getClock, 1000);
    }
}

getClock();

setInterval(firstClock, 1);
