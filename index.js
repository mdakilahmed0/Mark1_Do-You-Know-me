
var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + ", Let's see how well you know me.");

console.log("\n");

var score = 0;

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("Correct answer!")
    score++;
  } else {
    console.log("Wrong answer!")
    score--;
  }
  console.log("Your score is: " + score);
  console.log("-----------------------------------");
}


var questions = [
  {
    question: "What is my real name? ",
    answer: "Md Akil Ahmed"
  },
  {
    question: "Which is my birthday? ",
    answer: "10/01"
  },
  {
    question: "Which is my native state? ",
    answer: "Imphal"
  },
  {
    question: "Where do I live now? ",
    answer: "Bangalore"
  },
  {
    question: "Which is favorite superhero? ",
    answer: "Iron Man"
  },
  {
    question: "Which is my favorite movie? ",
    answer: "3 idiots"
  },
  {
    question: "Who is my bestfriend? ",
    answer: "Me"
  },
  {
    question: "Which is my travel destination? ",
    answer: "Bali"
  },
  {
    question: "Where do I want to settle? ",
    answer: "Indonesia"
  },
  {
    question: "Which is my fav dish? ",
    answer: "Chicken"
  }
];


for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  quiz(currentQues.question, currentQues.answer);
};


console.log("Your final score is: " + score + "/10");