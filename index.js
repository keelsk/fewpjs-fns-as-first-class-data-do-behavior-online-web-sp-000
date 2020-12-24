/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hour = parseInt(time.substring(0,2));
  if (hour < 12) {
  return "Good Morning";
  } elsif ()
  return "Good Afternoon" if hour > 12 && hour < 5; 
  return "Good Evening" if hour > 5; 
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let greeting = document.getElementById('greeting');
  greeting.textContent = string;
}
