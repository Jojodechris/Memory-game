const gameContainer = document.getElementById("game");

let clickCount = 0;
let flippedCard1 = null;
let flippedCard2 = null;
let flipcount =0;
let score=0;

const scoreElement = document.getElementById('score');
const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
    function startGame(e) {
      e.startButton
      alert("Game started!");
    }

const reStartButton = document.getElementById("reStartButton");
    reStartButton.addEventListener('click',reStartGame);
    function reStartGame(e){
      e.reStartGame
      alert('Game restarted');
      location.reload();
    }


    // how would we setup 
const COLORS = [
  "red",//0
  "blue",//1
  "green",//2
  "orange",//3
  "purple",//4
  "red",//5
  "blue",//6
  "green",//7
  "orange",//8
  "purple"//9
];

//10


// didn't write his own shuffle function
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  debugger
  let counter = array.length; //10

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    //0

    //10
    // Decrease counter by 1
    counter--;

    //9

    // And swap the last element with it
    let temp = array[counter]; //array[9] ---> 'purple'
    array[counter] = array[index]; // get a random value from the array .  array[9] = 
    array[index] = temp;
  }

  return array;
}

// ['green', 'blue', 'red']
// temp = 'red'
//['green', 'blue', 'green']
// ['red', 'blue', 'green']

let shuffledColors = shuffle(COLORS);


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    var newDiv = document.createElement("div");
    // create an image for the card 
    var img = document.createElement('img');

    // // Set the source (src) attribute of the image
    // img.src = "https://thumbs.dreamstime.com/b/playing-card-back-side-isolated-white-clipping-path-included-playing-card-back-side-isolated-white-172500899.jpg";
    
    // // Set additional attributes if needed
    // img.alt = 'card';
    // img.width = 100;
    // img.height = 100;
    
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.appendChild(img);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // Function to handle button click event
  
  console.log(clickCount);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);

  }
}

// try and abstract out methods here to make the code more readable
function handleCardClick(event) {
  let cardClick = event.target;
  
// Increment the click count

// Disable the third button if more than two buttons are clicked
    if (clickCount < 2) {
      cardClick.style.backgroundColor = cardClick.className;
      clickCount++;
      if (clickCount===1){
        flippedCard1=cardClick;
      }
      if (clickCount===2){
        flippedCard2=cardClick;
        if(flippedCard1.className !== flippedCard2.className){
          setTimeout(function(){
            flippedCard1.style.backgroundColor = '';
            flippedCard2.style.backgroundColor = '';
            flippedCard1 = null;
            flippedCard2 = null;
            clickCount = 0;
          }, 1000)
        } else if(flippedCard1.className===flippedCard2.className) {
          debugger;
         resetCards();
         scoreElement.textContent = `Score: ${score}`;
         // this alert is not working, why?
            if (isGameOver(flipcount)) {
              // store the score
              alert("Game over !!, you won!!")
            }
        }
        
      }
    }
}

function resetCards() {
  flippedCard1 = null;
  flippedCard2 = null;
  clickCount = 0;
  flipcount++;
  score++;
}

function isGameOver(flipCount) {
  return flipCount === 5;
}


// when the DOM loads
createDivsForColors(shuffledColors);


const userPreferences = {
  bestScore : '10',
  lowScore: "5"
}

// we didn't implement setting the score if it is the top into local storage
localStorage.setItem('pref',userPreferences)


let globalVariable = 'yes';