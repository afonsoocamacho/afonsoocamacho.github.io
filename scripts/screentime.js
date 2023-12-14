$(document).ready(function() {
  // Make an AJAX request to the server
  $.ajax({
    url: 'yourserver.com/api/screentime', // Replace with the actual endpoint to fetch screen time data
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      // Update the HTML element with the screen time data
      $('#screenTimeData').text('Your screen time: ' + response.screenTime + ' minutes');
    },
    error: function() {
      $('#screenTimeData').text('Failed to retrieve screen time data.');
    }
  });
});
//loader page
document.addEventListener("DOMContentLoaded", function () {
  // Show the loader initially
  document.getElementById("preloader").style.opacity = 1;

  // Add a small delay before hiding the loader
  setTimeout(function() {
      // Hide the loader by setting its opacity to 0
      document.getElementById("preloader").style.opacity = 0;

      // Add the "loaded" class to the body when the content is loaded
      document.body.classList.add("loaded");
      document.getElementById("preloader").style.display= 'none';
  }, 1000); // Set the delay in milliseconds (e.g., 2000ms = 2 seconds)
});
