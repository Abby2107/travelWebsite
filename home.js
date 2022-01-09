
function mouse() {
    var signup = document.getElementById("signup");
    var logged = document.getElementById("login1");
    if ((logged.style.color = "black") && (logged.style.backgroundColor = "transparent")) {
        logged.style.color = "white";
        logged.style.backgroundColor = "black";
        signup.style.color = "black";
        signup.style.backgroundColor = "transparent";
    }
    else {
        logged.style.color = "black";
        logged.style.backgroundColor = "transparent";
        signup.style.color = "white";
        signup.style.backgroundColor = "black";
    }

}



function mouseE() {
    var signup = document.getElementById("signup");
    var logged = document.getElementById("login1");
    if ((logged.style.color = "white") && (logged.style.backgroundColor = "black")) {
        logged.style.color = "Black";
        logged.style.backgroundColor = "transparent";
        signup.style.color = "white";
        signup.style.backgroundColor = "black";
    }
    else {
        logged.style.color = "white";
        logged.style.backgroundColor = "black";
        signup.style.color = "black";
        signup.style.backgroundColor = "transparent";
    }
}


function play() {
    var playVideo = document.getElementById("playVideo");
    var videoDisplay = document.getElementById("video");
    var autoplay = document.getElementById("autoplay");
    // alert("Video Playing");
    if ((videoDisplay.style.display != "block") && (playVideo.innerHTML = "Play Video")) {
        videoDisplay.style.display = "block";
        playVideo.innerHTML = "Hide Video" + " " + '<i class="fa fa-ban" aria-hidden="true"></i>';
        autoplay.play();
    }
    // else if((videoDisplay.style.display = "block") && (playVideo.innerHTML = "Hide Video")) {
    //     videoDisplay.style.display = "none";
    //     playVideo.innerHTML = "Play video";
    // }
    else{
        videoDisplay.style.display = "none";
        playVideo.innerHTML = "Play video" + " " +'<i class="fa fa-play-circle" aria-hidden="true"></i>';
        autoplay.pause();
    }
}



function explore(){
    var exit = document.getElementById("exit");
    var block = document.getElementById("block");
    if(block.style.display != "block"){
        block.style.display = "block";
    }
    else{
        block.style.display = "none";
        exit.style.display = "none";
    }
    // alert("N number of time")
}
function exitCard(){
    var exit = document.getElementById("exit");
    var block = document.getElementById("block");
    block.style.display = "none";
}

