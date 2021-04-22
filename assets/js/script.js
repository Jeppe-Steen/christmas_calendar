const startOfChristmas = new Date("December 1 2020 00:00:00");

let daysElem = document.querySelector(".daysElem");
let hoursElem = document.querySelector(".hoursElem");
let minutesElem = document.querySelector(".minutesElem");
let secondsElem = document.querySelector(".secondsElem");

function updateCounter() {
    let thisDate = new Date();

    let diff = startOfChristmas - thisDate;
    let remaningDays = Math.floor(diff / 1000 / 60 / 60 / 24);
    let remaningHours = Math.floor(diff / 1000 / 60 / 60) % 24;
    let remaningMinutes = Math.floor(diff / 1000 / 60) % 60;
    let remaningSeconds = Math.floor(diff / 1000) % 60;
    
    daysElem.innerHTML = remaningDays;
    hoursElem.innerHTML = remaningHours;
    minutesElem.innerHTML = remaningMinutes;
    secondsElem.innerHTML = remaningSeconds;

    if(remaningDays <= 0 && remaningHours <= 0 && remaningMinutes <= 0 && remaningSeconds <= 0) {
        document.querySelector(".countdown-container").style.display = "none";
        document.querySelector(".gate-container").style.display = "grid";
    };
};

setInterval(updateCounter, 1000);

let thisDate = new Date();
let thisDay = thisDate.getDate();
let thisMonth = parseInt(thisDate.getMonth()) + 1;

let gateArr = [
    {date: 11},
    {date: 6},
    {date: 18},
    {date: 10},
    {date: 16},
    {date: 15},
    {date: 1},
    {date: 20},
    {date: 5},
    {date: 23},
    {date: 9},
    {date: 12},
    {date: 14},
    {date: 2},
    {date: 24},
    {date: 8},
    {date: 22},
    {date: 21},
    {date: 7},
    {date: 17},
    {date: 3},
    {date: 19},
    {date: 13},
    {date: 4}
];

let gates, acchtml = '';

for (gates of gateArr) {
    acchtml += `<article class="gate">${gates.date}</article>`
};

document.querySelector(".gate-container").innerHTML = acchtml;

let gateArray = [... document.querySelectorAll(".gate")];

gateArray.forEach(element => {
    element.addEventListener("click", (e) => {
        if (thisMonth == 12) {
            if (element.innerHTML <= thisDay) {
                element.classList.add("open");
            }
        }
    })
});