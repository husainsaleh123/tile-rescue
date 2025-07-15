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

     const triviaQuestions = {
          easy: [
            {
              question: "How many continents are there?",
              options: ["5", "6", "7", "8"],
              correct: "7"
            },
            {
              question: "What is the capital of Spain?",
              options: ["Sevilla", "Madrid", "Barcelona", "Bilbao"],
              correct: "Madrid"
            },
            {
              question: "What is the name of the longest river in the world?",
              options: ["The Amazon River", "The Nile River", "The Mississippi River", "Yellow River"],
              correct: "The Nile River"
            },
            {
              question: "In what year did Bahrain gain independence?",
              options: ["1970", "1971", "1973", "1975"],
              correct: "1971"
            },
            {
              question: "What is the name of the first American president?",
              options: ["Abraham Lincoln", "John Kennedy", "Richard Nexon", "George Washington"],
              correct: "George Washington"
            },
            {
              question: "As of 2025, what's the world population (approx)?",
              options: ["6 Billion", "7 Billion", "8 Billion", "9 Billion"],
              correct: "8B"
            },
            {
              question: "Who won the 2022 FIFA World Cup?",
              options: ["France", "Argentina", "Brazil", "Germany"],
              correct: "Argentina"
            },
            {
              question: "Which American state has been bought from the Soviet Union?",
              options: ["Montana", "Hawaii", "North Dakota", "Alaska"],
              correct: "Alaska"
            },
          ],
          medium: [
            {
              question: "What year was Instagram found?",
              options: ["2010", "2011", "2012", "2013"],
              correct: "2010"
            },
          ],
          hard: [
            {
              question: "What is the square root of 289?",
              options: ["17", "18", "19", "20"],
              correct: "17"
            },
            {
              question: "Which country hosted the first world cup in 1930?",
              options: ["Italy", "Brazil", "Uruguay", "France"],
              correct: "Uruguay"
            },
             {
              question: "Which social media platform was the first to reach 1B registered users?",
              options: ["YouTube", "Instagram", "Facebook", "Twitter"],
              correct: "Facebook"
            },
            {
              question: "Which particle has no charge but significant mass?",
              options: ["Proton", "Neutron", "Electron", "Positron"],
              correct: "Neutron"
            },
            {
              question: "Which country was the first to adapt Bitcoin as a legal tender?",
              options: ["Iran", "Mexico", "El Salvador", "Switzerland"],
              correct: "El Salvador"
            }
            
          ]
      };

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
      const triviaModal = document.querySelector(".trivia-modal");


//<--------------------------Variables---------------------------->

      let currentStep = 0
      let countdownValue = 3;
      let score = 0;
      let lives = 3;
      let gameSpeed = 2000; // the speed in milliseconds (2000 ms = 2s)
      let gameInterval = null;
      let triviaTimer; 
      let gamePaused = false;
      let currentTrivia = null;
      let triviaAlreadyHandled = false;
      function startTrivia(difficulty = 'easy') {
      const modal = document.getElementById("triviaModal");
      const timerSpan = document.getElementById("timerValue");
      const closeBtn = document.querySelector(".close-trivia");

      const timeLimits = {
        easy: 10,
        medium: 20,
        hard: 30
      };

      let secondsLeft = timeLimits[difficulty] || 10;

      if (modal) {
        modal.style.display = "flex";
      }

      // Disable the close button initially
      closeBtn.style.pointerEvents = "none";
      closeBtn.style.opacity = 0.5;

      timerSpan.textContent = secondsLeft;

      triviaTimer = setInterval(() => {
        secondsLeft--;
        timerSpan.textContent = secondsLeft;

        if (secondsLeft <= 0) {
          clearInterval(triviaTimer);

          // Enable close button again
          closeBtn.style.pointerEvents = "auto";
          closeBtn.style.opacity = 1;

          // (Optional) You can automatically resume the game here:
          // closeTriviaModal();
        }
      }, 1000);
    }


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

      if (gamePaused) return;

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
          redAudio.volume = 1.0;
          redAudio.play();
          showRandomTrivia(); // ← add this

          //pauses the game
          clearInterval(gameInterval)

          // Show trivia modal
          startTrivia("easy")

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
        if (gamePaused || lives == 0) return;

        clearInterval(gameInterval); // Always clear before starting new
        gameInterval = setInterval(() => {
          if (gamePaused || lives == 0) return;

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
              redAudio.play();
              showRandomTrivia(); // ✅ TRIGGER CORRECTLY
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


      function showRandomTrivia() {
          gamePaused = true;

          clearInterval(gameInterval);
          clearInterval(triviaTimer);

          const difficulties = ["easy", "medium", "hard"];
          const chosenDiff = difficulties[Math.floor(Math.random() * difficulties.length)];
          const questionSet = triviaQuestions[chosenDiff];
          const questionObj = questionSet[Math.floor(Math.random() * questionSet.length)];

          if (!questionObj || !questionObj.question || !questionObj.options || !questionObj.correct) {
            console.error("Invalid trivia question loaded");
            return;
          }

          // Store current question
          currentTrivia = questionObj;

          let timeLimit = chosenDiff === "medium" ? 20 : chosenDiff === "hard" ? 30 : 10;
          let timeLeft = timeLimit;

          const modal = document.getElementById("triviaModal");
          modal.style.display = "flex";

          document.getElementById("triviaQuestion").textContent = `[${chosenDiff.toUpperCase()}] ${questionObj.question}`;
          const optionsContainer = document.getElementById("triviaOptions");
          optionsContainer.innerHTML = "";

          const timerDisplay = document.getElementById("timerValue");
          timerDisplay.textContent = timeLeft;

          // Create options
          questionObj.options.forEach(option => {
            const btn = document.createElement("button");
            btn.classList.add("option");
            btn.textContent = option;

            btn.onclick = () => {
              clearInterval(triviaTimer);

              // Disable all buttons
              const allButtons = document.querySelectorAll(".option");
              allButtons.forEach(b => b.disabled = true);

              if (option === questionObj.correct) {
                btn.style.backgroundColor = "#4CAF50"; // Green for correct
                score += chosenDiff === "easy" ? 15 : chosenDiff === "medium" ? 30 : 45;
                scoreDisplay.textContent = `Score: ${score}`;
              } else {
                btn.style.backgroundColor = "#f44336"; // Red for wrong
                lives--;
                updateLivesUI();

                // Highlight correct one too
                allButtons.forEach(b => {
                  if (b.textContent === questionObj.correct) {
                    b.style.backgroundColor = "#4CAF50";
                  }
                });
              }

              // Enable close button
              const closeBtn = document.querySelector(".close-trivia");
              closeBtn.style.pointerEvents = "auto";
              closeBtn.style.opacity = "1";

              setTimeout(resumeGameAfterTrivia, 1000);
            };

            optionsContainer.appendChild(btn);
          });

          // Disable close button initially
          const closeBtn = document.querySelector(".close-trivia");
          closeBtn.style.pointerEvents = "none";
          closeBtn.style.opacity = "0.4";

          // Timer countdown
          triviaTimer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
              clearInterval(triviaTimer);
              timerDisplay.textContent = "0";

              // Highlight correct answer
              const allButtons = document.querySelectorAll(".option");
              allButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.textContent === questionObj.correct) {
                  btn.style.backgroundColor = "#4CAF50"; // Correct answer
                }
              });

              // Deduct a life
              lives--;
              updateLivesUI();

              // Enable close button
              closeBtn.style.pointerEvents = "auto";
              closeBtn.style.opacity = "1";

              // Resume after short delay
              setTimeout(resumeGameAfterTrivia, 1500);
            }
          }, 1000);
        }


      function updateLivesUI() {
          const livesDisplay = document.getElementById("lives");
          const hearts = "❤️".repeat(lives);
          livesDisplay.textContent = `Lives: ${hearts}`;
      }

      function closeTriviaModal() {
          resumeGameAfterTrivia()
      }


      function resumeGameAfterTrivia() {
            const modal = document.getElementById("triviaModal");
            modal.style.display = "none";

            // Clear trivia timer
            clearInterval(triviaTimer);
            triviaTimer = null;
            currentTrivia = null;

            // Clear modal content
            document.getElementById("triviaQuestion").textContent = "";
            document.getElementById("triviaOptions").innerHTML = "";
            document.getElementById("timerValue").textContent = "0";

            // Reset close button
            const closeBtn = document.querySelector(".close-trivia");
            closeBtn.style.pointerEvents = "auto";
            closeBtn.style.opacity = "1";

            // Show a mini countdown before resuming
            let resumeCounter = 3;
            const counterOverlay = document.getElementById("counter");
            const countdownNum = document.getElementById("countdownNum");
            counterOverlay.style.display = "flex";
            countdownNum.textContent = resumeCounter;

            const countdownInterval = setInterval(() => {
              resumeCounter--;
              countdownNum.textContent = resumeCounter;
              if (resumeCounter <= 0) {
                clearInterval(countdownInterval);
                counterOverlay.style.display = "none";

                // ✅ Clear the board
                board.innerHTML = "";

                // ✅ Resume game
                gamePaused = false;
                startGameLoop();
              }
            }, 1000);
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
