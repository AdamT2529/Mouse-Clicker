let clickCount = 0
// Github Copilot generated code below on adding functionality to the button and text element in the HTML file. It adds an event listener to the button that increments the click count and updates the text content of the text element to display the number of mouse clicks.
document.getElementById("myButton").addEventListener("click", function () {
    clickCount++;
    document.getElementById("myText").textContent = "Mouse Clicks: " + clickCount;
});