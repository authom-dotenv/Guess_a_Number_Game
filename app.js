
//let gameTitle = document.querySelector('h1');

let secretNumber = 0;
let counter = 0;
let usedNumbers = [];
let maxNumber = parseInt(prompt("Number Please"));


//Defines function that assigns text to HTML elements
function assignTextToElement(element, content){
         let htmlElement = document.querySelector(element);
         htmlElement.innerHTML = content;
         return;
}

function userAttempt(){
    
       userNumbers = parseInt(document.getElementById('userNumber').value);
   
       if(userNumbers === secretNumber){
           assignTextToElement('p',`Good job!, you guessed the number. After ${counter} ${counter === 1 ? 'attempt':'attempts'}`);
           document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
        // The user did not guesses the number
         if (userNumbers > secretNumber){
            assignTextToElement('p','The secret number is smaller than this');
         } else if(userNumbers<secretNumber){
            assignTextToElement('p','the secret number is bigger than this');
         }
       }
       
       console.log(userNumbers === secretNumber);
       
       counter++;
       clearNumberBox();
       console.log(counter);
       return;
}
function clearNumberBox(){
      document.querySelector('#userNumber').value = ''
}

function secretNumberGeneration(){
   let ranNum = Math.floor(Math.random()*maxNumber)+1;
   //Check if the list already reached the max len
   if(usedNumbers.length===maxNumber){
      assignTextToElement('p','All posible numbers have already been used =)');
      setTimeout(function(){location.reload();},5000);
   }else{
           //Genate a list of number used during the game to prevent repetition
       if(usedNumbers.includes(ranNum)){
          return secretNumberGeneration();
          }else{
              usedNumbers.push(ranNum);
              console.log(usedNumbers)
              return ranNum;   
               } 

   }
  
}
function initConditions(){
      //Assigning text to HTML elements.
      assignTextToElement('p',`choose a number between 1 and ${maxNumber}`);
      assignTextToElement('h1','Welcome to the guess a number game!');
      secretNumber = secretNumberGeneration();
      counter = 1;
}
function restartGame(){
         // Clear box
         clearNumberBox();
         // Set Initial conditions
         initConditions();
         //Disable restart button
         document.querySelector('#reiniciar').setAttribute('disabled','true');
}

initConditions();
console.log(secretNumber);
console.log(counter);