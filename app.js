//<--------------------------Constants---------------------------->

      const instructions = [
          "You have 3 lives in a single game.",
          "Tiles will appear to you row by row, from the top of the grid to the bottom.",
          "You need to select the green and blue tiles, and avoid the red tiles.",
          "The green tiles are worth 20 points, meanwhile the blue tiles are worth 10 points.",
          "The speed of the grid will increase as the round progresses.",
          "If you fail to click the right tiles after the row has left the grid, or click the red tile, you get a chance to answer a random trivia question to save yourself.",
          "Trivia questions have three categories - Easy: 15 seconds (15 points), Medium: 22 seconds (30 points), and Hard: 30 seconds  (45 points).",
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
              question: "What is considered the best source of calcium?",
              options: ["Meat", "Rice", "Milk", "Bread"],
              correct: "Milk"
            },
            {
              question: "What is the name of the longest river in the world?",
              options: ["The Amazon River", "The Nile River", "The Mississippi River", "Yellow River"],
              correct: "The Nile River"
            },
            {
              question: "In what year did Bahrain gain independence from the United Kingdom?",
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
              correct: "8 Billion"
            },
            {
              question: "What food group does rice belong to?",
              options: ["Dairy", "Grains", "Vegetables", "Protein"],
              correct: "Grains"
            },
            {
              question: "Which country won the 2022 FIFA World Cup?",
              options: ["France", "Argentina", "Brazil", "Germany"],
              correct: "Argentina"
            },
            {
              question: "Which American state has been bought from the Soviet Union?",
              options: ["Montana", "Hawaii", "North Dakota", "Alaska"],
              correct: "Alaska"
            },
            {
              question: "What nutrient is mainly found in fish?",
              options: ["Carbohydrate", "Protein", "Fat", "Fiber"],
              correct: "Protein"
            },
            {
              question: "What does the term phobia mean?",
              options: ["A dream disorder", "A memory problem", "An irrational fear", "Severe depression and anxiety"],
              correct: "An irrational fear"
            }, 
          ],
          medium: [
            {
              question: "What year was Instagram found?",
              options: ["2010", "2011", "2012", "2013"],
              correct: "2010"
            },
            {
              question: "What is the economic term for general increase of prices?",
              options: ["Inflation", "Fluctuation", "Taxes", "Recession"],
              correct: "Inflation"
            },
            {
              question: "Which of the following countries has nuclear weapons?",
              options: ["Iran", "North Korea", "Cuba", "Turkey"],
              correct: "North Korea"
            },
            {
              question: "At what year did the Soviet Union collapse?",
              options: ["1988", "1989", "1990", "1991"],
              correct: "1991"
            },
            {
              question: "What empire was ruled by Genghis Khan?",
              options: ["Roman Empire", "Mongol Empire", "Chinese Empire", "Japanese Empire"],
              correct: "Mongol Empire"
            },
            {
              question: "Which continent has the most number of countries?",
              options: ["Asia", "Africa", "Europe", "North America"],
              correct: "Africa"
            },
            {
              question: "Which food is considered high in Vitamin C?",
              options: ["Orange", "Carrot", "Banana", "Tomato"],
              correct: "Orange"
            },         
             {
              question: "Between which two countries does the dead sea lie?",
              options: ["Palestine and Jordan", "Iraq and Jordan", "Syria and Jordan", "Lebanon and Jordan"],
              correct: "Palestine and Jordan"
            },  
            {
              question: "At what year did the Titanic ship sink?",
              options: ["1910", "1912", "1914", "1918"],
              correct: "1912"
            },
            {
              question: "What does the 'Big Five' model describe?",
              options: ["Mental Disorders", "IQ level", "Personality traits", "Memory strength"],
              correct: "Personality traits"
            },   
            {
              question: "What mineral is the most abundant in bananas?",
              options: ["Iron", "Calcium", "Magnesium", "Potassium"],
              correct: "Potassium"
            },    
            {
              question: "What country is the biggest oil exporter?",
              options: ["Kuwait", "Iraq", "Iran", "Saudi Arabia"],
              correct: "Saudi Arabia"
            },
            {
              question: "What is the square root of 289?",
              options: ["17", "18", "19", "20"],
              correct: "17"
            },
            {
              question: "What is Maslow well-known for?",
              options: ["IQ Testing", "MBTI personality test", "Hierachy of Needs", "Commander in World War II"],
              correct: "Hierachy of Needs"
            },
            {
              question: "What is the name of the famous drug-lord who escaped prison and went in hiding for 13 years?",
              options: ["Pablo  Escobar", "Joaquín 'El Chapo' Guzmán", "Arturo Beltran Leyva", "Miguel Gallardo"],
              correct: "Joaquín 'El Chapo' Guzmán"
            },
            {
              question: "What is the main difference between a debit card and a credit card?",
              options: ["Debit cards allow you to borrow money from the bank.", "Credit cards have no spending limit.", "Debit cards use your own money, credit cards allow you to borrow money from the bank.", "None of the above."],
              correct: "Debit cards use your own money, credit cards allow you to borrow money from the bank."
            },
            {
              question: "What organ is responsible for producing insulin?",
              options: ["Pancreas", "Kidney", "Liver", "Large Intestine"],
              correct: "Pancreas"
            },
                        {
              question: "Which social media platform was the first to reach 1 Billion registered users?",
              options: ["YouTube", "Instagram", "Facebook", "Twitter"],
              correct: "Facebook"
            },
            {
              question: "What is gluten found in?",
              options: ["Corn", "Rice", "Wheat", "Mashed potatoes"],
              correct: "Wheat"
            },                  
          ],
          hard: [
            {
              question: "Which country hosted the first world cup in 1930?",
              options: ["Italy", "Brazil", "Uruguay", "France"],
              correct: "Uruguay"
            },
            {
              question: "Which particle has no charge but significant mass?",
              options: ["Proton", "Neutron", "Electron", "Positron"],
              correct: "Neutron"
            },
            {
              question: "Which cooking oil is considered to be healthiest for the heart?",
              options: ["Palm oil", "Butter", "Olive Oil", "Vegetable oil"],
              correct: "Olive Oil"
            },
            {
              question: "Which country was the first to adapt Bitcoin as a legal tender?",
              options: ["Iran", "Mexico", "El Salvador", "Switzerland"],
              correct: "El Salvador"
            },
            {
              question: "What is a main feature of capitalism?",
              options: ["Price Control", "Central Planning", "Equal Distribution", "Private Ownership"],
              correct: "Private Ownership"
            },
            {
              question: "What is a common tool used by banks to control inflation",
              options: ["Taxes", "Interest rates", "Tariffs", "Payable Loans"],
              correct: "Interest rates"
            },
            {
              question: "As of 2025, which nation is ranked as the world's most corrupt country?",
              options: ["South Sudan", "Syria", "Somalia", "Venezuela"],
              correct: "South Sudan"
            },
             {
              question: "As of 2025, what is the world's most populous country?",
              options: ["India", "China", "United States", "Russia"],
              correct: "India"
            },
            {
              question: "What is the storage form of glucose in animals?",
              options: ["Cellulose", "Fructose", "Lactose", "Glycogen"],
              correct: "Glycogen"
            },
            {
              question: "Which African country is the first in history to reach the FIFA World Cup semi-finals?",
              options: ["Ghana", "Nigeria", "Morocco", "Algeria"],
              correct: "Morocco"
            },
            {
              question: "What part of the brain is responsible for emotional responses?",
              options: ["Frontal Lobe", "Amygdala", "Pons", "Pariental Lobe"],
              correct: "Amygdala"
            },
            {
              question: "When it comes to finance, what does liquidity mean?",
              options: ["How much an asset depreciates.", "Ability of a firm to meet it's long-term obligations.", "Profitability of an asset over time.", "How easy an asset can be converted to cash."],
              correct: "How easy an asset can be converted to cash."
            },
            {
              question: "What is the largest Island in the world?",
              options: ["Papua New Guinea", "Greenland", "Madagascar", "Borneo"],
              correct: "Greenland"
            },
            {
              question: "What is gluten found in?",
              options: ["Corn", "Rice", "Wheat", "Mashed potatoes"],
              correct: "Wheat"
            },
          ]
      };

      const usedTrivia = {
            easy: [],
            medium: [],
            hard: []
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
      const backgroundMusic = new Audio("audio/background-music.mp3");
      const swipeAudio = new Audio("audio/swipe.mp3");
      const rowHeight = 75; // 60px tile + 15px gap
      const greenAudio = new Audio("audio/green.mp3");
      const redAudio = new Audio("audio/red.mp3");
      const blueAudio = new Audio("audio/blue.mp3");
      const triviaModal = document.querySelector(".trivia-modal");

//<--------------------------Variables---------------------------->

      let currentStep = 0
      let countdownValue = 3;
      let score = 0;
      let lives = 3;
      let gameInterval = null;
      let triviaTimer; 
      let gamePaused = false;
      let currentTrivia = null;
      let triviaHandler = false;
      let correctStreak = 0;
      let initialGameSpeed = 2400;
      let minGameSpeed = 900;
      let gameSpeedReduction = 50;
      let gameSpeedController = null;
      let startTime = null;
      let timeInterval = null;
    
      
      // Restore toggle states
      let musicEnabled = localStorage.getItem("musicEnabled") === "true";
      let sfxEnabled = localStorage.getItem("sfxEnabled") === "true";

      if (musicToggle) musicToggle.checked = musicEnabled;
      if (sfxToggle) sfxToggle.checked = sfxEnabled;

      // Music toggle event
      if (musicToggle) {
        musicToggle.addEventListener("change", () => {
          musicEnabled = musicToggle.checked;
          localStorage.setItem("musicEnabled", musicEnabled.toString());
          if (musicEnabled) {
            playBackgroundMusic();
          } else {
            backgroundMusic.pause();
          }
        });
      }

      // SFX toggle event
      if (sfxToggle) {
        sfxToggle.addEventListener("change", () => {
          sfxEnabled = sfxToggle.checked;
          localStorage.setItem("sfxEnabled", sfxEnabled.toString());
        });
      }

      function startTrivia(difficulty = 'easy') {
        const modal = document.getElementById("triviaModal");
        const timerSpan = document.getElementById("timerValue");
        const closeBtn = document.querySelector(".close-trivia");

      const timeLimits = {
        easy: 15,
        medium: 22,
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
          startGameTimer();
          startGameLoop();
          startSpeedControl();
        }
      }, 1000);
    }
  }

    //Background music playing function
    function playBackgroundMusic(){
        if(!musicEnabled) return;

        backgroundMusic.volume = 0.25;
        backgroundMusic.loop = true;
        backgroundMusic.play();
    }

    // Function to handle music toggle changes
    function handleMusicToggle() {
      musicEnabled = musicToggle.checked;
      if (musicEnabled) {
        playBackgroundMusic();
      } else {
        backgroundMusic.pause();
      }
    }

    // Function to handle sfx toggle changes
    function handleSfxToggle() {
      sfxEnabled = sfxToggle.checked;
      // No immediate action needed here, since sfx play is conditional on sfxEnabled
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
         if (lives <= 0) return; // Don't process blue if game is over
          score += 10;

          if (sfxEnabled){
              blueAudio.volume = 1.0;
              blueAudio.play();
          }

      }else if (tileDet.classList.contains("green")){
           if (lives <= 0) return; // Don't process green tile if game is over
          score += 20;

          if (sfxEnabled){
              greenAudio.volume = 1.0;
              greenAudio.play();
          }

      }else if (tileDet.classList.contains("red")){
          if (lives <= 0) return; // Don't process red tile if game is over
          
          if (sfxEnabled){
              redAudio.volume = 1.0;
              redAudio.play();
          }

          showRandomTrivia(); // ← add this

          //pauses the game
          clearInterval(gameInterval)

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

      function startSpeedControl() {
          clearInterval(gameSpeedController);
          gameSpeedController = setInterval(() => {
            if (gamePaused || lives <= 0) return;

            if (initialGameSpeed > minGameSpeed) {
              initialGameSpeed -= gameSpeedReduction;
              if (initialGameSpeed < minGameSpeed) {
                initialGameSpeed = minGameSpeed;
              }
            }
          }, 1000);
        }

      let gameLoopTimeout = null;

        function gameLoop() {
          if (gamePaused || lives <= 0) return;

          generateTileRow();

          const rows = board.querySelectorAll(".tile-row");
          const maxRows = 5;
          if (rows.length > maxRows) {
            const lastRow = rows[rows.length - 1];
            const missed = Array.from(lastRow.children).some(tile =>
              (tile.classList.contains("green") || tile.classList.contains("blue")) &&
              !tile.classList.contains("clicked")
            );

            if (missed && lives > 0 && !gamePaused) {
              redAudio.play();
              showRandomTrivia();
            }

            lastRow.remove();
        }

  // Schedule next iteration with updated speed
  gameLoopTimeout = setTimeout(gameLoop, initialGameSpeed);
}

      function startGameLoop() {
        if (gamePaused || lives <= 0) return;
        clearTimeout(gameLoopTimeout);
        playBackgroundMusic();
        gameLoop();
      }

      function stopGameLoop() {
        clearTimeout(gameLoopTimeout);
      }
      

      function showRandomTrivia() {
          if (lives <= 0) return; // Prevent showing trivia if game is ove
          gamePaused = true;
          initialGameSpeed = 2400;

          clearInterval(gameInterval);
          clearInterval(triviaTimer);

          triviaHandler = false;

          const difficulties = ["easy", "medium", "hard"];
          const chosenDiff = difficulties[Math.floor(Math.random() * difficulties.length)];
          const questionSet = triviaQuestions[chosenDiff];
          const usedSet = usedTrivia[chosenDiff];

          const availableQuestions = questionSet.filter(q => 
            !usedSet.some(used => used.question === q.question)
          );

          if (availableQuestions.length === 0) {
            // All questions used for this difficulty — reset the used list
            usedTrivia[chosenDiff] = [];
            availableQuestions.push(...questionSet);
          }

          const randomIndex = Math.floor(Math.random() * availableQuestions.length);
          const questionObj = availableQuestions[randomIndex];

          // Mark as used
          usedTrivia[chosenDiff].push(questionObj);

          // Store current question
          currentTrivia = questionObj;

          let timeLimit = chosenDiff === "medium" ? 22 : chosenDiff === "hard" ? 30 : 15;
          let timeLeft = timeLimit;

          const modal = document.getElementById("triviaModal");
          modal.style.display = "flex";

          document.getElementById("triviaQuestion").textContent = `${questionObj.question}`;
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
              if (triviaHandler) return;
              triviaHandler = true;

              clearInterval(triviaTimer);

              // Disable all buttons
              const allButtons = document.querySelectorAll(".option");
              allButtons.forEach(b => b.disabled = true);

              if (option === questionObj.correct) {
                btn.style.backgroundColor = "#4CAF50"; // Green for correct
                score += chosenDiff === "easy" ? 15 : chosenDiff === "medium" ? 30 : 45;
                scoreDisplay.textContent = `Score: ${score}`;

                correctStreak++;

                if (correctStreak === 5){
                  lives++;
                  correctStreak = 0;
                  updateLivesUI();
                }

              } else {
                btn.style.backgroundColor = "#f44336"; // Red for wrong
                lives--;
                initialGameSpeed = 2400;
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

            if (timeLeft < 0){
              timeLeft = 0; //clamps the time left to 0 so that it does not display negative
            }

            if (timeLeft <= 0 && !triviaHandler) {
              triviaHandler = true;

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
              if (lives > 0) lives--;
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
          if (lives <= 0){
              const modal = document.getElementById("triviaModal");
              modal.style.display = "none";
              clearInterval(triviaTimer);
              clearInterval(gameTimerInterval); //this will stop the timer when the player loses
              board.innerHTML = ""; // Clear board

              if (score > getHighScore()){
                  setHighScore(score);
                  updateHighScoreUI();
             }

              gameOver();

              return;
          }

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

                // Clear the board
                board.innerHTML = "";

                // Resume game
                gamePaused = false;
                startGameLoop();
              }

              if (lives <= 0) return; //  Don't resume game if player is out of lives
            }, 1000);
          }

          function startGameTimer() {
            if (lives > 0){
               startTime = Date.now(); // Record start time
              const timerDisplay = document.getElementById("time");

              gameTimerInterval = setInterval(() => {
                const now = Date.now();
                const elapsed = now - startTime; // in milliseconds

                const totalSeconds = Math.floor(elapsed / 1000);
                const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
                const seconds = String(totalSeconds % 60).padStart(2, "0");

                timerDisplay.textContent = `${minutes}:${seconds}`;
              }, 1000);
            }
          }

          function getHighScore() {
              return parseInt(localStorage.getItem("highScore")) || 0;
          }

          function updateHighScoreUI() {
              const highScoreDisplay = document.getElementById("highScore");
              if (highScoreDisplay) {
                highScoreDisplay.textContent = getHighScore();
              }
          }

          function setHighScore(newScore) {
               localStorage.setItem("highScore", newScore.toString());
          }

          function gameOver(){
            gamePaused = true;

            clearTimeout(gameLoopTimeout);
            clearInterval(triviaTimer);
            clearInterval(gameTimerInterval);

            const ending = document.getElementById("gameOver");
            ending.style.display = "flex";

            const timerDisplay = document.getElementById("end-time");
            const scoreDisplay = document.getElementById("end-score");
            const highScoreDisplay = document.getElementById("end-highscore");

            timerDisplay.textContent = `Time Played: ${document.getElementById("time").textContent}`;
            scoreDisplay.textContent = `Your Score: ${score}`;
            highScoreDisplay.textContent = `High Score: ${getHighScore()}`;
          }

            // Restart the game — reset vars & start fresh or reload page
            function restartRound() {
              // You can reset your variables or just reload the page to restart
              window.location.reload();
            }

            // Main menu button
            function goToMainMenu() {
              window.location.href = "index.html";
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

document.addEventListener("DOMContentLoaded", () => {
  updateHighScoreUI(); // Ensures it runs after DOM is ready
});


document.addEventListener("click", function initAudioOnce() {
     //playBackgroundMusic();
     if (musicEnabled){
      playBackgroundMusic();
     }
     document.removeEventListener("click", initAudioOnce);
});

document.addEventListener("DOMContentLoaded", () => {
  updateHighScoreUI();
});



document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("musicEnabled") === null) {
      localStorage.setItem("musicEnabled", "false");
    }

    if (localStorage.getItem("sfxEnabled") === null) {
      localStorage.setItem("sfxEnabled", "false");
    }
});

if (window.location.pathname.includes("game.html")) {
  document.addEventListener("click", function initAudioOnce() {
    if (musicEnabled) {
      playBackgroundMusic();
    }
    document.removeEventListener("click", initAudioOnce);
  });
}

startCountdown();
board.addEventListener("click", handleTileClick);

if (score > getHighScore()) {
  setHighScore(score);
  updateHighScoreUI();
}

// Attach listeners to buttons after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const restartBtn = document.getElementById("restartBtn");
  const mainMenuBtn = document.getElementById("mainMenuBtn");

  if (restartBtn) restartBtn.addEventListener("click", restartRound);
  if (mainMenuBtn) mainMenuBtn.addEventListener("click", goToMainMenu);
});

