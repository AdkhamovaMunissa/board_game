let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0, guestCount = 0;

function home_1() {
    homeCount++;
    homeScore.textContent = homeCount; 
}

function home_2() {
    homeCount += 2;
    homeScore.textContent = homeCount; 
}

function home_3() {
    homeCount += 3;
    homeScore.textContent = homeCount; 
}

function guest_1() {
    guestCount++;
    guestScore.textContent = guestCount; 
}

function guest_2() {
    guestCount += 2;
    guestScore.textContent = guestCount; 
}

function guest_3() {
    guestCount += 3;
    guestScore.textContent = guestCount; 
}

function newGame(){
    guestCount = 0;
    guestScore.textContent = guestCount;
    homeCount = 0;
    homeScore.textContent = homeCount;  
}

