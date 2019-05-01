var names = document.querySelectorAll("h3 > span.pink-title");

var smeker = "<img src='http://www.myiconfinder.com/uploads/iconsets/16-16-f51dd0fb87971cb31fe84079a3d35dc4-emoji.png'>"

for (let el of names) {
  el.innerHTML += smeker;
}


/* NOTES
- Imena na leaderboardu:
var names = document.querySelectorAll("h3 > span.pink-title > a");
for (let el of names) {
  console.log(el.innerHTML.trim());
}

- Ime na profilu:
var name = document.getElementById("bimbo-name").innerHTML;

- Reaction na profilu:
var reaction = document.getElementsByClassName("bimbo-like-disabled");
var reactionId = reaction[0].id;
ILI
var reaction = document.getElementsByClassName("bimbo-like-disabled")[0].id;
*/
