function createPhoneNumber(numbers){
    console.log(numbers)
  let firstPart = numbers.filter((x,i)=> i <= 2 ).join("")
  let secondPart = numbers.filter((x,i)=> i >= 3 && i <= 5 ).join("")
  let lastPart1 = numbers.filter((x,i)=> i >= 6 && i <= 9 ).join("")
  
  let result = `(${firstPart}) ${secondPart}-${lastPart1}`
  console.log(result)
    return result
  }


  /*
6kyu-Create Phone Number


  Write a function that accepts an array of 10 integers (between 0 and 9), 
  that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

BEST SOLUTİONS
-------------------------------------------------------
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

-------------------------------------------------------

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}


-------------------------------------------------------

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

-------------------------------------------------------