// Javascript for quiz

window.onload = function() {

    var points = 0;

    document.getElementById("test").onclick = function() {test()};

    function test() {
        window.location.href="results.html";
    }

    document.getElementById("onePoint").onclick = function() {addOnePoint()};

    function addOnePoint() {
        points++;
        console.log("Hi");
    }

    document.getElementById("totalPoints").onclick = function() {showPoints()};

    function showPoints() {
        document.getElementById("totalPoints").innerHTML = "Not ???";
    }
};
