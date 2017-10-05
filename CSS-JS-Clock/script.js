const secondHand = document.querySelector('.second-hand');
const minuteshand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // work on the seconds hand
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  // work on the minutes hand
  const minutes = now.getMinutes();
  const minutesDegree = ((minutes / 60) * 360) + 90;
  minuteshand.style.transform = `rotate(${minutesDegree}deg)`;

  // work on the hour hand
  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360) + 90;
  hourhand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
