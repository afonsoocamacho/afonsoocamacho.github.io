 // Check if the device is a phone or a tablet
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function isTablet() {
    return (navigator.userAgent.toLowerCase().indexOf("tablet") !== -1);
}

// Function to display result in HTML
function displayDeviceType() {
    var resultParagraph = document.getElementById("result");
    var dates = document.getElementById("dates");

    if (isMobileDevice()) {
        if (isTablet()) {
            resultParagraph.textContent = "Rotate the tablet for a better experience";
            dates.style.display = 'none';
        } else {
            resultParagraph.textContent = "Rotate the phone for a better experience";
            dates.style.display = 'none';
        }
    } else {
        resultParagraph.textContent = "Device is neither phone nor tablet";
    }
}

// Call the displayDeviceType function on page load
displayDeviceType();

// fullscreen mobile
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the full-screen button
    const fullscreenButton = document.getElementById("play-btn");

    // Add a click event listener to the button
    fullscreenButton.addEventListener("click", function () {
        // Check if the device is a mobile device (adjust the media query as needed)
        if (window.matchMedia("(max-width: 767px)").matches) {
            // Check if full-screen mode is supported
            if (document.documentElement.requestFullscreen) {
                // Toggle full-screen mode
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    document.documentElement.requestFullscreen();
                }
            }
        }
    });
});