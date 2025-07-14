//<--------------------------Constants---------------------------->

      const instructions = [
          "You have 3 lives in a single game.",
          "Tiles will appear to you row by row, from the top of the grid to the bottom.",
          "You need to select the green and blue tiles, and avoid the red tiles.",
          "The green tiles are worth 20 points, meanwhile the blue tiles are worth 10 points.",
          "The speed of the grid will increase as the round progresses.",
          "If you fail to click the right tiles after the row has left the grid, or click the red tile, you get a chance to answer a random trivia question to save yourself.",
          "Trivia questions have three categories - Easy: 10 seconds (15 points), Medium: 20 seconds (30 points), and Hard: 30 seconds  (45 points).",
          "If you answer 5 trivia questions correctly in a row, you win an extra life.",
          "The speed will reset to its original once you lose a life.",
          "Enjoy the game, take it easy!",
      ];

      const instructionText = document.getElementById("instructionText");
      const stepCounter = document.getElementById("stepCounter");
      const backBtn = document.getElementById("backBtn");
      const nextBtn = document.getElementById("nextBtn");
      const countdownOverlay = document.getElementById("counter");
      const countdownNum = document.getElementById("countdownNum");
      const board = document.getElementById("tileBoard");
      const tileCount = 5;
      const minRedTiles = 3;
      const maxRedTiles = tileCount - 1;
      const scoreDisplay = document.getElementById("score"); 
      const musicToggle = document.getElementById("musicToggle");
      const sfxToggle = document.getElementById("sfxToggle");
      const swipeAudio = new Audio("audio/swipe.mp3");
      const rowHeight = 75; // 60px tile + 15px gap
      const greenAudio = new Audio("audio/green.mp3");
      const redAudio = new Audio("audio/red.mp3");
      const blueAudio = new Audio("audio/blue.mp3")

//<--------------------------Variables---------------------------->

      let currentStep = 0;
      let countdownValue = 3;
      let score = 0;
      let lives = 3;
      let gameSpeed = 2000; // the speed in milliseconds (2000 ms = 2s)
      let gameInterval = null;


//<--------------------------Functions---------------------------->


  function updateInstruction() {
    instructionText.textContent = instructions[currentStep];
    stepCounter.textContent = `${currentStep + 1} / ${instructions.length}`;
    backBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === instructions.length - 1;
  }


  window.openInstructions = function() {
    document.getElementById('instructionsModal').style.display = "flex";
    currentStep = 0;
    updateInstruction(); //This will reset to the first instruction
  };


  window.closeInstructions = function() {
    document.getElementById('instructionsModal').style.display = "none";
  };

  //Countdown logic
  function startCountdown(){
      if (countdownOverlay && countdownNum) {

      countdownNum.textContent = countdownValue;
      const interval = setInterval(() => {
        countdownValue--;
        if (countdownValue > 0) {
          countdownNum.textContent = countdownValue;
        } else {
          clearInterval(interval);
          countdownOverlay.style.display = "none";
          // You can start your game logic here after countdown ends
          startGameLoop();
        }
      }, 1000);
    }
  }


    //The board javascript, inside the game.html page
    function generateTileRow() {
      const redTileCount = Math.floor(Math.random() * (maxRedTiles - minRedTiles + 1)) + minRedTiles; //ensures 3-4 tiles in a row are red
      const tileTypes = [];

      // Generating tile types
      for (let i = 0; i < redTileCount; i++) tileTypes.push("red"); //generates the red tiles
      while (tileTypes.length < tileCount) tileTypes.push(Math.random() < 0.5 ? "green" : "blue"); //generates the green and blue tiles

      // Shuffle the tiles and randomizes their distribution
      for (let i = tileTypes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [tileTypes[i], tileTypes[j]] = [tileTypes[j], tileTypes[i]];
      }

      // Adding the tiles at the top of the grid using prepend
      for (let i = tileTypes.length - 1; i >= 0; i--) {
        const tile = document.createElement("div");
        tile.classList.add("tile", tileTypes[i]);
        board.insertBefore(tile, board.firstChild); // Insert at top
      }

      // Removes the bottom row if the grid gets full with 5 rows
      const maxRows = Math.floor(board.clientHeight / 75); // 75 = tile (60px) + gap (15px)
      const maxTiles = maxRows * tileCount; 
      while (board.children.length > maxTiles) {
        board.removeChild(board.lastChild); //removes the bottom tile ow
      }
    }
    

    //function handleTileClick event that enables the detection of the tiles and updating the score

    function handleTileClick(event){
      const tileDet = event.target;

      //Ensure that the clicked element is a tile and hasn't been clicked from before
      if (!tileDet.classList.contains("tile") || tileDet.classList.contains("clicked")) return;

      tileDet.classList.add("clicked"); //Prevents double scoring

      if (tileDet.classList.contains("blue")){
          score += 10;
          blueAudio.volume = 1.0;
          blueAudio.play();

      }else if (tileDet.classList.contains("green")){
          score += 20;
          greenAudio.volume = 1.0;
          greenAudio.play();
      }else if (tileDet.classList.contains("red")){
          console.log("Red tile clicked - show trivia here.");
          redAudio.volume = 1.0;
          redAudio.play();
          return;
      }
    
      // Update the score on screen
      scoreDisplay.textContent = `Score: ${score}`; 
    }

      function moveTilesUp() {
          const rows = Array.from(board.querySelectorAll(".tile-row"));
          
          rows.forEach(row => {
              const currentTop = parseInt(row.style.top || "0");
              const newTop = currentTop - 50; // Speed per step
              row.style.top = `${newTop}px`;

              if (newTop + row.offsetHeight < 0) {
                  board.removeChild(row); // Remove if it moved off-screen
              }
          });
      }


      function checkMissedTiles(row) {
          const tiles = row.querySelectorAll(".tile");
          const missed = Array.from(tiles).some(tile => {
            return !tile.classList.contains("clicked") && 
                  (tile.classList.contains("green") || tile.classList.contains("blue"));
          });

          if (missed) {
            console.log("Missed correct tile(s) in this row — show trivia or reduce life.");
            // You can call your trivia/question logic here
          }
        }


    function startGameLoop() {
        gameInterval = setInterval(() => {
        const newRow = generateTileRow();
        board.appendChild(newRow);
        moveTilesUp();
              // Optionally increase speed over time
              if (gameSpeed > 700) {
                  gameSpeed -= 100;
                  clearInterval(gameInterval); // Restart with new speed
                  startGameLoop();             // Recursively restart
              }
          }, gameSpeed);
        }




//<--------------------------Event listeners---------------------------->


if (instructionText && stepCounter && backBtn && nextBtn) {
 backBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateInstruction();
      }
    });


nextBtn.addEventListener("click", () => {
    if (currentStep < instructions.length - 1) {
        currentStep++;
        updateInstruction();
      } 
    });

    updateInstruction(); //Initialize on load
  }

//Plays the music toggle
if (musicToggle) {
    musicToggle.addEventListener("click", (evt) => {
    swipeAudio.volume = 1.0
    swipeAudio.play()
  });
}

//Plays the SFX toggle
if (sfxToggle) {
    sfxToggle.addEventListener("click", (evt) => {
    swipeAudio.volume = 1.0
    swipeAudio.play()
  });
}

startCountdown();
board.addEventListener("click", handleTileClick);
