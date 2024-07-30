function init() {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });

    missionAbort.addEventListener("mouseenter", function (event) {
        event.target.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "";
    });

    missionAbort.addEventListener('click', event => {
        if (confirm("Are you sure you want to abort the mission?")) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home';
        } else {
            
        }
    })
    // Put your code for the exercises here.

}

window.addEventListener("load", init);
