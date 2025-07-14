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
      const redTileCount = Math.floor(Math.random() * (maxRedTiles - minRedTiles + 1)) + minRedTiles;
      const tileTypes = [];

      for (let i = 0; i < redTileCount; i++) tileTypes.push("red");
      while (tileTypes.length < tileCount) tileTypes.push(Math.random() < 0.5 ? "green" : "blue");

      // Shuffle
      for (let i = tileTypes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileTypes[i], tileTypes[j]] = [tileTypes[j], tileTypes[i]];
      }

      const row = document.createElement("div");
      row.classList.add("tile-row");

      tileTypes.forEach(type => {
        const tile = document.createElement("div");
        tile.classList.add("tile", type);
        row.appendChild(tile);
      });

      board.insertBefore(row, board.firstChild); // Add to top (visually top = newer)
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
          redAudio.volume = 1.0;
          redAudio.play();
        }
      }


      function startGameLoop() {
        gameInterval = setInterval(() => {
          generateTileRow();

          const rows = board.querySelectorAll(".tile-row");
          const maxRows = 5;

          if (rows.length > maxRows) {
            const lastRow = rows[rows.length - 1];

            const missed = Array.from(lastRow.children).some(tile =>
              (tile.classList.contains("green") || tile.classList.contains("blue")) &&
              !tile.classList.contains("clicked")
            );

            if (missed) {
              redAudio.volume = 1.0;
              redAudio.play();
              console.log("Missed a green or blue tile!");
            }

            lastRow.remove();
          }

          if (gameSpeed > 700) {
            gameSpeed -= 100;
            clearInterval(gameInterval);
            startGameLoop();
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
