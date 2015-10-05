window.onload = function () {

  var name = prompt("What's your name?")
  var color = prompt("What's your favorite color?")
  var catname = prompt("What's your cat's name?")

  document.getElementById('name').innerHTML = name;
  document.getElementById('color').innerHTML = color;
  document.getElementById('catname').innerHTML = catname;

}
