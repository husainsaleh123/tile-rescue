
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
  


//<--------------------------Variables---------------------------->

      let currentStep = 0;
      let countdownValue = 3;


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
        }
      }, 1000);
    }
  }


    //The board javascript, inside the game.html page
    function generateTileRow() {
        const row = document.createElement("div");
        row.classList.add("tile-row");
        
        const redTileCount = Math.floor(Math.random() * (maxRedTiles - minRedTiles + 1)) + minRedTiles; // 3 to 4
        const tileTypes = [];
        
    
    //Adding red tiles

    for (let i = 0; i < redTileCount; i++){
        tileTypes.push("red");
    }

    //Filling the remainder of tiles with green or blue
    while (tileTypes.length < tileCount){
        tileTypes.push(Math.random() < 0.5 ? "green" : "blue");
    }


      //Shuffling the tiles

      for (let i = tileTypes.length - 1; i > 0; i--){
        const x = Math.floor(Math.random() * (i + 1));
        [tileTypes[i], tileTypes[x]] = [tileTypes[x], tileTypes[i]]
      }

     //Creating the tile elements
      tileTypes.forEach(type => {
        const tile = document.createElement("div");
        tile.classList.add("tile",type);
        row.appendChild(tile);
      });

      return row;
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
 
startCountdown();
// Generating the rows

  for (let i = 0; i < 6; i++){
      board.appendChild(generateTileRow());
  }

