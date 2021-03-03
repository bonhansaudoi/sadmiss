(function () {
  document.getElementById("demo").innerHTML = "Hello! I called myself";
})();

<h1 onclick="this.innerHTML = 'Ooops!'">
document.getElementById("p2").style.color = "blue";

var x = document.querySelectorAll("p.intro");
var x = document.getElementsByClassName("intro");

document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
<script>
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}
</script>
https://www.w3schools.com/howto/howto_js_add_class.asp
document.getElementById(id).attribute = new value
document.getElementById(id).style.property = new style
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.remove("mystyle");
}
element.classList.add("mystyle");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

<script>
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
</script>

// hide-show
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

 how to find out if an element is hidden with JavaScript.

