var wordtoguessEl = document.getElementById('word-to-guess')
var previouswordEl = document.getElementById('previous-word')
var incorrectlettersEl = document.getElementById('incorrect-letters')
var remainingguessesEl = document.getElementById('remaining-guesses')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

var correct = 0
var incorrect = 0

var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];

var correctword = [];

var game = {
  pickWord() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    correctword.length = randomWord.length;
    correctword.fill('_');
    wordtoguessEl.innerHTML = correctword.join(' ');
    this.chosenWord = randomWord;
  },

  validateEntry(key) {
    if (
    this.chosenWord.indexOf(key) > -1 || 
    this.chosenWord.indexOf(key.toLowerCase()) > -1
    );
  }
}

game.pickWord();

document.onkeyup = function(e){
  console.log(e.key) 
}

