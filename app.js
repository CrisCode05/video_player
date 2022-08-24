const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay)
$pause.addEventListener("click", handlePause)
$backward.addEventListener("click", handleBackward)
$forward.addEventListener("click", handleForkward)

function handlePlay(){
    $video.play()
    $play.hidden = true;
    $pause.hidden = false
}
function handlePause(){
    $pause.hidden = true;
    $play.hidden = false;
    $video.pause()
}

function handleBackward() {
    $video.currentTime -= 10;
}


function handleForkward() {
    $video.currentTime += 10;
}

const $progress = document.querySelector("#progress")

$video.addEventListener("loadedmetadata", handleLoaded)
$video.addEventListener("timeupdate", handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration;
    console.log("ha cargado mi video");
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInput)
function handleInput(){
    $video.currentTime = $progress.value;
}