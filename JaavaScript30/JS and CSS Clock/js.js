const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

let hours, minutes, seconds, time;
function getTime() {
    time = new Date;
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    console.log(seconds/60*360);

    let secondDeg = seconds * 6 + 90;
    secondHand.style['transform'] = `rotate(${secondDeg}deg)`;
    let minutesDeg = minutes * 6 + 90;
    minuteHand.style['transform'] = `rotate(${minutesDeg}deg)`;
    if(hours > 12) hours -= 12;
    let hoursDeg = hours * 12 + 90;
    hourHand.style['transform'] = `rotate(${hoursDeg}deg)`;
}
setInterval(getTime, 1000)

console.log(time);