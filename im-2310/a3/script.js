/*Variables*/
var bubble1 = document.getElementById("bubble-1");
var bubble2 = document.getElementById("bubble-2");
var bubble3 = document.getElementById("bubble-3");
var bubble4 = document.getElementById("bubble-4");
var bubble5 = document.getElementById("bubble-5");
var bubble6 = document.getElementById("bubble-6");
var bubble7 = document.getElementById("bubble-7");
var videoElement = document.getElementById("videoElement")

/*These are all the variables I am using for my code. In here all all the bubbles and the video Element which is playing in the background*/

/* Bubble Floating*/

var start, previousTimeStamp;
var done = false;
/* These numbers were measure through trial and error, I played with the numbers to see how far the bubble would travel across the screen. These were my end results */
var animationLeftTarget = 3000;
var animationTopTarget = 1000;
var animationRightTarget = 3000;
var animationBottomTarget = 1000;
var animationTotalTime = 50000;
var animationSpeed = animationLeftTarget/animationTotalTime;

function rAFSquare(timestamp){
    if (start === undefined) {
        start = timestamp;
     }
    const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
        const leftCount = Math.min((animationLeftTarget/animationTotalTime) * elapsed, animationLeftTarget);
        const topCount = Math.min((animationTopTarget/animationTotalTime) * elapsed, animationLeftTarget);
        const rightCount = Math.min((animationRightTarget/animationTotalTime) * elapsed, animationRightTarget);
        const bottomCount = Math.min((animationBottomTarget/animationTotalTime) * elapsed, animationRightTarget);
        bubble1.style.top = `${topCount}px`;
        bubble1.style.left = `${leftCount}px`;
        bubble2.style.right = `${rightCount}px`;
        bubble3.style.top = `${topCount}px`;
        bubble4.style.bottom = `${bottomCount}px`;
        bubble4.style.right = `${rightCount}px`;
        bubble5.style.right = `${rightCount}px`;
        bubble5.style.left = `${leftCount}px`;
        bubble6.style.left = `${leftCount}px`;
        bubble6.style.bottom = `${bottomCount}px`;
        bubble7.style.right = `${rightCount}px`;
        bubble7.style.top = `${topCount}px`;
        if (leftCount === animationLeftTarget) done = true;
    }

    if (elapsed < animationTotalTime) { 
        previousTimeStamp = timestamp
        !done && window.requestAnimationFrame(rAFSquare);

    }
}   

window.requestAnimationFrame(rAFSquare);


/*I was suggested to use requestAnimationFrame to make the bubbles float across the page. I followed the video tutorial on how to use this type of code and changed it to fit what i needed, which was 8 floating bubbles. However it was hard to make the floating patterns of bubbles all unique.*/

/*Bubble Popping*/
function play1(){
    var audio = document.getElementById("please");
    audio.play();
}

function play2(){
    var audio = document.getElementById("never");
    audio.play();
}

function play3(){
    var audio = document.getElementById("forget");
    audio.play();
}
function play4(){
    var audio = document.getElementById("that");
    audio.play();
}

function play5(){
    var audio = document.getElementById("you");
    audio.play();
}

function play6(){
    var audio = document.getElementById("are");
    audio.play();
}

function play7(){
    var audio = document.getElementById("loved");
    audio.play();
}


/*These are the different audios that I recorded to use for my code. I decided to make 7 different functions as i thought it was alot easier for me to use in html. Each audio is only a world long.*/

/*Changing Image*/
function changeImage(image){
    image.src= '/images/bubble popping.png';
}

/*This is what allows the bubble to change into the bubble popping image everytime it is clicked. I thought of also adding java script to make it also disappear when it is clicked but i thought that would be quite difficult.*/

/* find the modal */
let modal = document.getElementById("modalDialog");
/* find the button and add an eventlister */
let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});



 