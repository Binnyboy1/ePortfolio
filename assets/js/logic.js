// variables to reference DOM elements
var switchTab = document.querySelectorAll(".tab");
var currentTab = document.querySelector(".start");

function relocateTab(oldTab, newTab) {
    document.querySelector(`#${oldTab}`).className = "hide";
    document.querySelector(`#${newTab}`).className = "start";
    currentTab = document.querySelector(`#${newTab}`);
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
        relocateTab(oldTab, newTab);
    })
};