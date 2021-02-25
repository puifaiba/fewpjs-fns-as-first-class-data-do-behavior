/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(twentyFourHourTime) {
  let time = parseInt(twentyFourHourTime.split(":")[0])
  if (time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const newText = document.getElementById("greeting")
  newText.innerText = string;
}
