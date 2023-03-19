const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hours-hand');


setInterval(setClock, 1000);
function setClock() {
    let currentTime = new Date();
    let secondsRatio = currentTime.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + currentTime.getHours()) / 12;
    setRotation(secondsHand, secondsRatio);
    setRotation(minutesHand, minutesRatio);
    setRotation(hoursHand, hoursRatio);
    console.log(secondsRatio * 360);
}
function setRotation(element, ratio){
    element.style.setProperty('--rotation', ratio * 360 + 'deg');
}
setClock();

// OLD CODE
// let secondsInitialAngle = seconds * 6;
// let minutesInitialAngle = minutes * 6;
// let hoursInitialAngle = hours * 30 + minutes * 0.5;

// secondsHand.style.transform = `rotate(${secondsInitialAngle}deg)`;
// minutesHand.style.transform = `rotate(${minutesInitialAngle}deg)`;
// hoursHand.style.transform = `rotate(${hoursInitialAngle}deg)`;

// const secondHandInterval = setInterval(()=> {
//     secondsHand.style.transform = `rotate(${secondsInitialAngle + 6}deg)`
//     secondsInitialAngle += 6;
// }, 1000)

// const minutesHandInterval = setInterval(()=> {
//     minutesHand.style.transform = `rotate(${minutesInitialAngle + 6}deg)`;
//     minutesInitialAngle += 6;
//     // console.log(minutesInitialAngle);
// }, 60000);

// const hoursHandInterval = setInterval(()=> {
//     hoursHand.style.transform = `rotate(${hoursInitialAngle + 0.5}deg)`;
//     hoursInitialAngle += 0.5;
//     // console.log(hoursInitialAngle);
// }, 60000);