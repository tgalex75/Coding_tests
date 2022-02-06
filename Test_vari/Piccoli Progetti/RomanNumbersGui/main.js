  // When the page is done loading and rendering...
window.addEventListener('DOMContentLoaded', ()=>{
    // Get the appropriate elements
    const sourceField = document.getElementById('sourceField')
    const destinationField = document.getElementById('destinationField')

    // When the user types some input into the first text field...
    sourceField.addEventListener('input', ()=>{
        // Set the value of the destination field to the value of the source field.
        destinationField.textContent = convertToRoman(sourceField.value)
    })
})

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