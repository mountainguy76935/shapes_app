const animations = [
    'square',
    'rectangle',
    'oval',
    'stick',
    'tinyBall'
];

const numOfShapes = 5;

function createRandomColor() {
  let num;
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f']
  let answer = new Array(6);
  for (let i = 0; i<answer.length; i++) {
    num = Math.floor(Math.random()*15);
    if (num < 10) {
      answer[i] = num
    } else {
      num = num-10;
      answer[i] = alpha[num];
    }
  }
  return answer.join('').toString();
}

function addSpot(event) {
  let counter = 0;
  let num = Math.floor(Math.random()*animations.length);
  function exec() {
    let num1 = Math.floor(Math.random()*360);
    let spot = document.querySelector('.spot');
    let newNode = spot.cloneNode(true);
    newNode.style.left = event.pageX-counter*num+'px';
    newNode.style.top = event.pageY+counter*num+'px';
    newNode.style.transform = 'rotate('+ num1 +'deg)';
    newNode.style['background-color'] = '#' + createRandomColor();
    newNode.style['animation-name'] = animations[num];
    newNode.style['animation-delay'] = '.' + counter*3 + 's';
    document.querySelector('.cleared').appendChild(newNode)
  }
  while(counter<numOfShapes) {
    exec();
    counter++
  }
  setTimeout(clearSome, 9000)
  counter = 0;
};

function clearSome() {
    counter = numOfShapes;
    let clearArea = document.querySelector('.cleared');
    let child = clearArea.firstElementChild;  
    while (counter) { 
    clearArea.removeChild(child); 
    child = clearArea.firstElementChild; 
    counter--
  }
  }

function clearIt() {
  let clearArea = document.querySelector('.cleared');
  let child = clearArea.lastElementChild;  
  while (child) { 
    clearArea.removeChild(child); 
    child = clearArea.lastElementChild; 
  }
}