var votes = document.getElementsByClassName("votes");
var voteBtns = document.getElementsByClassName("b-button-special-submit");
var skipBtn = document.getElementsByClassName("b-compact")[1];
const debateRow = document.querySelectorAll(".b-entry a.b-fill-link");


function getLastChar(str){
	if(str.length){
		return str[str.length-1]
	}
	return "0";
}

// Clicks the first battle from the list 
if (debateRow.length > 0){
  debateRow[0].click();
};

// Takes the string "Votes: X" and extracts the number (X)
var leftvote = getLastChar(votes[0].innerText);
var rightvote = getLastChar(votes[1].innerText);

// Votes for the player with more votes, random if it's a tie, skips if the fight is over (5:5) or vote buttons are disabled (players blocked)
if ((leftvote == 5 || rightvote == 5) || (voteBtns[0].classList.contains("disabled") || voteBtns[1].classList.contains("disabled"))){
    skipBtn.click();
} else if (leftvote === rightvote) {
    voteBtns[Math.round(Math.random())].click();
} else if (leftvote > rightvote){
    voteBtns[0].click();
} else {
    voteBtns[1].click();
};