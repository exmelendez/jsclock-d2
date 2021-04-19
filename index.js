const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  /* Seconds */
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90; /* adding 90 because it is offset by 90 degrees from inital "transform" in hand class */
  secondsDegree <= 90 ? secondHand.classList.remove('hand-animation') : secondHand.classList.add('hand-animation');
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  /* minutes */
  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  /* hours */
  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);