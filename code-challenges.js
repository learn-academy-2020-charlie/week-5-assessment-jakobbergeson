// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
const code = (string) => {
// Split string into an array
    let splitString = string.split("")
// map through the array and return the replacement value for each lettter. Else, return the value
    let codedArray = splitString.map(value => {
        if  (value == "a" || value == "A")
            return value = "4"
        else if (value == "e" || value == "E")
            return value = "3"
        else if (value == "i" || value == "I")
            return value = "1"
        else if (value == "o" || value == "O")
            return value = "0"
        else
            return value
    })
// Join the array back into a string
   return codedArray.join("")
}
console.log(code(secretCodeWord1))
console.log(code(secretCodeWord2))



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"
const onlyA = (array) => {
// Use a filter to loop through the array
     arrayOfA =  array.filter(value => {
// Use includes in the filter to return only those values that contain an a or A
        return value.includes("a") || value.includes("A")
  })
// Return the string of the array that only contains the words with a or A in it
  return arrayOfA.toString()
}
 console.log(onlyA(arrayOfWords))





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const fullHouse = (array) => {
// Create an object that will hold the count of each value
    let countObject = {}
// Create a loop that iterates through the array and save the values into a new variable called card
    for(let card of array) {
// Create statement allows the for...of loop to make a property value for the number of times of each card in a hand
      countObject[card] = (countObject[card] || 0) + 1
    }
// Variable called vals that pulls out the property value of each card using Object.values
    let vals = Object.values(countObject)
// If property values make up a full house then return true. Else return false
    if(vals[0] === 2 && vals[1] === 3 || vals[1] === 2 && vals[0] === 3){
      return true
    } else
    return false
  }
  console.log(fullHouse(hand1))
  console.log(fullHouse(hand2))
  console.log(fullHouse(hand3))