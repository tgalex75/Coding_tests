function palindrome(str) {
  let newStr = str.split(/\W|_/).join("").toLowerCase()
  let reversed = newStr.split("").reverse().join("").toLowerCase();
  console.log(newStr);
  console.log(reversed);
  if (reversed === newStr){
    return true ;
  } else {
    return false
  }
  
}

console.log(palindrome("A man, a plan, a canal. Panama"));
