/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
correct = 0;

// 2. Store the rank of a player
rank = "Not Known"

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1 = prompt(`Name a programming Language that you are learning`)
if (answer1.toUpperCase() == `JAVASCRIPT`) {
  correct +=1
  console.log(correct)
}

answer2 = prompt(`What is the programming language for web dev`)
if (answer2.toUpperCase() == `HTML`){
  correct +=1
  console.log(correct)
}

answer3 = prompt("What language we use for styling")
if (answer3.toUpperCase() == `CSS`) {
  correct += 1
  console.log(correct)
}

answer4 = prompt(`What is the name of the college you are going to`)
if (answer4.toUpperCase() == `DOUGLAS COLLEGE`) {
  correct += 1
  console.log(correct)
}

answer5 = prompt(`What is the city your college is in`)
if (answer5.toUpperCase() == `NEW WEST`) {
  correct += 1
  console.log(correct)
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if(correct==5){
  crown = `a Gold Crown`
  console.log(crown)
}
else if(correct >= 3){
  crown = `a Silver Crown`
  console.log(crown)
}
else if (correct >= 1){
  crown = `a Bronze Crown`
  console.log(crown)
}
// else if(correct == 4){
//   crown = `Silver Crown`
// }
else {
  crown = `No Crown`
  console.log(crown)
}

document.querySelector(`main`).innerHTML = `your score is ${correct} and you get ${crown}`

// 6. Output results to the <main> element

