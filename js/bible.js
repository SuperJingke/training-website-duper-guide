
//camp.html

var acc = document.getElementsByClassName("judges");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function showVideo(){
  var x = document.getElementById("myVideo"); 
  if (x.style.display === "none"){
    x.style.display = "block";
  } else {
    x.style.display ="none";
  }
}