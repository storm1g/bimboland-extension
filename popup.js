/*
const gameBtn = document.getElementById("game");
const voteBtn = document.getElementById("vote");

/*gameBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "runMinigames"});
  });
}); */
var bg = chrome.extension.getBackgroundPage();

function popup(msg) {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, {"message": msg});
 });
}

document.addEventListener("DOMContentLoaded", function() {

// Minigame button
  document.getElementById("game").addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "game"});
     });
  });
// Fight (Vote) button
  document.getElementById("fight").addEventListener("click", function(){
    bg.broj = Number(document.getElementById("broj").value) - 1;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "fight"});
     });
  });
});

