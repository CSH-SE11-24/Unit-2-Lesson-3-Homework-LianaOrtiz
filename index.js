// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let randomWord = ("dog")

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let guess = prompt("Guess a letter")
 

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if(randomWord.includes(guess)){
   console.log("Your letter is in the word")
 }else{
  console.log("Try again")
 }

// Prompt the user to guess the word 
let guessTwo = prompt("Guess thhe word")
// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if(guess == randomWord){
  console.log("You got the word")
}else {
  console.log("Wrong word")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
while (guess !== randomWord){
  let newGuess = prompt("Guess amother letter")

  if(randomWord.includes(newGuess)){
    console.log("You got the letter")
    guess = prompt("Guess the word again")
    if(guessA == randomWord){
      console.log("Correct")
  }else{
      console.log("Wrong")
      attempts++
  }
}

console.log("it took", attempts, "attempts")
// In the while loop, copy the prompt and if/else check for a letter


// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 

