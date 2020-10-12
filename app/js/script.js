let countDown = new Date('December 31, 2020 00:00:00').getTime();
let now = new Date().getTime();
let distance = (countDown - now) / 1000;
console.log(distance);
let x = setInterval(function() {
    let now_ = new Date().getTime();
    let distance_ = (countDown - now_);
    distance = (countDown - now);
    percent = (distance_ / distance * 100);
    seconds = Math.floor(distance_ / 1000 % 60);
    minutes = Math.floor(distance_ / (1000 * 60) % 60);
    hours = Math.floor(distance_ / (1000 * 60 * 60) % 60);
    days = Math.floor(distance_ / (1000 * 60 * 60 * 24) % 100);


    document.getElementById('day').innerText = days;
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
}, 1000);

function increaseValue() {
    var value = parseInt(document.getElementById('theInput').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('theInput').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('theInput').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('theInput').value = value;
}