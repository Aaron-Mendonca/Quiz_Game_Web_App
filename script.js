// Question banks by level & category
const questions = {
  easy: {
    coding: [
      { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Mark Language"], answer: "Hyper Text Markup Language" },
      { question: "Which tag defines a paragraph?", options: ["<div>", "<p>", "<span>", "<section>"], answer: "<p>" },
      { question: "CSS is used for ?", options: ["Structure", "Styling", "Logic", "Database"], answer: "Styling" },
      { question: "What does JS stand for?", options: ["JavaSource", "JavaScript", "JustScript", "JScript"], answer: "JavaScript" },
      { question: "Which is not HTML element?", options: ["<html>", "<head>", "<footer>", "<func>"], answer: "<func>" }
    ],
    movies: [
      { question: "Who directed 'Inception'?", options: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "James Cameron"], answer: "Christopher Nolan" },
      { question: "Which movie features the quote “May the Force be with you”?", options: ["Star Wars", "Star Trek", "Matrix", "Avatar"], answer: "Star Wars" },
      { question: "Which actor played Iron Man?", options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], answer: "Robert Downey Jr." },
      { question: "Which movie won Best Picture Oscar 2020?", options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"], answer: "Parasite" },
      { question: "Which series is from Marvel?", options: ["Daredevil", "Sherlock", "House", "Breaking Bad"], answer: "Daredevil" }
    ],
    sports: [
      { question: "How many players in a football (soccer) team on field?", options: ["9", "10", "11", "12"], answer: "11" },
      { question: "Which sport uses a shuttlecock?", options: ["Badminton", "Tennis", "Squash", "Table Tennis"], answer: "Badminton" },
      { question: "Which country won FIFA World Cup 2018?", options: ["Brazil", "France", "Germany", "Spain"], answer: "France" },
      { question: "Michael Jordan played which sport?", options: ["Cricket", "Basketball", "Football", "Swimming"], answer: "Basketball" },
      { question: "In which sport is a ‘home run’ scored?", options: ["Cricket", "Baseball", "Hockey", "Tennis"], answer: "Baseball" }
    ]
  },
  medium: {
    coding: [
      { question: "Which method turns JS object to JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJSON()"], answer: "JSON.stringify()" },
      { question: "Which HTML tag is used to link CSS file?", options: ["<style>", "<link>", "<script>", "<css>"], answer: "<link>" },
      { question: "What symbol starts a CSS id selector?", options: ["#", ".", "!", "&"], answer: "#" },
      { question: "Which is a JavaScript framework?", options: ["Laravel", "Django", "React", "Rails"], answer: "React" },
      { question: "Which operator is for equality in JS (value + type)?", options: ["==", "=", "===", "!="], answer: "===" }
    ],
    movies: [
      { question: "Which film is part of the Marvel Cinematic Universe?", options: ["Blade Runner", "Iron Man", "Inception", "Avatar"], answer: "Iron Man" },
      { question: "Who played Jack in Titanic?", options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"], answer: "Leonardo DiCaprio" },
      { question: "Which director made ‘Pulp Fiction’?", options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"], answer: "Quentin Tarantino" },
      { question: "Which movie has line “I’ll be back”?", options: ["Terminator", "Rocky", "Die Hard", "Gladiator"], answer: "Terminator" },
      { question: "Which movie is in the LOTR trilogy?", options: ["Hobbit", "Avatar", "Star Wars", "Pirates"], answer: "Hobbit" }
    ],
    sports: [
      { question: "Which country hosted 2016 Olympics?", options: ["China", "Brazil", "UK", "Russia"], answer: "Brazil" },
      { question: "Number of sets in a grand slam tennis match (men)?", options: ["3", "5", "4", "6"], answer: "5" },
      { question: "Which sport uses hoop, net & backboard?", options: ["Volleyball", "Basketball", "Hockey", "Cricket"], answer: "Basketball" },
      { question: "Which country won the 2018 FIFA world cup?", options: ["France", "Italy", "Spain", "Germany"], answer: "France" },
      { question: "In which sport is ‘love’ a scoring term?", options: ["Badminton", "Tennis", "Cricket", "Volleyball"], answer: "Tennis" }
    ]
  },
  hard: {
    coding: [
      { question: "Which JS feature introduced arrow functions?", options: ["ES5", "ES6", "ES7", "ES8"], answer: "ES6" },
      { question: "Which CSS property controls layout direction (flex)?", options: ["flex-direction", "flex-wrap", "justify-content", "align-items"], answer: "flex-direction" },
      { question: "Which method removes last element in JS array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "pop()" },
      { question: "What is inheritance in OOP?", options: ["Overload", "Override", "Reuse", "Inherit"], answer: "Override" },
      { question: "Which HTTP status code is ‘Not Found’?", options: ["200", "404", "500", "301"], answer: "404" }
    ],
    movies: [
      { question: "Who composed music for ‘Interstellar’?", options: ["Hans Zimmer", "John Williams", "Ennio Morricone", "James Horner"], answer: "Hans Zimmer" },
      { question: "Which movie won Best Picture 2019 Oscar?", options: ["Green Book", "Parasite", "1917", "Moonlight"], answer: "Green Book" },
      { question: "Which actor plays “The Joker” in 2019 film?", options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"], answer: "Joaquin Phoenix" },
      { question: "Which director made ‘The Grand Budapest Hotel’?", options: ["Wes Anderson", "Tim Burton", "Christopher Nolan", "Quentin Tarantino"], answer: "Wes Anderson" },
      { question: "Which film features the One Ring?", options: ["Harry Potter", "The Hobbit", "The Lord of the Rings", "Chronicles of Narnia"], answer: "The Lord of the Rings" }
    ],
    sports: [
      { question: "Which city hosted 2008 Summer Olympics?", options: ["Beijing", "London", "Sydney", "Athens"], answer: "Beijing" },
      { question: "Which cricketer has most international centuries (men)?", options: ["Sachin Tendulkar", "Kohli", "Ricky Ponting", "Rohit Sharma"], answer: "Sachin Tendulkar" },
      { question: "Which country won IPL 2020?", options: ["Mumbai Indians", "Chennai Super Kings", "Delhi Capitals", "Sunrisers Hyderabad"], answer: "Mumbai Indians" },
      { question: "Which else uses 18 holes in major tournaments?", options: ["Golf", "Cricket", "Football", "Tennis"], answer: "Golf" },
      { question: "Which sport uses a puck?", options: ["Hockey", "Ice Hockey", "Cricket", "Baseball"], answer: "Ice Hockey" }
    ]
  },
  extreme: {
    coding: [
      { question: "What is output of `typeof NaN` in JS?", options: ["number", "NaN", "object", "undefined"], answer: "number" },
      { question: "Which operator is strict equality in JS?", options: ["==", "=", "===", "!="], answer: "===" },
      { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Sequence Query Language", "Standard Query List"], answer: "Structured Query Language" },
      { question: "Which HTTP method is used to update resource?", options: ["GET", "DELETE", "PUT", "PATCH"], answer: "PUT" },
      { question: "Which protocol is secure version of HTTP?", options: ["FTP", "HTTP", "HTTPS", "SMTP"], answer: "HTTPS" }
    ],
    movies: [
      { question: "Who directed ‘Parasite’?", options: ["Bong Joon-ho", "Park Chan-wook", "Lee Chang-dong", "Kim Ki-duk"], answer: "Bong Joon-ho" },
      { question: "Which film won Palme d’Or 2020?", options: ["Parasite", "Portrait of a Lady", "Tenet", "Minari"], answer: "Parasite" },
      { question: "Which actor played Joker in ‘The Dark Knight’?", options: ["Heath Ledger", "Joaquin Phoenix", "Jack Nicholson", "Jared Leto"], answer: "Heath Ledger" },
      { question: "Which movie is about dream within dreams?", options: ["Inception", "Shutter Island", "Interstellar", "Memento"], answer: "Inception" },
      { question: "Which film series features “Ring” horror story?", options: ["The Ring", "Saw", "Get Out", "Insidious"], answer: "The Ring" }
    ],
    sports: [
      { question: "Which nation won first FIFA World Cup (1930)?", options: ["Uruguay", "Brazil", "Italy", "Germany"], answer: "Uruguay" },
      { question: "Which sport has the Stanley Cup?", options: ["Baseball", "Ice Hockey", "Football", "Basketball"], answer: "Ice Hockey" },
      { question: "Which athlete won most Olympic gold medals (men)?", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Larissa Latynina"], answer: "Michael Phelps" },
      { question: "Which country hosts Wimbledon?", options: ["USA", "England", "Australia", "France"], answer: "England" },
      { question: "Which sport is played in Tours in France annually?", options: ["Tennis", "Cricket", "Football", "Golf"], answer: "Tennis" }
    ]
  }
};

const timeLimits = { easy: 15, medium: 12, hard: 10, extreme: 8 };

let username = "";
let currentLevel = null;
let currentCategory = null;
let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval;
let timeLeft;

// DOM elements
const startScreen = document.getElementById("start-screen");
const usernameInput = document.getElementById("username-input");
const startBtn = document.getElementById("start-btn");

const levelSelection = document.getElementById("level-selection");
const usernameDisplay = document.getElementById("username-display");

const categorySelection = document.getElementById("category-selection");

const quizContainer = document.getElementById("quiz-container");
const levelTitle = document.getElementById("level-title");
const categoryTitle = document.getElementById("category-title");
const progressFill = document.getElementById("progress-fill");
const questionBox = document.getElementById("question-box");
const optionsBox = document.getElementById("options-box");
const timeDisplay = document.getElementById("time");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreBox = document.getElementById("score-box");
const highScoreBox = document.getElementById("high-score-box");

const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

// Start — get username
startBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (!name) {
    alert("Please enter your name!");
    return;
  }
  username = name;
  usernameDisplay.textContent = username;
  startScreen.classList.add("hidden");
  levelSelection.classList.remove("hidden");
});

// Level selection
document.querySelectorAll("#level-selection button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lvl = btn.getAttribute("data-level");
    currentLevel = lvl;
    levelSelection.classList.add("hidden");
    categorySelection.classList.remove("hidden");
  });
});

// Category selection
document.querySelectorAll("#category-selection button").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.getAttribute("data-cat");
    currentCategory = cat;
    categorySelection.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    startQuiz();
  });
});

function startQuiz() {
  // Prepare question list
  activeQuestions = questions[currentLevel][currentCategory];
  currentIndex = 0;
  score = 0;

  levelTitle.textContent = `Level: ${currentLevel.toUpperCase()}`;
  categoryTitle.textContent = `Category: ${currentCategory.toUpperCase()}`;

  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";

  updateProgress();
  showQuestion();
}

function updateProgress() {
  const percent = (currentIndex / activeQuestions.length) * 100;
  progressFill.style.width = percent + "%";
}

function showQuestion() {
  clearInterval(timerInterval);
  timeLeft = timeLimits[currentLevel];
  timeDisplay.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      feedback.textContent = "⏰ Time's up!";
      disableOptions();
      nextBtn.disabled = false;
    }
  }, 1000);

  const q = activeQuestions[currentIndex];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";
  feedback.textContent = "";
  nextBtn.disabled = true;

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => checkAnswer(opt, btn));
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected, btn) {
  clearInterval(timerInterval);
  const correct = activeQuestions[currentIndex].answer;

  if (selected === correct) {
    feedback.textContent = "✅ Correct!";
    score++;
    btn.classList.add("correct");
    correctSound.play();
  } else {
    feedback.textContent = "❌ Wrong!";
    btn.classList.add("wrong");
    wrongSound.play();
  }

  document.querySelectorAll("#options-box button").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) {
      b.classList.add("correct");
    }
  });

  scoreBox.textContent = `Score: ${score}`;
  nextBtn.disabled = false;
}

function disableOptions() {
  const correct = activeQuestions[currentIndex].answer;
  document.querySelectorAll("#options-box button").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) {
      b.classList.add("correct");
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < activeQuestions.length) {
    updateProgress();
    showQuestion();
  } else {
    displayFinal();
  }
});

restartBtn.addEventListener("click", () => {
  quizContainer.classList.add("hidden");
  categorySelection.classList.remove("hidden");
  scoreBox.textContent = "";
  highScoreBox.textContent = "";
});

function displayFinal() {
  questionBox.textContent = `🎉 ${username}, Quiz Over!`;
  optionsBox.innerHTML = "";
  feedback.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
  document.getElementById("timer").style.display = "none";
  progressFill.style.width = "100%";

  scoreBox.textContent = `Score: ${score}/${activeQuestions.length}`;

  const key = `hs_${username}_${currentLevel}_${currentCategory}`;
  const prev = parseInt(localStorage.getItem(key)) || 0;
  if (score > prev) {
    localStorage.setItem(key, score);
    highScoreBox.textContent = `🎉 New High Score: ${score}`;
    confetti();
  } else {
    highScoreBox.textContent = `High Score: ${prev}`;
  }
}

