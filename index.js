//drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


function openMouth()
{
  var mouthImagePath = "/images/cat-face-mouth-open.png";
  var $cat = document.getElementById('cat');
  $cat.src = mouthImagePath;
}

function closeMouth()
{
  var mouthImagePath = "/images/cat-face-mouth-closed.png";
  var $cat = document.getElementById('cat');
  $cat.src = mouthImagePath;
}

var randomNumber1 = Math.floor(Math.random() * 5) + 1; //random number between 1-5

var randomImageSource1 = "images/food" + randomNumber1 + ".png"; //images/food1.png - food5.png

var isMouthOpen = false;
