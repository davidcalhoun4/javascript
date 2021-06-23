// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.
let words = ["computer", "water", "window"];
words.push("tray", "screen");
console.log(words);

// # 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.
let numbers = ["a", "b", "c", "d"];
numbers[1] = 1;
console.log(numbers);

// # 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.
// let lottoNumbers = [22, 33, 34, 32, 11];
// let i = 0;
// while (i < lottoNumbers.length) {
//   console.log(lottoNumbers[i]);
//   i++;
// }

// # 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.
let age = [26];
age.push(22, 53, 50);
console.log(age);

// # 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.
let names = ["david", "colin", "maggie"];
names[2] = names[2].toUpperCase();
console.log(names);

// # 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.
let queens = ["RuPaul", "Eureka", "Aquera"];
let index = 0;
while (index < queens.length) {
  console.log(queens[index]);
  index++;
}

// # 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.
let cats = ["archie", "bowser"];
cats.push("boo");
console.log(cats);

// # 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.
let favNums = [1, 2, 3, 4, 5];
favNums[0] = favNums[0] * 10;
console.log(favNums);

// # 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.
let zipCodes = [94102, 94103];
let i = 0;
while (i < zipCodes.length) {
  console.log(zipCodes[i]);
  i++;
}

// # 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.
let countries = ["brazil", "kenya", "japan"];
countries.push("france");
console.log(countries);
