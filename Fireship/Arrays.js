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

prices = [20, 30, 50, 80, 100]
prices.forEach((element) => (element = element * .9))
prices.forEach((element) => console.log(element))

