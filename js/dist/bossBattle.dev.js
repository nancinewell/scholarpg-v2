"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// * * * * * * * * * * * * * * * * * * * GLOBALS * * * * * * * * * * * * * * * * * * *
var bossHealth, team, teamMembers, questionSet, players, currentQuestion; // * * * * * * * * * * * * * * * * * * * TEAM INFO * * * * * * * * * * * * * * * * * * *

geographyTeam = {
  name: "Blue Dragons",
  members: [["Ashlyn", "bard-female-4"], ["Adolyn", "archer-female-4"], ["Eliana", "healer-female-6"]],
  shield: "5"
};
literatureTeam = {
  name: "Bunnicorns",
  members: [["Ephraim", "healer-male-10"], ["Eleanor", "mage-female-6"], ["Bob", "warrior-male-5"]],
  shield: "3"
};
gameschoolTeam = {
  name: "Mystics",
  members: [["Ethan", "archer-male-3"], ["Emma", "bard-female-12"], ["Gwen", "warrior-female-11"]],
  shield: "2"
}; // * * * * * * * * * * * * * * * * * * * QUESTION SETS * * * * * * * * * * * * * * * * * * *

geo1l3 = {
  qa: [["What iscartography?", "the study of making maps"], ["What is geography?", "a description of the earth and the people who live on it"], ["What is mathematical geography?", "a description of the earth and space using numbers and measurements"], ["What is the earth's orbit?", "the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."], ["What is the earth's axis?", "a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."]]
};
geo1l5 = {
  qa: [["What iscartography?", "the study of making maps"], ["What is geography?", "a description of the earth and the people who live on it"], ["What is mathematical geography?", "a description of the earth and space using numbers and measurements"], ["What is the earth's orbit?", "the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."], ["What is the earth's axis?", "a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."], ["What is shape (in geographical terms)?", "the outline of an area or figure"], ["What is form?", "an object that is not flat but has height, width, and depth (three-dimensional)"], ["What is a relief map?", "a map or model that includes three-dimensional (3D) forms"]]
};
geo1l6 = {
  qa: [["What iscartography?", "the study of making maps"], ["What is geography?", "a description of the earth and the people who live on it"], ["What is mathematical geography?", "a description of the earth and space using numbers and measurements"], ["What is the earth's orbit?", "the path the earth takes around the sun; it takes 1 year or 365 days to orbit the sun once."], ["What is the earth's axis?", "a central, straight imaginary line about which the earth rotates. One rotation equals 1 day or 24 hours."], ["What is shape (in geographical terms)?", "the outline of an area or figure"], ["What is form?", "an object that is not flat but has height, width, and depth (three-dimensional)"], ["What is a relief map?", "a map or model that includes three-dimensional (3D) forms"], ["What is a cloud?", "a grouping of tiny water drops and/or ice crystals that float in the air"], ["What is cirrus?", "thin, wispy clouds found high in the sky"], ["What is cirrocumulus?", "small, rounded white puffs; clouds that form long rows in the sky"][("What is cumulus?", "big, white puffy clouds")][("What is cumulonimbus?", "large, gray cumulus clouds that are heavy with water")][("What is stratus?", "low, flat clouds that bring rain or snow")]]
};
geo1l7 = {
  qa: []
};
geo1l8 = {
  qa: []
};
geo1l10 = {
  qa: []
};
geo1l11 = {
  qa: []
};
geo1l12 = {
  qa: []
};
geo1l13 = {
  qa: []
};
geo1l14 = {
  qa: []
};
geo1l15 = {
  qa: []
};
geo1l16 = {
  qa: []
}; // * * * * * * * * * * * * * * * * * * * MONSTERS * * * * * * * * * * * * * * * * * * *

var monsterNames = ["Stormborn", "Thornscale Serpent", "Darkbloom", "Stonefury", "Frostfury", "Frostbite", "Nightmaw", "Ashenclaw Gargoyle", "Stone Hound", "Nightfury", "Winter Rose", "Frosthowl", "Shy Basilisk", "Stonewhisper", "Shadowthorn Basilisk", "Rainbow Lizard Dog", "Rainbow Frostfire", "Winter Ember", "Poisonlife", "Nightshade", "Spiny Poison", "Venomstalker", "Bloodmoon", "Cotton Candy Nightmare", "Flameshard", "Flame Blossom", "Flame Lizard", "Ironclaw", "Poison", "Ironfang Kraken", "Baby Sea Monster", "Fire Spirit", "Shy Emberthorne", "Emberclaw", "Nightstalkers", "Stormrider", "Thunderstrike", "Cotton Candy Beetle Blossom", "Sunburn", "Monster of the Seas", "Birdie Death", "Nightfall", "Shadowtalon", "Nightreaver"]; // * * * * * * * * * * * * * * * * * * * START BATTLE * * * * * * * * * * * * * * * * * * *

function startBattle() {
  team = document.getElementById("select-team").value;
  var questions = document.getElementById("select-questions").value;
  var chooseDiv = document.getElementById("choose-div");
  var displayDiv = document.getElementById("display-div"); //set questionSet

  switch (questions) {
    case "geo1":
      questionSet = _toConsumableArray(geo1.qa);
      break;

    case "lit1":
      questionSet = _toConsumableArray(lit1.qa);
      break;

    case "lit2":
      questionSet = _toConsumableArray(lit2.qa);
      break;
  } //hide choices


  chooseDiv.classList.add('display-none'); //create array of monsters

  var monsters = [];

  for (var i = 0; i < 43; i++) {
    monsters[i] = i + 1;
  } //choose a monster to battle


  var monster = Math.floor(Math.random() * monsters.length); //create and display monster image

  var monsterImg = appendElement("img", "boss-battle-img", "monster-img");
  monsterImg.src = "img/creatures/monsters/" + (monster + 1) + ".png";
  displayDiv.appendChild(monsterImg); //add VS

  var vsText = appendElement("h1", "boss-battle-text", "vs", "VS");
  displayDiv.appendChild(vsText); //identify team

  var teamSource;

  switch (team) {
    case geographyTeam.name:
      teamSource = geographyTeam.shield;
      teamMembers = geographyTeam.members;
      break;

    case literatureTeam.name:
      teamSource = literatureTeam.shield;
      teamMembers = literatureTeam.members;
      break;

    case gameschoolTeam.name:
      teamSource = gameschoolTeam.shield;
      teamMembers = gameschoolTeam.members;
      break;
  } //display team crest


  var teamCrest = appendElement("img", "boss-battle-img", "player-img");
  teamCrest.src = "img/shields/" + teamSource + ".png";
  displayDiv.appendChild(teamCrest); // display monster name

  var monsterName = appendElement("h1", "boss-battle-name", "monster-name", monsterNames[monster]);
  displayDiv.appendChild(monsterName); //add START button

  var beginBtn = appendElement("button", "submit-btn", "game-start-btn", "Begin!");
  beginBtn.setAttribute("onclick", "beginGame()");
  displayDiv.appendChild(beginBtn); //display team name

  var teamName = appendElement("h1", "boss-battle-name", "team-name", team);
  displayDiv.appendChild(teamName);
} // * * * * * * * * * * * * * * * * * * * APPEND ELEMENT * * * * * * * * * * * * * * * * * * *


function appendElement(element, elClass, elId, text) {
  var newElement = document.createElement(element);

  if (elClass) {
    newElement.classList.add(elClass);
  }

  if (elId) {
    newElement.id = elId;
  }

  if (text) {
    newElement.innerHTML = text;
  }

  return newElement;
} // * * * * * * * * * * * * * * * * * * * BEGIN GAME * * * * * * * * * * * * * * * * * * *


function beginGame() {
  //set bossHealth and players
  bossHealth = Math.floor(questionSet.length * .75);
  resetPlayers(); //remove start button

  var btn = document.getElementById("game-start-btn");
  btn.remove(); //display boss health

  var bossHealthDisplay = appendElement("p", "", "boss-health", bossHealth);
  var displayDiv = document.getElementById("display-div");
  displayDiv.appendChild(bossHealthDisplay);
  runGame();
}

function runGame() {
  //reset players if needed
  if (players.length === 0) {
    resetPlayers();
  } //get a random player - if none left, reset players.


  var randomNumber = Math.floor(Math.random() * players.length);
  var randomPlayer = players[randomNumber]; //display avatar and name

  var playerImg = document.getElementById("player-img");
  playerImg.src = "img/avatars/" + randomPlayer[1] + ".png";
  var playerName = document.getElementById("team-name");
  playerName.innerHTML = randomPlayer[0]; //remove player from players

  players.splice(randomNumber, 1); //Ask a question

  askQuestion();
}

function askQuestion() {
  var questionBtns = document.getElementById("question-btns");
  var questionText = document.getElementById("question-div-text");
  var max = questionSet.length;
  var random = Math.floor(Math.random() * max);
  var question = questionSet[random][0];
  currentQuestion = [random]; //display the random question

  questionText.innerHTML = question; //display button to see the answer

  var checkBtn = appendElement("button", "submit-btn", "checkBtn", "Check Answer");
  checkBtn.setAttribute("onclick", "displayAnswer()");
  questionBtns.appendChild(checkBtn);
}

function displayAnswer() {
  //display answer
  var questionText = document.getElementById("question-div-text");
  questionText.innerHTML = questionSet[currentQuestion][1]; //remove check button

  var checkBtn = document.getElementById("checkBtn");
  checkBtn.remove(); //add buttons to choose correct or incorrect

  var btnDiv = document.getElementById("question-btns");
  var correctBtn = appendElement("button", "submit-btn", "correct-btn", "Correct");
  var incorrectBtn = appendElement("button", "submit-btn", "incorrect-btn", "Incorrect"); //button.onclick= "inCorrect(answer)"

  correctBtn.setAttribute("onclick", "inCorrect('correct')");
  incorrectBtn.setAttribute("onclick", "inCorrect('incorrect')"); //append buttons

  btnDiv.appendChild(correctBtn);
  btnDiv.appendChild(incorrectBtn); //remove question from questionSet

  questionSet.splice(currentQuestion, 1);
}

function inCorrect(answer) {
  //remove buttons
  var questionBtns = document.getElementById("question-btns");
  questionBtns.innerHTML = ""; //remove explosion-animation class

  var explosionMonster = document.getElementById("explosion-monster");
  explosionMonster.classList.remove("explosion-animation"); // let explosionPlayer = document.getElementById("explosion-player");
  // explosionPlayer.classList.remove("explosion-animation"); 
  //if correction then...

  if (answer === "correct") {
    //5% chance of critical hit, 5% chance of miss
    var random = Math.random();
    var crit, miss;
    var damage = 1;

    if (random >= 0.95) {
      damage = 2;
      crit = true;
    } else if (random <= 0.05) {
      damage = 0;
      miss = true;
    } //remove boss health and display it


    bossHealth -= damage;
    var bossHealthDisplay = document.getElementById("boss-health");
    bossHealthDisplay.innerHTML = bossHealth; //display hit with an animation

    explosionMonster.classList.add("explosion-animation"); //if (crit === true){display crit animation}
  } else {} //if no more questions, end game


  if (questionSet.length === 0 || bossHealth === 0) {
    endGame();
  } else {
    runGame();
  }
}

function resetPlayers() {
  players = _toConsumableArray(teamMembers);
}

function endGame() {
  var displayDiv = document.getElementById("display-div");
  var questionDiv = document.getElementById("question-div");
  questionDiv.innerHTML = "";
  var vs = document.getElementById("vs");
  vs.remove();
  var bossHeathDisplay = document.getElementById("boss-health");
  bossHeathDisplay.remove();
  var monsterImg = document.getElementById("monster-img");
  var monsterName = document.getElementById("monster-name");
  var playerImg = document.getElementById("player-img");
  var playerName = document.getElementById("team-name");
  var explosionMonster = document.getElementById("explosion-monster");
  var explosionPlayer = document.getElementById("explosion-player");
  playerImg.remove();
  playerName.remove();
  explosionMonster.remove();
  explosionPlayer.remove();

  if (bossHealth > 0) {
    //display sorry banner
    var sorry = appendElement("h1", "", "end-game-banner", "Sorry! Better Luck Next Time!");
    displayDiv.appendChild(sorry);
  } else {
    //display congrats banner
    var contrats = appendElement("h1", "", "end-game-banner", "Congratulations! You did it!");
    displayDiv.appendChild(contrats); //show the team by removing monster and adding all team members

    monsterImg.remove();
    monsterName.remove();
    resetPlayers();
    players.forEach(function (player) {
      var winnerDiv = appendElement("div", "winner-div");
      var name = appendElement("h1", "boss-battle-name", "", player[0]);
      winnerDiv.appendChild(name);
      var img = appendElement("img", "boss-battle-img");
      img.src = "img/avatars/" + player[1] + ".png";
      winnerDiv.appendChild(img);
      displayDiv.appendChild(winnerDiv);
    });
  }
}