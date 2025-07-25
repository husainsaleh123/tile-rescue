//<--------------------------Constants---------------------------->

      //array of the instructions to play the game
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

      //nested array of the triviaQuestions
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
             {
              question: "What arab country is part of the original founding UN members?",
              options: ["Saudi Arabia", "Iraq", "Syria", "All options are correct"],
              correct: "All options are correct"
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
              question: "As of 2025, how many countries are part of the United Nations?",
              options: ["193", "194", "195", "196"],
              correct: "193"
            },
             {
              question: "What is the main difference between a debit card and a credit card?",
              options: ["Debit cards allow you to borrow money from the bank.", "Credit cards have no spending limit.", "Debit cards use your own money, credit cards allow you to borrow money from the bank.", "None of the above."],
              correct: "Debit cards use your own money, credit cards allow you to borrow money from the bank."
            },
          ]
      };

      //nested array that stores the questions already used so that they don't get repeated
      const usedTrivia = {
            easy: [],
            medium: [],
            hard: []
      };

      const instructionText = document.getElementById("instructionText");   //gets instruction text from index.html
      const stepCounter = document.getElementById("stepCounter");  //displays the current no # of step in index.html
      const backBtn = document.getElementById("backBtn");  //gets the back button in the instructions modal box
      const nextBtn = document.getElementById("nextBtn");  //gets the next button in the instructions modal box
      const countdownOverlay = document.getElementById("counter");  //gets the counter id from the game.html
      const countdownNum = document.getElementById("countdownNum");  //gets the countdown number from the game.html
      const board = document.getElementById("tileBoard"); //gets the tile board from the game.html
      const tileCount = 5; //number of tiles in a single row 
      const minRedTiles = 3;  //MINIMUM number of red tiles in a single row (3)
      const maxRedTiles = tileCount - 1;  //MAXIMUM number of red tiles in a single row (4)
      const scoreDisplay = document.getElementById("score"); //gets the score id from game.html
      const musicToggle = document.getElementById("musicToggle"); //gets the score
      const sfxToggle = document.getElementById("sfxToggle");
      const backgroundMusic = new Audio("audio/background-music.mp3"); //selects background music audio
      const mainMenuBackgroundMusic = new Audio("audio/main-menu-music.mp3"); //selects background music audio  
      const swipeAudio = new Audio("audio/swipe.mp3");
      const rowHeight = 75; //tile 60px + gap 15px = 75px
      const greenAudio = new Audio("audio/green.mp3"); //selects green tile audio sf
      const redAudio = new Audio("audio/red.mp3"); //selects red tile audio sf
      const blueAudio = new Audio("audio/blue.mp3"); //selects blue tile audio sf
      const triviaModal = document.querySelector(".trivia-modal"); //selects the trivial modal class from game.html
      const highScore = new Audio("audio/high-score.mp3");
      const correctAns = new Audio("audio/correct-ans.mp3")
      const wrongAns = new Audio("audio/wrong-ans.mp3")

//<--------------------------Variables---------------------------->

      let currentStep = 0  //gets the current no of step in instructions
      let countdownValue = 3;  //gets the current no of countdown in game.html
      let score = 0;  //stores score variable
      let lives = 3;  //stores number of lives player has
      let gameInterval = null;  //stores the game interval
      let triviaTimer;  //stores the triviaTimer for countdown
      let gamePaused = false;   //stores the gamePaused boolean
      let currentTrivia = null; 
      let triviaHandler = false;
      let correctStreak = 0; //counter for correct trivia ans streak
      let initialGameSpeed = 2400; //stores the starting tile speed
      let maxGameSpeed = 800;  //stores the top tile speed
      let gameSpeedReduction = 50; //stores the speed increase rate
      let gameSpeedController = null; //
      let startTime = null;  //stores the game starting time
      let timeInterval = null;  //stores the time interval
    
      
      // Restore toggle states
      let musicEnabled = localStorage.getItem("musicEnabled") === "true"; //enables music to true by default 
      let sfxEnabled = localStorage.getItem("sfxEnabled") === "true"; //enables SFX to true by default 

      if (musicToggle) musicToggle.checked = musicEnabled; //setting the musicToggle checkbox to musicEnabled
      if (sfxToggle) sfxToggle.checked = sfxEnabled; //setting the sfx checkbox to sfxEnabled

      // Music toggle event
      if (musicToggle) {
      musicToggle.addEventListener("change", () => {
        musicEnabled = musicToggle.checked;
        localStorage.setItem("musicEnabled", musicEnabled.toString());
        
        if (musicEnabled) {
          playBackgroundMusic();
        } else {
          backgroundMusic.pause();
          mainMenuBackgroundMusic.pause();
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

      
      //<-----------------------Functions---------------------------->

      //Updates the instruction modal in the index.html
        function updateInstruction() {
          instructionText.textContent = instructions[currentStep];
          stepCounter.textContent = `${currentStep + 1} / ${instructions.length}`;
          backBtn.disabled = currentStep === 0;
          nextBtn.disabled = currentStep === instructions.length - 1;
        }

      //Displays the instruction modal in the index.html after it is original set to display:none;
        window.openInstructions = function() {
          document.getElementById('instructionsModal').style.display = "flex";
          currentStep = 0;
          updateInstruction(); //This will reset to the first instruction
        };

      //this will close the instruction if he clicked on the close button
      window.closeInstructions = function() {
          document.getElementById('instructionsModal').style.display = "none";
        };

      //starts the trivia with an easy question
      function startTrivia() {
        const modal = document.getElementById("triviaModal");
        const timerSpan = document.getElementById("timerValue");
        const closeBtn = document.querySelector(".close-trivia");

      //sets the time limit for each time of question
      const timeLimits = {
        easy: 15,
        medium: 22,
        hard: 30
      };

      //sets the time left based on difficulty
      let secondsLeft = timeLimits[difficulty];

      //shows the trivia modal in flex style after it was display:none by default
      if (modal) {
        modal.style.display = "flex";
      }

      // Disable the close button initially
      closeBtn.style.pointerEvents = "none";
      closeBtn.style.opacity = 0.5;

      timerSpan.textContent = secondsLeft;

      //controlling the countdown of the triviaTimer
      triviaTimer = setInterval(() => {  //the set interval will execute the triviaTimer in ms until stopped by clearInterval
        secondsLeft--;
        timerSpan.textContent = secondsLeft;

        if (secondsLeft <= 0) {
          clearInterval(triviaTimer);  //this will stop the triviaTimer from displaying if the secondsLeft is 0 or less

          // Enables the close button if the timer finished
          closeBtn.style.pointerEvents = "auto";
          closeBtn.style.opacity = 1;
        }
      }, 1000);
    }

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

              // This will run the game right after the countdown is over
              startGameTimer();
              startGameLoop();
              startSpeedControl();
            }
          }, 1000);
        }
      }

    function initAudio() {
      if (musicEnabled) {
        playBackgroundMusic();
      }
      document.removeEventListener("click", initAudio);
    }

    //Background music playing function
    function playBackgroundMusic() {
      if (!musicEnabled) return;

      if (backgroundMusic) backgroundMusic.pause();
      if (mainMenuBackgroundMusic) mainMenuBackgroundMusic.pause();

      let audioToPlay = null;
      const path = window.location.pathname;

      if (path.includes("index.html") || path === "/" || path.endsWith("/index")) {
        mainMenuBackgroundMusic.volume = 0.25;
        mainMenuBackgroundMusic.loop = true;
        audioToPlay = mainMenuBackgroundMusic;
      } else if (path.includes("game.html")) {
        backgroundMusic.volume = 0.25;
        backgroundMusic.loop = true;
        audioToPlay = backgroundMusic;
      }

      if (audioToPlay) {
        audioToPlay.play().catch(err => {
          console.warn("Autoplay blocked or failed:", err);
        });
      }
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

    //The tile generation function, MOST important function, inside the game.html page
    function generateTileRow() {
      const redTileCount = Math.floor(Math.random() * (maxRedTiles - minRedTiles + 1)) + minRedTiles; //defines no of red tile in a single row using formula
      const tileTypes = []; 

      for (let i = 0; i < redTileCount; i++) tileTypes.push("red");   //adds the red tiles
      while (tileTypes.length < tileCount) tileTypes.push(Math.random() < 0.5 ? "green" : "blue");  //fils remaining spots with green or blue

    //shuffles the order of the tiles randomly
      for (let i = tileTypes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileTypes[i], tileTypes[j]] = [tileTypes[j], tileTypes[i]];  //swaps the color values
      }

      //creates new rows
      const row = document.createElement("div");
      row.classList.add("tile-row");

      //creating a tile element based on each tile type
      tileTypes.forEach(type => {
        const tile = document.createElement("div");
        tile.classList.add("tile", type);
        row.appendChild(tile);
      });

      board.insertBefore(row, board.firstChild); // firstChild adds rows to top
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

          //plays the interaction sfx if enabled
          if (sfxEnabled){
              blueAudio.volume = 1.0;
              blueAudio.play();
          }

      }else if (tileDet.classList.contains("green")){
           if (lives <= 0) return; // Don't process green tile if game is over
          score += 20;

          //plays the interaction sfx if enabled
          if (sfxEnabled){
              greenAudio.volume = 1.0;
              greenAudio.play();
          }

      }else if (tileDet.classList.contains("red")){
          if (lives <= 0) return; // Don't process red tile if game is over
          
          //plays the interaction sfx if enabled
          if (sfxEnabled){
              redAudio.volume = 1.0;
              redAudio.play();
          }

          showRandomTrivia(); //shows the trivia if the player misclicked

          //pauses the game
          clearInterval(gameInterval)

          return;
      }
  
      // Update the score on screen
      scoreDisplay.textContent = `Score: ${score}`; 
    }

    //Function to ensure tile rows are printed above the initial row
    function moveTilesUp() {
          const rows = Array.from(board.querySelectorAll(".tile-row"));
          
          rows.forEach(row => {
              const currentTop = parseInt(row.style.top || "0");
              const newTop = currentTop - 50; 
              row.style.top = `${newTop}px`;

              if (newTop + row.offsetHeight < 0) {
                  board.removeChild(row); //Removes the row once it reaches off-screen
              }
          });
    }

      //function to check if the player missed a blue or green tile
      function checkMissedTiles(row) {
        const tiles = row.querySelectorAll(".tile");
        const missed = Array.from(tiles).some(tile => {
          return !tile.classList.contains("clicked") && 
                (tile.classList.contains("green") || tile.classList.contains("blue"));
        });

        if (missed) {
          redAudio.volume = 1.0;
          redAudio.play();
        }
      }

      //function to control the game's speed
      function startSpeedControl() {
          clearInterval(gameSpeedController);
          gameSpeedController = setInterval(() => {
            if (gamePaused || lives <= 0) return;

            if (initialGameSpeed > maxGameSpeed) {
              initialGameSpeed -= gameSpeedReduction;
              if (initialGameSpeed < maxGameSpeed) {
                initialGameSpeed = maxGameSpeed;
              }
            }
          }, 1000);
        }

      let gameLoopTimeout = null;

        //function to control the game's cycle and tile processing
        function gameLoop() {
          if (gamePaused || lives <= 0) return; //if paused or no lives ensures the game does nothing

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

      //function that starts the game after the countdown is over
      function startGameLoop() {
        if (gamePaused || lives <= 0) return;
        clearTimeout(gameLoopTimeout);  //clears any timeouts once the game starts (Ex: the countdown)
        playBackgroundMusic();
        gameLoop();
      }

      //clears eveything once the game cycle ends
      function stopGameLoop() {
        clearTimeout(gameLoopTimeout);
      }
      

      //function to show the trivia box
      function showRandomTrivia() {
          if (lives <= 0) return; // Prevent showing trivia if the game is over
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
            // All questions used for this difficulty which resets the used lists
            usedTrivia[chosenDiff] = [];
            availableQuestions.push(...questionSet);
          }

          const randomIndex = Math.floor(Math.random() * availableQuestions.length);
          const questionObj = availableQuestions[randomIndex];

          //Marks the question selected as used
          usedTrivia[chosenDiff].push(questionObj);

          // Stores the current question
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

          // Showcases the options for the trivia
          questionObj.options.forEach(option => {
            const btn = document.createElement("button");
            btn.classList.add("option");
            btn.textContent = option;

            btn.onclick = () => {
              if (triviaHandler) return;
              triviaHandler = true;

              clearInterval(triviaTimer);

              //Disables all the buttons
              const allButtons = document.querySelectorAll(".option");
              allButtons.forEach(b => b.disabled = true);

            // Inside your correct answer block:
            if (option === questionObj.correct) {
              btn.style.backgroundColor = "#4CAF50";
              score += chosenDiff === "easy" ? 15 : chosenDiff === "medium" ? 30 : 45;
              scoreDisplay.textContent = `Score: ${score}`;

              correctStreak++;

              // Plays the sound safely
              if (sfxEnabled){
                correctAns.volume = 0.5;
                correctAns.play()
              }

              if (correctStreak === 5){
                lives++;
                correctStreak = 0;
                updateLivesUI();
              }

              } else {
                btn.style.backgroundColor = "#f44336"; // Red for wrong
                lives--;

                if (sfxEnabled){
                  wrongAns.volume = 0.5;
                  wrongAns.play();
                }

                initialGameSpeed = 2400;
                updateLivesUI();

                // Highlights the correct answer 
                allButtons.forEach(b => {
                  if (b.textContent === questionObj.correct) {
                    b.style.backgroundColor = "#4CAF50";
                  }
                });
              }

              // Enables the close button
              const closeBtn = document.querySelector(".close-trivia");
              closeBtn.style.pointerEvents = "auto";
              closeBtn.style.opacity = "1";

              setTimeout(resumeGameAfterTrivia, 1000);
            };

            optionsContainer.appendChild(btn);
          });

          // Initially disables the close button
          const closeBtn = document.querySelector(".close-trivia");
          closeBtn.style.pointerEvents = "none";
          closeBtn.style.opacity = "0.4";

          //Controls the trivia countdown
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

              // Deducts a life if answered incorrectly
              if (lives > 0) lives--;
              updateLivesUI();

              // Enables close button
              closeBtn.style.pointerEvents = "auto";
              closeBtn.style.opacity = "1";

              // Resume after short delay
              setTimeout(resumeGameAfterTrivia, 1500);
            }
          }, 1000);
        }

      //responsible for displaying current lives
      function updateLivesUI() {
          const livesDisplay = document.getElementById("lives");
          const hearts = "❤️".repeat(lives);
          livesDisplay.textContent = `Lives: ${hearts}`;
      }

      //closes the trivia modal once the 'x' button is clicked
      function closeTriviaModal() {
          resumeGameAfterTrivia()
      }

      //if the player has lives after the trivia, resume the game
      function resumeGameAfterTrivia() {
          if (lives <= 0){
              const modal = document.getElementById("triviaModal");
              modal.style.display = "none";
              clearInterval(triviaTimer);
              clearInterval(gameTimerInterval); //this will stop the timer when the player loses
              board.innerHTML = ""; // this will clear the board

              if (score > getHighScore()){
                  setHighScore(score);
                  updateHighScoreUI();
             }

              gameOver();

              return;
          }

            const modal = document.getElementById("triviaModal");
            modal.style.display = "none";

            //Clears the trivia timer
            clearInterval(triviaTimer);
            triviaTimer = null;
            currentTrivia = null;

            //Clears the modal content
            document.getElementById("triviaQuestion").textContent = "";
            document.getElementById("triviaOptions").innerHTML = "";
            document.getElementById("timerValue").textContent = "0";

            //Resets the close button
            const closeBtn = document.querySelector(".close-trivia");
            closeBtn.style.pointerEvents = "auto";
            closeBtn.style.opacity = "1";

            //Will show the mini countdown after resuming
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

          //will show the time spent playing the round
          function startGameTimer() {
            if (lives > 0){
               startTime = Date.now(); //fetches the current date using Date.now()
              const timerDisplay = document.getElementById("time");

              gameTimerInterval = setInterval(() => {
                const now = Date.now();
                const elapsed = now - startTime; //formula to calculate the time

                const totalSeconds = Math.floor(elapsed / 1000);
                const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
                const seconds = String(totalSeconds % 60).padStart(2, "0");

                timerDisplay.textContent = `${minutes}:${seconds}`;
              }, 1000);
            }
          }

          //function to get the all time high score
          function getHighScore() {
              return parseInt(localStorage.getItem("highScore")) || 0;
          }

          //function to update the all time high score if broken
          function updateHighScoreUI() {
              const highScoreDisplay = document.getElementById("highScore");
              if (highScoreDisplay) {
                highScoreDisplay.textContent = getHighScore();
              }
          }

          //function to set the all time high score if broken
          function setHighScore(newScore) {
               localStorage.setItem("highScore", newScore.toString());
                if (sfxEnabled){
                    highScore.volume = 0.5;
                    highScore.play();
                }
  
          }

          //fumction to show the screen once the game is Over
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

            //Function to restart the game
            function restartRound() {
              // You can reset your variables or just reload the page to restart
              window.location.reload();
            }

            //Function to allow the main menu button to take the user to the homepage
            function goToMainMenu() {
              window.location.href = "index.html";
            }

//<--------------------------Event listeners---------------------------->

//event listener to navigate through instruction modal
if (instructionText && stepCounter && backBtn && nextBtn) {
 backBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateInstruction();
      }
    });

//event listener to update the step counter in instructions modal
nextBtn.addEventListener("click", () => {
    if (currentStep < instructions.length - 1) {
        currentStep++;
        updateInstruction();
      } 
    });

    updateInstruction(); //Initialize on load
  }

//event listener to update the high score and display it
document.addEventListener("DOMContentLoaded", () => {
  updateHighScoreUI(); // Ensures the high score runs after DOM is ready
});

document.addEventListener("DOMContentLoaded", () => {
  updateHighScoreUI();
});

//event listener to enable/disable music and sfx
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("musicEnabled") === null) {
      localStorage.setItem("musicEnabled", "false");
    }

    if (localStorage.getItem("sfxEnabled") === null) {
      localStorage.setItem("sfxEnabled", "false");
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const musicToggle = document.getElementById("musicToggle");
  if (musicToggle) {
    musicToggle.addEventListener("click", () => {
      if (musicToggle.checked) {
        localStorage.setItem("musicEnabled", "true");
        playBackgroundMusic();
      } else {
        localStorage.setItem("musicEnabled", "false");
        backgroundMusic.pause();
        if (mainMenuBackgroundMusic) {
          mainMenuBackgroundMusic.pause();
        }
      }
    });
  }
});

document.addEventListener("click", function initAudioOnce() {
 const musicEnabled = localStorage.getItem("musicEnabled") === "true";
if (musicEnabled) {
playBackgroundMusic();
}

// remove the event listener so this runs only once
 document.removeEventListener("click", initAudioOnce);
}, { once: true });

startCountdown();
board.addEventListener("click", handleTileClick);

//logical condition to check if current score has beat the high score
if (score > getHighScore()) {
  setHighScore(score);
  updateHighScoreUI();
}

//Attaching event listeners once the game is over to either restart or go back to main menu
document.addEventListener("DOMContentLoaded", () => {
  const restartBtn = document.getElementById("restartBtn");
  const mainMenuBtn = document.getElementById("mainMenuBtn");

  if (restartBtn) restartBtn.addEventListener("click", restartRound);
  if (mainMenuBtn) mainMenuBtn.addEventListener("click", goToMainMenu);
});
