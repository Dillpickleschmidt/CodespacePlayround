/*
1.	forEach()
•	Problem: You have an array of product prices. Apply a 10% discount to each price and print the new prices.
•	Sample Array: [20, 30, 50, 80, 100]
2.	map()
•	Problem: Convert an array of temperatures in Celsius to Fahrenheit.
•	Sample Array: [0, 32, 100]
•	Formula: Fahrenheit = Celsius * 9/5 + 32
3.	filter()
•	Problem: From a list of numbers, create a new array that only includes numbers greater than 50.
•	Sample Array: [22, 55, 33, 70, 42, 85]
4.	find()
•	Problem: Find the first element in an array of strings that is longer than 5 characters.
•	Sample Array: ["apple", "orange", "banana", "kiwi"]
5.	findIndex()
•	Problem: Determine the index of the first number that is odd in an array.
•	Sample Array: [4, 8, 15, 16, 23, 42]
6.	reduce()
•	Problem: Calculate the total sum of all the numbers in an array.
•	Sample Array: [1, 2, 3, 4, 5]

Try implementing these problems in JavaScript to get a better grasp of how each method works!
*/


// forEach() -> Apply 10% discount to each item in array
// function Example1() {
//     // This is temporary
//     const prices = [20, 30, 50, 80, 100]
//     prices.forEach(element => {
//         discountedPrices = element * .9
//         console.log(discountedPrices)
//     })

//     // This permanently modifies the original
//     const prices2 = [20, 30, 50, 80, 100];

//     prices2.forEach((price, index, array) => {
//         array[index] = price * 0.9;
//         console.log(array[index])
//     });



//     // This creates a new list instead of modifying the original
//     const prices3 = [20, 30, 50, 80, 100];

//     const discountedPrices3 = prices3.map(price => price * 0.9);
//     console.log(discountedPrices3); // This will log the array with the discounted prices.
// }

// map() -> Convert an array of tetmperatures in Celsius to Farenheit
// function Example2() {
//     const CtemperatureArray = [...Array(100).keys()]
//     const FtemperatureArray = CtemperatureArray.map(celcius => parseFloat((celcius * (9/5) + 32).toFixed(2)))
//     FtemperatureArray.forEach(farenheit => console.log(farenheit))
// }
// Example2()

// .toFixed Test
// console.log(parseFloat(7.365.toFixed(2))) // = 7.36

// filter() -> From a list of numbers, create a new array that only includes numbers greater than 50.
function Example3() {
    const myArray = [22, 55, 33, 70, 42, 85]
    myArray.filter(number => number > 50).forEach(number => console.log(number))
}
Example3()