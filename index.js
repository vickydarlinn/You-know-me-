const readlineSync = require('readline-sync');
const chalk = require('chalk');

const userName=readlineSync.question(chalk.cyan("What is your name?\n"));
function space(){
  console.log("--------------------%%%%%%%%%%--------------------");
}
space();
console.log(chalk.cyan(`Hi ${userName}, I am vicky! Welcome in my cartoon quiz game! \nIn this quiz, you will get 4 options. Choose the correct option and you will awarded by one point!`));
space();
// questions for quiz.
const quiz=[
  {
    question:"Where do I live?\n1.Haryana\n2.Delhi\n3.Rajasthan\n4.Gujarat\n",
    answer:1
  },
  {
    question:"Which animal I love most?\n1.Cat\n2.Dog\n3.Elephant\n4.None of these\n",
    answer:1
  },
  {
    question:"Who is my bestFriend?\n1.Vicky\n2. Himanshu\n3.Tarun \n4. All\n",
    answer:4
  },
  {
    question:"How many girlfriend I have ?\n1. One\n2.Two\n3.Three\n4.Zero \n",
    answer:4
  },
  {
    question:"Who is my favourite actor?\n1.Emraan Hashmi\n2. Arjun Kapoor\n3.Tiger Shroff \n4.Salman Khan\n",
    answer:1
  },
  
];
//  checking of answers
let score=0;
function checker(question,answer){
  let userAnswer= Number(readlineSync.question(question));
  if(userAnswer===answer){
    score++;
    console.log("You are right.\n");
  }
  else{
    score--;
    console.log(`You are wrong. \nCorrect answer is option ${answer}.`)
  }
  console.log(`your current score is ${score}.`)
  space();
}
function starter(){
  for(let i=0;i<quiz.length;i++){
    let currentQuestion=quiz[i];
    checker(currentQuestion.question,currentQuestion.answer);
  }
}
function finished(){
  if(score===5){
    console.log(chalk.green("You are awsmmm...You got full marks"));
  }
  else{
    console.log(chalk.green("you got "+score+" marks out of 5"));
  }
}
starter();
finished();

