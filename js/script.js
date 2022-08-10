function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dot = document.getElementById("dot");
  var more2Text = document.getElementById("more2");
  var btnText = document.getElementById("Btn");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Show more";
    more2Text.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Show less";
    more2Text.style.display = "inline";
  }
}