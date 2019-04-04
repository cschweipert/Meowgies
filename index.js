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
  var $food = document.getElementById(data); // I prepend the variable with a '$' so that it's easier to see that it is a DOM element (special).
  ev.target.appendChild($food);
  var foodName = $food.id.replace('drag', 'food'); // Ok, this isn't glamorous, but it works! All it does is get the 'ID' name from the $food DOM element and replace the word 'drag' with 'food'.

  if (isFoodTrigger(foodName)) {
    var score = 0;

    var $meowgies = document.getElementsByClassName("meowgies");

    for (var i = 0; i < $meowgies.length; i++) {

      var $meowgie = $meowgies[i];

      $meowgie.style.top = (Math.floor(Math.random() * 99) + 1) + "%";

      $meowgie.style.left = (Math.floor(Math.random() * 99) + 1) + "%";

      $meowgie.addEventListener("click", function() {
        this.style.display = "none";
        score = score + 1;
        document.getElementById("score").value = score;

        if (score == $meowgies.length) {
          alert("you win!");
        }
      });
    }
  } else {
    document.getElementsByClassName("meowgies").style.visibility = "hidden"; //trying to make meowgies disappaer when not triggered - not working
  }
}

/*
  openMouth()
  Toggles the cat element's image source to "opened mouth" image.
*/
function openMouth() {
  var mouthImagePath = "./images/cat-face-mouth-open.png";
  var $cat = document.getElementById('cat');
  $cat.src = mouthImagePath;
}

/*
  closeMouth()
  Toggles the cat element's image source to "closed mouth" image.
*/
function closeMouth() {
  var mouthImagePath = "./images/cat-face-mouth-closed.png";
  var $cat = document.getElementById('cat');
  $cat.src = mouthImagePath;
}

/*
  getRandomFood()
  Returns a random food item that we can use to trigger our Meowgies!
*/
function getRandomFood() {
  var randomNumber = Math.floor(Math.random() * 5) + 1; //random number between 1-5
  var randomFood = "food" + randomNumber; //food1
  return randomFood;
}

/*
  isFoodTrigger()
  Returns true/false depending on if the food passed in
  via parameter matches the meowgieTriggerFood variable.
*/
function isFoodTrigger(food) {
  if (food === meowgieTriggerFood) {
    return true;
  } else {
    return false;
  }
}

/*
This is the food that, when dropped into the cat's mouth,
will trigger the meowgies to appear.

Right now it is null, but in the code-init block, it is
set to a random food!
*/
meowgieTriggerFood = getRandomFood();
