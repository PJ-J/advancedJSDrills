name = 'PJ';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['apple', 'orange', 'banana'];

// let favFruit;

function printFruits() {
  let favFruit = fruits[1];
  console.log(fruits[0]);

  function printFavFruit() {
    console.log(favFruit);
    let leastFav = 'melon';    
  }
  printFavFruit();
  // console.log(leastFav);
}

printFruits();
// logFavFruit();

someFunc();
function someFunc() {
  console.log("hello PJ");
}


let alertFunc = () => {
  alert('hello');
}
// alertFunc();
