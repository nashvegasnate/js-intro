console.log("Morning work for 1/16/21");

/*function thisIsTrue(arg1, arg2) {
  if (arg1 !== "nice" && arg2 !== "Nice") {
    
  console.log(`You are ${arg1}`);
} else {
  console.log('false');
}
}

 thisIsTrue("nice", "Nice");


 function thisIsTrue(arg1, arg2) {
  if (arg1.length < 3) {
    
  console.log(`You are ${arg1}`);
} else if (arg2.length > 8) {
  console.log(`You are ${arg1}`);
} else {
  console.log("You are nothing!");
}
}
thisIsTrue("nothing, "mickeymouse");
*/
const canDrive = (age) => {
  if (age >= 15) {
    return true;
  }
  return false;
}
console.log(canDrive(13));
