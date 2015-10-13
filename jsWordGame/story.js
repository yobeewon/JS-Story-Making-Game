var questions = 3;
var questionsLeft = '[' + questions + ' questions left]';
var name = prompt("What is your name?" + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var age = prompt("What is your age?" + questionsLeft);
questions -= 1;
questionsLeft = '[' + questions + ' question left]';
var money = prompt("How much money do you have on you?" + questionsLeft);

alert("Thank you for your input, now your results are on the way.");

var message = "Hello " + name + ". I would think at the age of " + age + " you would have more than just " + money + " in your pocket.";
document.write(message);
