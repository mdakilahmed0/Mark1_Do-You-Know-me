var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");
console.log("Welcome to the quiz, "+ userName);

console.log("\n");

var score = 0;

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log("Correct answer!")
      score++;
  } else {
    console.log("Wrong answer!")
    score--;
  }
  console.log("Your score is: "+ score);
  console.log("-----------------------------------");
}


var questions = [
  {
  question: "Whos is the current elected president of India? ",
  answer: "Droupadi Murmu"
  },
  {
  question: "Who is the finance minister of India? ",
  answer: "Nirmala"
  },
  {
  question: "Who is the founder of Boring company? ",
    answer: "Elon Musk"
  },
  {
    question: "Which state is the largest sugarcane producing state in India? ",
    answer: "Uttar Pradesh"
  },
  {
    question: "Which animal is known as the 'Ship of the Desert? ",
    answer: "Camel"
  },
  {
    question: "How many consonants are there in the English alphabet? ",
  answer: "21"
  },
  {
    question: "Name the National river of India? ",
      answer: "Ganga"
  },
  {
    question: "Which colour symbolises peace? ",
    answer: "White"
  },
  {
    question: "How many sides are there in a triangle? ",
    answer: "Three"
  },
  {
    question: "Name the largest planet of our Solar System? ",
    answer: "Jupiter"
  }
];


for(var i=0; i<questions.length; i++){
  var currentQues = questions[i];
  quiz(currentQues.question, currentQues.answer);
};


console.log("Your final score is: "+ score +"/10");