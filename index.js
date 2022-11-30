// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function catName() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield")

 
}

function destructivelyAppendCat(name) {
  let result;

  result = cats.push(name);

  return result;


}

// destructivelyAppendCat('Ralph');


function destructivelyPrependCat(name) {
  let result;

  result = cats.unshift(name);

  return result;
}

// destructivelyPrependCat('Bob');

function destructivelyRemoveLastCat() {
  let result;

  result = cats.pop();

  return result;
}

function destructivelyRemoveFirstCat() {
  let result;

  result = cats.shift();

  return result;
}


function appendCat(name) {
  let result;
  result = [...cats, name];

  return result;

}

function prependCat(name) {
  let result;

  result = [name, ...cats]

  return result
}


function removeLastCat(name) {
  let result;
  result = [...cats]

  result = cats.slice(0,-1);

  return result

  
}

function removeFirstCat(name) {
  let result;

  result = [...cats];

  result = cats.slice(1);

  return result;
}











