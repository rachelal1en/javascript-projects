function init() {
    let rocketX = 0;
    let rocketY = 0;
    const takeoff = document.getElementById("takeoff");
    const background = document.getElementById("shuttleBackground");
    const status = document.getElementById("flightStatus");
    const height = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");


    takeoff.addEventListener('click', event => {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            status.innerHTML = 'Shuttle in flight.'
            background.style.backgroundColor = 'blue';
            height.innerHTML = parseInt(height.innerHTML) + 10000;
        }
        else {}
    });

    land.addEventListener('click', event => {
        if(confirm("The shuttle is landing. Landing gear engaged.")) {
            status.innerHTML = 'The shuttle has landed.'
            background.style.backgroundColor = 'green';
            height.innerHTML = parseInt(height.innerHTML - height.innerHTML);
            rocket.style.bottom = 0 + 'px';
        }
        else {}
    })

    abort.addEventListener('click', event => {
        if(confirm("Confirm that you want to abort the mission.")) {
            status.innerHTML = 'Mission aborted.'
            background.style.backgroundColor = 'green';
            height.innerHTML = parseInt(height.innerHTML - height.innerHTML);
        }
        else {}
    })

    down.addEventListener('click', event => {
        rocketY -= 10;
        rocket.style.marginBottom = rocketY + 'px';
        height.innerHTML = parseInt(height.innerHTML) - 10000;
    })

    up.addEventListener('click', event => {
        rocketY += 10;
        rocket.style.marginBottom= rocketY + 'px';
        height.innerHTML = parseInt(height.innerHTML) + 10000;

    })

    left.addEventListener('click', event => {
        rocketX -= 10;
        rocket.style.marginLeft = rocketX + 'px';
    })
    
    right.addEventListener('click', event => {
        rocketX += 10;
        rocket.style.marginLeft = rocketX + 'px';
    })
    

}

window.addEventListener("load", init);
