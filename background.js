var broj = 0

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {          
  if (changeInfo.status == 'complete') {
    if (broj > 0)
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {message: "fight"}, function(response) {broj -= 1;});
     });
  }
});



/*chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"leaderboards.js"})
  console.log("pls");
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "fight"});
    console.log("sent fight from bg script!")
   });
});*/
