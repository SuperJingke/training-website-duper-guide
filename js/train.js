
var coll = document.getElementsByClassName("collapsible");
var t;

for (t = 0; t < coll.length; t++) {
  coll[t].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// function showVideo(){
//     var x = document.getElementById("collapsible"); 
//     if (x.style.display === "none"){
//       x.style.display = "block";
//     } else {
//       x.style.display ="none";
//     }
//   }