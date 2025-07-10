# Tile Rescue

A web-based reaction and trivia game developed using HTML, CSS, and Javascript.

### 🎮 Game description:

A set of tiles will appear in a column/grid one at a time from top to bottom. You must click ONLY the safe tiles which are the ***blue*** and ***green***, avoiding the ***red*** ones. 


## 📝 Rules:

- The speed increases as you progress throughout the round (Ex: 1s -> 0.8s -> 0.6s ---> 0.2s, etc. )
- You have _3 lives_.
- Once you accidentally press the wrong tile, you have a chance to save your life **by answering a random trivia question**.
- If you answer 5 trivial questions correctly in a row, **you win an extra life!**
- Timer for each trivia question: 
    - **Easy questions:** 10 seconds.
    - **Medium questions:** 20 seconds.
    - **Hard questions:** 30 seconds.

## 👾 Point system:

### Tiles

- Red tile = 0 points.
- Blue tile = 10 points (initialSpeed / currentSpeed)
- Green tile = 20 points * (initialSpeed / currentSpeed)


score = baseScore * (initialSpeed / currentSpeed)
### Trivia

- Easy question = 15 points.
- Medium question = 30 points.
- Hard question = 45 points.

## 💻 Technologies used

- HTML.
- CSS.
- Javascript.

## ▶️ How to launch

1. Clone the repository
2. Run "index.html" in your web-browser
3. Enjoy!