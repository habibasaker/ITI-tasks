let myVideo = document.getElementById("myvideo");
let playBtn = document.getElementById("playbtn");
let pauseBtn = document.getElementById("pausebtn");
let skip5Btn = document.getElementById("skip5btn");
let skip10Btn = document.getElementById("skip10btn");
let minus5Btn = document.getElementById("minus5btn");
let minus10Btn = document.getElementById("minus10btn")
let muteBtn = document.getElementById("mutebtn");
let speedList = document.getElementById("speedlist");
let volumeBar = document.getElementById("volumebar");
// my time now
let currentTimeSpan = document.getElementById("currentTime");

//progress bar 
let progressBar = document.getElementById("progressBar");

// eventistener
playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);

skip5Btn.addEventListener("click", skip5);
skip10Btn.addEventListener("click", skip10);

minus5Btn.addEventListener("click", minus5);
minus10Btn.addEventListener("click", minus10);

muteBtn.addEventListener("click", toggleSound);// toogle 3shan el 23kes

speedList.addEventListener("change", changeSpeed);

volumeBar.addEventListener("input", changeVolume);

//functions
function play() {
    myVideo.play();
}

function pause() {
    myVideo.pause();
}

function skip5() {
    myVideo.currentTime += 5;
}

function skip10() {
    myVideo.currentTime += 10;
}

function minus5() {
    myVideo.currentTime -= 5;
}

function minus10() {
    myVideo.currentTime -= 10;
}
//toogle 3shan el 7aga w 3aksaha
function toggleSound() {
    myVideo.muted = !myVideo.muted;

    if (myVideo.muted) {
        muteBtn.value = "unmute";
    } else {
        muteBtn.value = "mute";
    }
}

function changeSpeed() {
    myVideo.playbackRate = speedList.value;
}

function changeVolume() {
    myVideo.volume = volumeBar.value;
}
//progress
myVideo.addEventListener("loadedmetadata", function () {
    progressBar.max = myVideo.duration;
});

progressBar.addEventListener("input", function () {
    myVideo.currentTime = progressBar.value;
});

//b3mel foloor 3shan mesh 3owza a3ref kam femto sania
myVideo.addEventListener("timeupdate", function () {

    progressBar.value =myVideo.currentTime;

});
myVideo.addEventListener("timeupdate", function () {

    currentTimeSpan.innerHTML =
        Math.floor(myVideo.currentTime);
});
/* or you can do it 
setInterval(function () {
    currentTimeSpan.innerHTML =
        Math.floor(myVideo.currentTime);
}, 1000);
 */
