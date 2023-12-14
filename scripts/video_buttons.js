//snap div to top of the website
function scrollToDiv() {
    const snapDiv = document.getElementById("video");
    snapDiv.scrollIntoView({behavior: "smooth"});
    //makes the play button disapear when touch
    // var playButton = document.getElementById("play-btn");

    // if (playButton.style.display === "none") {
    //   playButton.style.display = "block";
    // } else {
    //   playButton.style.display = "none";
    // }
  }

  // makes the video start and pause ----------------------
  // var videoPlayer = document.getElementById('video-player');
  // var playButton = document.getElementById('play-btn');
  // var pauseButton = document.getElementById('pause-button');

  // playButton.addEventListener('click', function() {
  //     videoPlayer.play();
  // });

  // pauseButton.addEventListener('click', function() {
  //     videoPlayer.pause();
  // });