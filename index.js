function roll(min, max, floatFlag) {
  let r = Math.random() * (max - min) + min;
  return floatFlag ? r : Math.floor(r);
}

//console.log(roll(1,5));

//let userNames = ['James', 'Jane', 'Ryan', 'Rebecca']

//let age = [24, 36, 12, 64]

//let height = ["5.1m", "6m", "5.5m"]

//let user = {
  //  name: userNames[roll(0, userNames.length)],
  //  age: roll(12,65),
  //  height: roll(5.1,6.1, 1).toFixed(1)
 //}

console.log(user);

let possibleProducts = ["apple", "grapes", "watermelon", "orange", "peach", "lemon", "banana", "pineapple", "mango", "cherry", "green apple", "strawberry", "kiwi", "tomato", "coconut", "avocado", "eggplant", "potato", "carrots", "corn", "chili", "cucumber", "lettuce", "broccoli"]