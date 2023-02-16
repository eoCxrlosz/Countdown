let to = new Date('May 26 2023 00:00:00'); //my birthday :P

function update() {
    let from = new Date(),
        diff = to - from;
    if (diff > 0) {
        let days = setTwoDigits(Math.floor(diff / 1000 / 60 / 60 / 24)),
            hours = setTwoDigits(Math.floor(diff / 1000 / 60 / 60) % 24),
            min = setTwoDigits(Math.floor(diff / 1000 / 60) % 60),
            sec = setTwoDigits(Math.floor(diff / 1000) % 60);
        document.querySelector('#days').innerText = days;
        document.querySelector('#hours').innerText = hours;
        document.querySelector('#min').innerText = min;
        document.querySelector('#sec').innerText = sec;
    } else {
        clearInterval(interval);
        document.querySelector('body').classList.add('');
    }
}

let interval = setInterval(update, 1000);

function setTwoDigits(argument) {
    return argument > 9 ? argument : '0' + argument;
}
