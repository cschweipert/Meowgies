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

/*
  openMouth()
  Toggles the cat element's image source to "opened mouth" image.
*/
function openMouth()
{
  var mouthImagePath = "/images/cat-face-mouth-open.png";
  var $cat = document.getElementById('cat');
  $cat.src = mouthImagePath;
}

/*
  closeMouth()
  Toggles the cat element's image source to "closed mouth" image.
*/
function closeMouth()
{
  var mouthImagePath = "/images/cat-face-mouth-closed.png";
  var $cat = document.getElementById('cat');
  $cat.src = mouthImagePath;
}

/*
  getRandomFood()
  Returns a random food item that we can use to trigger our Meowgies!
*/
function getRandomFood()
{
  var randomNumber = Math.floor(Math.random() * 5) + 1; //random number between 1-5

  var randomImageSource = "images/food" + randomNumber + ".png"; //images/food1.png - food5.png

  return randomImageSource;
}

/*
This is the food that, when dropped into the cat's mouth,
will trigger the meowgies to appear.

Right now it is null, but in the code-init block, it is
set to a random food!
*/
meowgieTriggerFood = getRandomFood();

console.log(meowgieTriggerFood);

