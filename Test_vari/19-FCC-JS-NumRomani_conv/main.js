function convertToRoman(num) {
    const numRom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const numInt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
    let romanNumber = ""
    for (let i = 0; i < numInt.length; i++){
        while (numInt[i] <= num) {
            romanNumber += numRom[i]
            num -= numInt[i]
        }
    }
    return romanNumber;
   }
   
   console.log(convertToRoman(86));