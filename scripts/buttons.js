const video = document.getElementById("my-video");
const jumpButtons = document.getElementsByClassName("jump-btn");
let points = 0;

video.addEventListener("timeupdate", function() {
  const currentTime = video.currentTime;
  Array.from(jumpButtons).forEach(function(button) {
    const buttonTime = parseInt(button.dataset.time);
    const pointsToAdd = parseInt(button.dataset.points);

    if(currentTime === buttonTime) {
      video.currentTime = parseInt(button.dataset.jumpTo);
    }

    if (currentTime >= buttonTime) {
      button.style.display = "block";
      video.pause(); // Pause the video when the buttons appear
      if(pointsToAdd){
        points += pointsToAdd;
      }
    } else {
      button.style.display = "none";
    }
  });
});

Array.from(jumpButtons).forEach(function(button) {
  button.addEventListener("click", function() {
    const jumpTime = parseInt(button.dataset.jumpTo);
    video.currentTime = jumpTime;
    button.style.display = "none";
    video.play(); // Resume playing the video when the button is clicked
    if(button.dataset.points){
      points += parseInt(button.dataset.points);
    }
  });
});

video.addEventListener("ended", function() {
  alert("Total Points: " + points);
});                                