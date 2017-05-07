// Javascript for quiz

console.log(window);

var points = 0;

document.getElementById("test").onclick = function() {test()};

function test() {
    window.location.href="results.html";
}

document.getElementById("onePoint").onclick = function() {addOnePoint()};

function addOnePoint() {
    points++;
    console.log(points);
}

document.getElementById("totalPoints").onclick = function() {showPoints()};

function showPoints() {
    document.getElementById("totalPoints").textContent = "Not ???";
}
