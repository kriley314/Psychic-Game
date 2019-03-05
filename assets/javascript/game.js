//
// Javascript file to drive the Psychic Game
//

var GUESSESALLOWED = 9;
var lettersToChoose = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var nWins = 0;
var nLosses = 0;
var nGuesses = 0;

var targetLetter;
var userText;
var aLettersGuessed = [];

var scrnWins = document.getElementById( "Wins" );
var scrnLosses = document.getElementById( "Losses" );
var scrnGuessesLeft = document.getElementById( "GuessesLeft" );
var scrnLettersGuessed = document.getElementById( "GuessesSoFar" );

function isLetter( userChar ) {
  return userChar.length && ( userChar.match( /[a-z]/i ));
}

function resetForNewGame() {
   nGuesses = 0;
   targetLetter = lettersToChoose[ Math.floor( Math.random() * lettersToChoose.length ) ];
   aLettersGuessed = [];
}

function updateScreenFields() {
  scrnWins.textContent = nWins;
  scrnLosses.textContent = nLosses;
  scrnGuessesLeft.textContent = GUESSESALLOWED - nGuesses;
  scrnLettersGuessed.textContent = aLettersGuessed.toString();
}

resetForNewGame();
updateScreenFields();

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function( event ) {
  userText = event.key;

  aLettersGuessed[ nGuesses++ ] = userText;
  updateScreenFields();
  console.log( "userText: " + userText + " targetLetter: " + targetLetter + " nGuesses: " + nGuesses );

  if ( userText === targetLetter ) {
    nWins++;
    updateScreenFields();
    resetForNewGame();
    updateScreenFields();
  } else {

    // And.. Just to check on things..
    if ( !isLetter( userText )) {
      alert( "Please only enter letters!!  That does count as a guess!!" );
    }

    if ( nGuesses === GUESSESALLOWED ) {
        nLosses++;
        resetForNewGame();
    }

    updateScreenFields();
  }
}
