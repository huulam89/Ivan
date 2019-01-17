const pickColor = document.getElementById('pick-color');

const mysteryColor = document.getElementById('mystery-color');

function random(num){
  return Math.floor(Math.random() *num);
};

function changeColor(event) {
  const randomColor = 'rgb(' + random(255) + ',' + random(255) + ','
  + random(255) + ')';
  event.target.style.backgroundColor = randomColor;
};

pickColor.onclick= changeColor;
mysteryColor.onwheel= changeColor;
