
function tick(){
    let time = new Date().toLocaleTimeString();

    document.getElementById("time").innerHTML = time;
}

setInterval(tick, 1000);