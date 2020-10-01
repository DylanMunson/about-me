'use strict'

var correctQuestions = 0;

//Questions - 1. Did i grow up in port orchard? 2. Do i like pickles? 3. Did i work at a golf course?
// 4. is my favorite color green? 5. am i 17?
function questions(){
    var userName = prompt('Hey, What is your name?');{
        alert('Nice to meet you, ' + userName)
    }
    console.log(userName);

    var readyOrNot = prompt('I am going to ask you a series of questions, are you ready?');

    if(readyOrNot.toLowerCase() === 'yes' || readyOrNot.toLowerCase() === 'y'){
        alert('Good. Your computer would have exploded if you answered no.');
    } else {
        alert('Well, too bad. I am asking the quesitons anyway.');
    }

    var homeLand = prompt('Did I grow up in Port Orchard?');

    if(homeLand.toLowerCase() === 'yes' || homeLand.toLowerCase() === 'y'){
        alert('That is correct, ' + userName + '!');
        correctQuestions++;
    } else {
        alert('Wrong, I did in fact grow up in Port Orchard.')
    }

    var pickleLove = prompt('Next Question. Do I like pickles?');

    if(pickleLove.toLowerCase() === 'no' || pickleLove.toLowerCase() === 'n'){
        alert('Thats right! I think pickles are the worst food to ever exist.');
        correctQuestions++;
    } else {
        alert('Wrong, I think pickles are very nasty.')
    }

    var myJob = prompt('Did I work as a dishwasher?');

    if(myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n'){
        alert('Good job, ' + userName + '! I used to work as a cart boy at a golf course.')
        correctQuestions++;
    } else {
        alert('Wrong, I have never worked as a dishwasher.')
    }

    var favColor = prompt('Is my favorite color red?');

    if(favColor.toLowerCase() === 'yes' || favColor.toLowerCase() === 'y'){
        alert('You are right, ' + userName + '! Red is obviously the superior color.')
        correctQuestions++;
    } else {
        alert('Wrong, That is not my favorite color.')
    }

    var myAge = prompt('Am I 17 years of age?');

    if(myAge.toLowerCase() === 'yes' || myAge.toLowerCase() === 'y'){
        alert('Nice, ' + userName + '!')
        correctQuestions++;
    } else {
        alert('That is not correct, ' + userName + '.')
    }
}
questions();

function numberQuestion(){
    var favNumber = 16;
    var i = 0;
    for(i=0;i<4;i++){
        var guess = prompt('What is my favorite number?');
        if (guess == favNumber){
            alert('Correct! Nice Job.');
            correctQuestions++;
            break;
        } else if (i===3) {
            alert('Wrong, no more tries. The correct answer was 16.');
        } else if (guess < 16) {
            guess = alert('Wrong, too low. Try again.');
        } else if (guess > 16) {
            guess = alert('Wrong, too high. Try again.');
        } else {
            guess = alert('That\'s not a number. Try again.');
        }
    }
}

numberQuestion();

function drinkQuestion() {
    var favDrink= ['water','arizona tea','coffee','pepsi'];
    var guess2 = prompt('What is my favorite drink?');
    var i = 0;
    for (i = 0; i < 6; i++) {
        if (guess2.toLowerCase() === favDrink[0] || 
            guess2.toLowerCase() === favDrink[1] ||
            guess2.toLowerCase() === favDrink[2] ||
            guess2.toLowerCase() === favDrink[3]) {
            alert('Correct! Nice Job');
            correctQuestions++;
            break;
        } else {
            guess2 = prompt('Wrong, Try again!');
        }
    }
    alert('The correct answers were: ' + favDrink[0] + ", " + favDrink[1] + ", " + favDrink[2] + ", " + favDrink[3]);
}
drinkQuestion();


alert('Nice job, you got ' + correctQuestions + '/7 questions correct!');




//for(i=0;i<5;i++){
  //  if(guess2.toLowerCase() == 'red'){
    //    alert('Correct! Nice Job.');
      //  break;
   // } else {
     //   guess = prompt('Wrong, Try again.');
   // } 
// }

