// * * * * * * * * * * * * * * * * * * * GLOBALS * * * * * * * * * * * * * * * * * * *
let bossHealth, team, teamMembers, questionSet, players, currentQuestion; 

// * * * * * * * * * * * * * * * * * * * TEAM INFO * * * * * * * * * * * * * * * * * * *
geographyTeam={
    name: "Blue Dragons",
    members: [  ["Ashlyn", "bard-female-4"],
                ["Adolyn", "archer-female-4"],
                ["Eliana", "healer-female-6"]
            ],
    shield: "5"
}
literatureTeam={
    name: "Bunnicorns",
    members: [  ["Ephraim", "healer-male-10"],
                ["Eleanor", "mage-female-6"],
                ["Bob", "warrior-male-5"]
            ],
    shield: "3"
}
gameschoolTeam={
    name: "Mystics",
    members: [  ["Ethan", "archer-male-3"],
                ["Emma", "bard-female-12"],
                ["Gwen", "warrior-female-11"]
            ],
    shield: "2"
}
// * * * * * * * * * * * * * * * * * * * QUESTION SETS * * * * * * * * * * * * * * * * * * *
geo1={
    qa: [
        ["What is the Lithosphere?","the portion of the earth that is land"],
        ["What is a Valley?","lowland between hills or mountains"],
        ["What is a Canyon?","a deep, narrow valley with steep walls"],
        ["What is Erosion?","the wearing away of the earth's soil and rock from rain, snow, ice, and wind"]/*,
        ["What is Topography?","land distinguished by its elevation"],
        ["What is a Mountain?","high, rocky land, usually with steep sides and a pointed or rounded top, higher than a hill"],
        ["What is a Mountain Range?","a group of mountains bordered by lowlands"],
        ["What is a Volcano?","a mountain formed of rock or ash thrown up from inside the earth"],
        ["What is a Plateau?","a region that is mostly high and flat"],
        ["What is a Hill?","a raised part of the earth's surface, with sloping slides; smaller than a mountain"],
        ["What is a Plain?","broad, level land"],
        ["What is a Valley?","lowland between hills or mountains"],
        ["What is a Basin?","a region drained by a river; land largely enclosed by higher land"],
        ["What is a Canyon?","a deep, narrow valley with steep walls"],
        ["What is a Cliff?","a high, steep wall of rock"],
        ["What is a Rift?","a long, steep valley formed by the dropping or slipping of a block of the earth's crust during an earthquake"]*/
    ]
}
lit1={}
lit2={}
// * * * * * * * * * * * * * * * * * * * MONSTERS * * * * * * * * * * * * * * * * * * *
const monsterNames=["Stormborn",
"Thornscale Serpent",
"Darkbloom",
"Stonefury",
"Frostfury",
"Frostbite",
"Nightmaw",
"Ashenclaw Gargoyle",
"Stone Hound",
"Nightfury",
"Winter Rose",
"Frosthowl",
"Shy Basilisk",
"Stonewhisper",
"Shadowthorn Basilisk",
"Rainbow Lizard Dog",
"Rainbow Frostfire",
"Winter Ember",
"Poisonlife",
"Nightshade",
"Spiny Poison",
"Venomstalker",
"Bloodmoon",
"Cotton Candy Nightmare",
"Flameshard",
"Flame Blossom",
"Flame Lizard",
"Ironclaw",
"Poison",
"Ironfang Kraken",
"Baby Sea Monster",
"Fire Spirit",
"Shy Emberthorne",
"Emberclaw",
"Nightstalkers",
"Stormrider",
"Thunderstrike",
"Cotton Candy Beetle Blossom",
"Sunburn",
"Monster of the Seas",
"Birdie Death",
"Nightfall",
"Shadowtalon",
"Nightreaver"
]
// * * * * * * * * * * * * * * * * * * * START BATTLE * * * * * * * * * * * * * * * * * * *
function startBattle() {
    team = document.getElementById("select-team").value;
    let questions = document.getElementById("select-questions").value;
    let chooseDiv = document.getElementById("choose-div");
    let displayDiv = document.getElementById("display-div");
    //set questionSet
    switch(questions){
        case "geo1":
            questionSet = [...geo1.qa];
            break;
        case "lit1":
            questionSet = [...lit1.qa];
            break;
        case "lit2":
            questionSet = [...lit2.qa];
            break;
    }
    
    //hide choices
    chooseDiv.classList.add('display-none');

    //create array of monsters
    let monsters = [];
    for (let i = 0; i<43; i++){
        monsters[i] = i+1;
    }
    
    //choose a monster to battle
    let monster = Math.floor(Math.random() * monsters.length);
    
    //create and display monster image
    let monsterImg = appendElement("img","boss-battle-img", "monster-img");
    monsterImg.src= "img/creatures/monsters/"+(monster+1)+".png";
    displayDiv.appendChild(monsterImg);

    //add VS
    let vsText = appendElement("h1", "boss-battle-text", "vs", "VS")
    displayDiv.appendChild(vsText);

    //identify team
    let teamSource;
    switch(team){
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
    }
    
    //display team crest
    let teamCrest = appendElement("img", "boss-battle-img", "player-img");
    teamCrest.src = "img/shields/"+teamSource+".png";
    displayDiv.appendChild(teamCrest);
    
    // display monster name
    let monsterName = appendElement("h1", "boss-battle-name", "monster-name", monsterNames[monster]);
    displayDiv.appendChild(monsterName);
    
    //add START button
        let beginBtn = appendElement("button", "submit-btn", "game-start-btn", "Begin!");
    beginBtn.setAttribute("onclick", "beginGame()");
    displayDiv.appendChild(beginBtn);

    //display team name
    let teamName = appendElement("h1", "boss-battle-name", "team-name", team);
    displayDiv.appendChild(teamName);
}
// * * * * * * * * * * * * * * * * * * * APPEND ELEMENT * * * * * * * * * * * * * * * * * * *
function appendElement(element, elClass, elId, text){
    let newElement = document.createElement(element);
    if(elClass){
        newElement.classList.add(elClass);
    }
    if(elId){
        newElement.id = elId;
    }
    if(text){
        newElement.innerHTML = text;
    }
    
    return newElement
}
// * * * * * * * * * * * * * * * * * * * BEGIN GAME * * * * * * * * * * * * * * * * * * *
function beginGame(){
    //set bossHealth and players
    bossHealth = Math.floor(questionSet.length * .75);
    resetPlayers()

    //remove start button
    let btn = document.getElementById("game-start-btn");
    btn.remove();

    //display boss health
    let bossHealthDisplay = appendElement("p", "", "boss-health", bossHealth);
    let displayDiv = document.getElementById("display-div");
    displayDiv.appendChild(bossHealthDisplay);

    runGame();
}

function runGame(){
    //reset players if needed
    if(players.length===0){
        resetPlayers();
    }
    
    //get a random player - if none left, reset players.
    let randomNumber = Math.floor(Math.random() * players.length);
    let randomPlayer = players[randomNumber];

    //display avatar and name
    let playerImg = document.getElementById("player-img");
    playerImg.src = "img/avatars/"+randomPlayer[1]+".png";

    let playerName = document.getElementById("team-name");
    playerName.innerHTML = randomPlayer[0];

    //remove player from players
    players.splice(randomNumber, 1)
    
    //Ask a question
    askQuestion();
}

function askQuestion(){
    let questionBtns = document.getElementById("question-btns");
    let questionText = document.getElementById("question-div-text")
    let max = questionSet.length;
    let random = Math.floor(Math.random() * max);
    let question = questionSet[random][0]
    currentQuestion = [random]
    //display the random question
    questionText.innerHTML = question;

    //display button to see the answer
    let checkBtn = appendElement("button", "submit-btn", "checkBtn", "Check Answer");
    checkBtn.setAttribute("onclick", "displayAnswer()");
    questionBtns.appendChild(checkBtn);
    
}

function displayAnswer(){
    //display answer
    let questionText = document.getElementById("question-div-text");
    questionText.innerHTML = questionSet[currentQuestion][1]

    //remove check button
    let checkBtn = document.getElementById("checkBtn");
    checkBtn.remove();

    //add buttons to choose correct or incorrect
    let btnDiv = document.getElementById("question-btns");
    let correctBtn = appendElement("button", "submit-btn", "correct-btn", "Correct");
    let incorrectBtn = appendElement("button", "submit-btn", "incorrect-btn", "Incorrect");
    
    //button.onclick= "inCorrect(answer)"
    correctBtn.setAttribute("onclick", "inCorrect('correct')");
    incorrectBtn.setAttribute("onclick", "inCorrect('incorrect')");
    
    //append buttons
    btnDiv.appendChild(correctBtn);
    btnDiv.appendChild(incorrectBtn);
    //remove question from questionSet
    questionSet.splice(currentQuestion, 1);
}

function inCorrect(answer){
    //remove buttons
    let questionBtns = document.getElementById("question-btns");
    questionBtns.innerHTML = "";

    //remove explosion-animation class
    let explosionMonster = document.getElementById("explosion-monster");
    explosionMonster.classList.remove("explosion-animation");
    // let explosionPlayer = document.getElementById("explosion-player");
    // explosionPlayer.classList.remove("explosion-animation"); 
    
    //if correction then...
    if(answer === "correct"){
        //5% chance of critical hit, 5% chance of miss
        let random = Math.random();
        let crit, miss;
        let damage = 1;
        if(random >= 0.95){
            damage = 2;
            crit = true;
        } else if (random <= 0.05){
            damage = 0;
            miss = true;
        }
        //remove boss health and display it
        bossHealth -= damage;
        let bossHealthDisplay= document.getElementById("boss-health");
        bossHealthDisplay.innerHTML = bossHealth;

        //display hit with an animation
        explosionMonster.classList.add("explosion-animation");
        
        //if (crit === true){display crit animation}
    } else {
        
    }
        //if no more questions, end game
            if (questionSet.length === 0 || bossHealth === 0){
                endGame();
            } else {
                runGame()
            }
}

function resetPlayers(){
    players = [...teamMembers];
}

function endGame(){
    let displayDiv = document.getElementById("display-div");
    let questionDiv = document.getElementById("question-div");
    questionDiv.innerHTML = ""

    let vs = document.getElementById("vs");
    vs.remove()

    let bossHeathDisplay = document.getElementById("boss-health");
    bossHeathDisplay.remove()

    let monsterImg = document.getElementById("monster-img");
    let monsterName = document.getElementById("monster-name");
    let playerImg = document.getElementById("player-img");
    let playerName = document.getElementById("team-name");
    let explosionMonster = document.getElementById("explosion-monster");
    let explosionPlayer = document.getElementById("explosion-player");

    playerImg.remove();
    playerName.remove();
    explosionMonster.remove();
    explosionPlayer.remove();

    if(bossHealth > 0){
        
        //display sorry banner
        let sorry = appendElement("h1", "", "end-game-banner", "Sorry! Better Luck Next Time!")
        displayDiv.appendChild(sorry);
        
    } else {
        //display congrats banner
        let contrats = appendElement("h1", "", "end-game-banner", "Congratulations! You did it!")
        displayDiv.appendChild(contrats);

        //show the team by removing monster and adding all team members
        monsterImg.remove();
        monsterName.remove();

        resetPlayers();

        players.forEach(player => {
            let winnerDiv = appendElement("div", "winner-div")

            let name = appendElement("h1", "boss-battle-name", "", player[0])
            winnerDiv.appendChild(name)
            let img = appendElement("img", "boss-battle-img")
            img.src="img/avatars/"+player[1]+".png";
            winnerDiv.appendChild(img);

            displayDiv.appendChild(winnerDiv);
        });
        

    }
}