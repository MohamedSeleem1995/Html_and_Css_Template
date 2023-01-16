// The End Of The Year Date To Countdown To //
let CountDownDate = new Date("Aug 20, 2023 23:59:59").getTime();
// 1000 milliseconds = 1 Second

let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();
   
    // Find Date Difference Between Now and CountDown Date 
    let dateDiff = CountDownDate - dateNow;
    
    // Get  Time Units 
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds  = Math.floor((dateDiff % (1000 * 60)) / 1000);
    
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff <= 0) {
        clearInterval(counter);
    }
}, 1000);

let section = document.querySelector(".skills");
let spanProgress = document.querySelectorAll(".progress span");

let numbers = document.querySelectorAll(".stats .box span.number");
let Section = document.querySelector(".stats");
let started = false; 

window.onscroll = function () {
    // Section Two  Animate Width On Scrolling 
    if (window.scrollY >= section.offsetTop) {
        spanProgress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    // Section Three Increase Numbers On Scrolling 
    if (window.scrollY >= Section.offsetTop) {
        if (!started) {
            numbers.forEach((number) => startCount(number));
        }
        started = true;
    }
}
    function startCount (el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.innerHTML++;
            if (el.innerHTML == goal) {
                clearInterval(count);
            }
        }, 2000 / goal);
    }
    




