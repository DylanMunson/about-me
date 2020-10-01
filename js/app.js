'use strict'

//Questions - 1. Did i grow up in port orchard? 2. Do i like pickles? 3. Did i work at a golf course?
// 4. is my favorite color green? 5. am i 17?

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
    alert('That is correct, ' + userName + '!')
} else {
    alert('Wrong, I did in fact grow up in Port Orchard.')
}

var pickleLove = prompt('Next Question. Do I like pickles?');

if(pickleLove.toLowerCase() === 'no' || pickleLove.toLowerCase() === 'n'){
    alert('Thats right! I think pickles are the worst food to ever exist.')
} else {
    alert('Wrong, I think pickles are very nasty.')
}

var myJob = prompt('Did I work as a dishwasher?');

if(myJob.toLowerCase() === 'no' || myJob.toLowerCase() === 'n'){
    alert('Good job, ' + userName + '! I used to work as a cart boy at a golf course.')
} else {
    alert('Wrong, I have never worked as a dishwasher.')
}

var favColor = prompt('Is my favorite color red?');

if(favColor.toLowerCase() === 'yes' || favColor.toLowerCase() === 'y'){
    alert('You are right, ' + userName + '! Red is obviously the superior color.')
} else {
    alert('Wrong, That is not my favorite color.')
}

var myAge = prompt('Am I 17 years of age?');

if(myAge.toLowerCase() === 'yes' || myAge.toLowerCase() === 'y'){
    alert('Nice, ' + userName + '!')
} else {
    alert('That is not correct, ' + userName + '.')
}

var favNumber = 16;
var guess = prompt('What is my favorite number?');
var i = 0;
for(i=0;i<3;i++){
    if(guess == favNumber){
        alert('Correct! Nice Job.');
        break;
    } if (guess < 16) {
        guess = prompt('Wrong, too low. Try again.');
    } if (guess > 16) {
        guess = prompt('Wrong, too high. Try again.');
    }
}



// var favNumber = prompt('What is my favorite number?');

//if(favNumber = 16) {
//    alert('Nice Job!')
// } 
// if (favNumber < 16) {
//    alert('Wrong, too low')
// }
// if (favNumber > 16) {
//    alert('Wrong, too high')
// }