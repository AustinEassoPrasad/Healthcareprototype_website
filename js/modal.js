// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function myFunction() {
  location.replace("index.html");
}
 
function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    if (date.getHours() > 12 ) {
      date.setHours(date.getHours() - 12);
    }
  document.getElementById("tada").innerHTML =   date.getDate() +" th at " + date.getHours() + " : " + date.getMinutes();
}