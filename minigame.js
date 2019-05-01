var squares = document.querySelectorAll(".front");

for (var i = 0; i < squares.length; i++) {
  squares[i].textContent = game.board.charAt(i);
  // squares[i].style.fontSize = "32px";
  // squares[i].style.textAlign = "center";
  // squares[i].style.padding = "10px";
  // squares[i].style.color = "blue";
};

// Remove duplicate characters in the pairs string
var arr = removeDuplicateCharacters(game.board);

// Go through the array of characters and click on each image that contains the current character
for (let i = 0; i < arr.length; i++){
    $('.front:contains("' + arr[i] + '")').click();
};

// Memory game pairs are stored as a string with pairs of characters

function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    });
};