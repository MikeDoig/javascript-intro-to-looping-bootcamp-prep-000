function forLoop(array) {
for (let i = 0; i<25; i++) {
  if (i==1) {
  array.push('I am 1 strange loop.')}
  else {
  array.push(`I am ${i} strange loops.`)}
}
return array;
}
<<<<<<< HEAD
function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done";
}
function doWhileLoop(number) {
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
do {
  console.log("I run once regardless.");
}
    while (incrementVariable() < number);
=======
function whileLoop(n) {
  while (n > 0) {
    console.log(n-1);
  }
  return "done";
>>>>>>> 65eddd14aec6a70e38fc2058938da46edb625831
}