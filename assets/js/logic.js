document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".inline").style.visibility = "visible";
    } else {
        document.querySelector(".inline").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

// variables to reference DOM elements
var switchTab = document.querySelectorAll(".tab");
var currentTab = document.querySelector(".start");

function relocateTab(oldTab, newTab) {
    var cleared = document.querySelector(`#${newTab}`).classList.contains('cleared');
    document.querySelector(`#${oldTab}`).className = "hide cleared";
    document.querySelector(`#${newTab}`).className = "start";
    currentTab = document.querySelector(`#${newTab}`);
    if (cleared) {
        // do nothing
    } else {
        myFunction();
    }
}

for(i = 0; i < switchTab.length; i++){
    switchTab[i].addEventListener('click', function (e) {
        // retrieve desired tab destination
        var hrefVal = e.currentTarget.getAttribute("href");
        var newTab = hrefVal.substr(1, hrefVal.length - 1);
        // retrieve current tab destination
        var oldTab = currentTab.getAttribute("id");
        // Relocate to desired tab
        console.log(`${oldTab}, ${newTab}`);
        clearTimeout(timerId);
        relocateTab(oldTab, newTab);
    })
};