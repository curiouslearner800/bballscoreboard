

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
let guestScoreBtn = document.getElementById("guest-score-btn-1")
let guestScoreBtn2 = document.getElementById("guest-score-btn-2")
let guestScoreBtn3 = document.getElementById("guest-score-btn-3")

function increaseGuestScoreOne(){
    guestScore +=1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
    guestScore +=2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree (){
    guestScore +=3
    guestScoreEl.textContent = guestScore
}

let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let homeScoreBtn = document.getElementById("home-score-btn-1")
let homeScoreBtn2 = document.getElementbyId("home-score-btn-2")
let homeScoreBtn3 = document.getElementById("home-score-btn-3")

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore +=2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore +=3
    homeScoreEl.textContent = homeScore
}


// fix text for titles for home and guest - done
// add UI for buttons onto the page - done
// fix formatting to be in-line - done


// make functions work by doing increment by +1 to show total count increasing - done
// repeat for +2  - done
// repeat for +3  - done
// do the same for GUEST - done
// add background for home and guest count
// fix font for home and guest - either use image or editable (make editable is preferred) - done
// fix count font
// fix spacing 
// get code review
// write blog post! include videos of figma