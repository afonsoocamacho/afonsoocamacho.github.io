function getDateTime() {
  var now     = new Date(); 
  var year    = now.getFullYear();
  var month   = now.getMonth()+1; 
  var day     = now.getDate();
  var hour    = now.getHours();
  var minute  = now.getMinutes();
  var second  = now.getSeconds(); 
  if(month.toString().length == 1) {
       month = '0'+month;
  }
  if(day.toString().length == 1) {
       day = '0'+day;
  }   
  if(hour.toString().length == 1) {
       hour = '0'+hour;
  }
  if(minute.toString().length == 1) {
       minute = '0'+minute;
  }
  if(second.toString().length == 1) {
       second = '0'+second;
  }   
  var dateTime = day+'/'+month+'/'+year+' '+hour+':'+minute+':'+second;   
   return dateTime;
}

// example usage: realtime clock
setInterval(function(){
  currentTime = getDateTime();
  document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

//screentime
 // Check if the start time is already stored in sessionStorage
 var startTime = sessionStorage.getItem("startTime");

 // If start time is not found, set the current time as the start time and store it in sessionStorage
 if (!startTime) {
   startTime = new Date();
   sessionStorage.setItem("startTime", startTime);
 }

 // Update the time since site was opened and time of the day percentage
 function updateTime() {
   // Get the stored start time
   startTime = new Date(sessionStorage.getItem("startTime"));

   // Get the current time
   var now = new Date();

   // Calculate the time difference in seconds
   var timeDiff = (now.getTime() - startTime.getTime()) / 1000;

   // Convert milliseconds to seconds, minutes, and hours
   var seconds = Math.floor(timeDiff % 60);
   var minutes = Math.floor((timeDiff / 60) % 60);
   var hours = Math.floor((timeDiff / (60 * 60)) % 24);

   // Calculate the time percentage of the day
   var totalSecondsInDay = 24 * 60 * 60;
   var timePercentage = (timeDiff / totalSecondsInDay) * 100;

   // Update the HTML elements with the time since site was opened and the time percentage
   document.getElementById("timeSinceOpen").innerHTML = "Time spent on this website: " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
   document.getElementById("timePercentage").innerHTML = "Percentage of the day spent on the website: " + timePercentage.toFixed(2) + "%";
 }

 // Call updateTime function initially
 updateTime();

 // Update the time every second
 setInterval(updateTime, 1000);