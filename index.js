//Write a program to print numbers from 1 to 10.
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }

//Write a program to calculate the sum of first 10 natural number.
// let i,num=10,sum=0;
// for(i=1;i<=num;++i)
// {
//     sum = sum + i;
// }
// console.log(sum);


//Write a program that prompts the user to input a positive integer. It should then print the multiplication table of that number. 
// let number = 10;
// for(let i=1;i<=10;i++)
// {
//     let result = i*number;
//     console.log(`${number} * ${i} = ${result}`);
// }

//Write a program to find the factorial value of any number entered through the keyboard. 
// let i,fact = 1,number=5;
// for(i=1;i<=number;i++)
// {
//     fact = fact * i;
// }
// console.log(fact);

//Two numbers are entered through the keyboard. Write a program to find the value of one number raised to the power of another. (Do not use Java built-in method)
// let base = 2, power = 5,result=1;
// for(let i=1;i<=5;i++)
// {
//     result *= base;
// }
// console.log(result);

// Write a program that prompts the user to input an integer and then outputs the number with the digits reversed. For example, if the input is 12345, the output should be 54321.
// let num = 123456789;
// let reversenum = 0;
// while (num !== 0) {
//   reversenum = reversenum * 10;
//   reversenum = reversenum + (num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(reversenum);

//Find the duplicate number from the array 
// let arrNumber = [10,20,30,40,10,50];
// let duplicate = arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!=index)
// console.log(duplicate);

//compare two array are equal are not 
// let arr1 = [4,8,9,10,5];
// let arr2 = [5,10,8,9,10];
// const is_same = arr1.length == arr2.length && arr1.every((curElement)=>{
//     if(arr2.indexOf(curElement) > -1){
//         return (curElement = arr2[arr2.indexOf(curElement)])
//     }
// });
// console.log(is_same);

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// console.log(phrase);

// let a = 10.4;
// console.log(typeof(a));

// console.log("7"/"2");

// let str = "123";
// console.log((typeof str)); // string

// let num = Number(str); // becomes a number 123

// console.log((typeof num)); // number

// let x = 1;

// x = -x;
// console.log(( x )); // -1, unary negation was applied

// console.log('10'+5);
// console.log(5+'10');
// console.log(4+4+'5');

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);
// console.log(a); //3
// console.log(c); //0

// console.log('2'>1);

// const a = prompt("Enter a number");
// let a = '10';
// if(a === 10){
//     console.log('yes');
// }else{
//     console.log('no');
// }


// let year = 2015
// if(year < 2014){
//     console.log("Too early");
// }else if(year > 2014){
//     console.log('Too late');
// }else{
//     console.log('Exactly');
// }

//Array methods 
// const languages = ['Python','Java','Javascript'];
// console.log(languages.length);
// console.log(languages[0]);
// languages.push('CSharp'); // it will add the element in the last of array
// console.log(languages);
// languages.unshift('Data Science'); // it will add the element in the first of array
// console.log(languages);
// languages.pop(); // it will remove the last item of the array
// console.log(languages);
// console.log(languages.pop());
// languages.shift(); // it will remove the element from the starting position from array
// console.log(languages);

// const array = [
//     {
//         name : "Apoorv",
//         age : 10

//     },
//     {
//         name : "Raj",
//         age : 20
//     },
//     {
//         name : "Rahul",
//         age :30
//     }
// ]
// // using for loop  
// for(let i = 0;i<array.length;i++){
//     array[i].age=array[i].age - 10;
//     console.log(array[i]);
// }

//using foreach loop 
// array.forEach((i)=>{
//     console.log(i);
//     i.age = i.age - 10;
// });
// console.log(array);

//using for of loop
// for(let i of array){
//     console.log(i);
//     i.age = i.age - 10;
// }
// console.log(array);

//Filter 
// const students = [
//     {
//         name : "Student 1",
//         marks : 45
//     },
//     {
//         name : "Student 2",
//         marks : 60
//     },
//     {
//         name :  "Student 3",
//         marks : 35
//     }
// ];
// const failed = students.filter((student)=>{
//     // console.log(student);
//     if(student.marks < 45){
//         return true
//     }else{
//         return false;
//     }


// });
// console.log(failed);

//map method
// const users = [
//     {
//         fname : 'John',
//         lname : 'Doe'
//     },
//     {
//         fname : 'Jane',
//         lname : 'Doae'
//     }
// ];
// const finalUser = users.map((user)=>{
//     return {
//         fullname : user.fname + ' ' + user.lname
//     }
// });
// console.log(finalUser);

// reduce method 
// const movies = [
//     {
//         name : "Intersteller",
//         budget : 100
//     },
//     {
//         name : "Social",
//         budget : 150
//     },
//     {
//         name : "Matrix",
//         budget : 300
//     }
// ];
// // using foreach 
// let total = 0;
// movies.forEach((movie)=>{
//     total = total + movie.budget;
// });
// console.log(total);

// const total = movies.reduce((acc,movie)=>{
//     acc = acc + movie.budget;
//     return acc;
// },0);
// console.log(total);

//indexOf Method
// const admin = [2,1,5];
// const user = {
//     name : 'xyz',
//     id : 1
// }
// console.log(admin.indexOf(user.name));


// function bubbleSort(arr){
//     for (let i = 0; i < arr.length - 1; i++){
//         let swapped = false
//         for (let j = 0; j < arr.length - i - 1; j++){
//             // swapping the elements
//             if (arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 swapped = true;
//             }
//         }
//         // if no elements are swapped
//         // that means our array is sorteds
//         if(!swapped) 
//             break;
//     }
//     return arr;
// }
// let arr = [5, 2, 7, 1, 0];
// console.log("Before sorting: ", arr);
// console.log("After sorting: ", bubbleSort(arr));

// let message = "Hello";
// function showMessage()
// {

// }
// showMessage();
// console.log(message);

// function showMessage(text,message){
//     console.log(text,message);
// }
// showMessage("Hey","Apoorv");

// Average and sum of array elements 
// var nums = [10,20,30,40,50]
// var l = nums.length;
// var totalSum = 0
// for(var i=0;i<nums.length;i++){
//     // totalSum = totalSum + nums[i]; // sum of elements of array
//     var avg = totalSum/1;

// }
// console.log(avg);

// let arr = [10,50,20,10,60,10,60,20];
// // let arr = [["abc",10],["xyz",20],["pqr",30],["lmn",40]];
// let map = new Map();
// for(let i = 0; i < arr.length; i++){
//     if(map.has(arr[i])){
//         let tempValue = map.get(arr[i]);
//         map.set(arr[i],++tempValue);
//         continue;
//     }
//     map.set(arr[i], 1);
// }
// // console.log(map);
// let output = {};
// for(let item of map){
//   // console.log(item);
//     output[item[0]] = item[1];
// }
// console.log(output);

// const array1 = [1,4,9,16,25]
// let newArr = array1.map((currEle,index,arr)=>{
//     return currEle > 9;
// });
// console.log(array1);
// console.log(newArr);


//Strings 
// let name = "Abc"
// let name2 = "pqr"
// let Names = new String();
// console.log(name);
// console.log((Names));

// let fname = "abc";
// console.log(fname.length);

//Escame character
// let str = "sbvfkdhfvhdkhvffhvhllvkdlavlfk\"NFDKndksdsk\"";
// console.log(str);

// let age = 18;
// if(age<18){
//     function welcome(){
//         console.log("Hello!");
//     }
// }else{
//     function welcome(){
//         console.log("Greetings");
//     }
// }
// welcome();

// let age = 18;
// if(age<18){
//     welcome();
//     function welcome(){
//         console.log("Hello");
//     }
//     welcome();

// }else{
//     function welcome(){
//         console.log("Greetings");
//     }
// }
// welcome();

// let sum = (a,b) => a + b;
// console.log(sum(1,2));

// let user = new Object()
// let user1 = {}

// let user = {
//     name : "abc",
//     age : 10
// }
// console.log(user.name);
// console.log(user.age);

//Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1

// function num_of_digits(num) {
// 	let n = Math.abs(num), i = 1;
// 	while ((n /= 10)  >= 1) { i++; }
// 	return i;
// }
// let num = 1000;
// result = num_of_digits(num);
// console.log(result);


// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

// let arr = [80,5,100]
// function getFirstValue(arr) {
// 	return arr[0];
// }
// result = getFirstValue(arr);
// console.log(result);


// Create a function that returns true when num1 is equal to num2; otherwise return false.
// Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false


// function isSameNum(num1,num2)
// {
//     if(num1 === num2){
//         return true;
//     }else{
//         return false
//     }

// }
// let num1 = 10
// let num2 = "10"
// let result = isSameNum(num1,num2);
// console.log(result);

// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Examples
// comp("AB", "CD") ➞ true

// comp("ABC", "DE") ➞ false

// comp("hello", "edabit") ➞ false
// Notes
// Don't forget to return the result.

// let str1="AB"
// let str2="CD"
// function comp(str1,str2)
// {
//     if(str1.length == str2.length){
//         return true;
//     }else{
//         return false;
//     }
// }
// let result = comp(str1,str2);
// console.log(result);

// Reverse an Array
// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

// let arr = [1,2,3,4];
// let arr1 = [];
// function reverse(arr1)
// {
//     for(i=arr.length-1;i>=0;i--){
//         arr1.push(arr[i]);
//     }
// }
// let result = reverse(arr1);
// console.log(arr1);

// Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// let height,width,length,result
// function volumeOfBox(width,height,length)
// {
//     let result = width*height*length
// }
// volumeOfBox(4,2,2);
// console.log(result);


// // //reverse a string 
// function reverseString(str) {
//     // Step 1. Create an empty string that will host the new created string
//     var newString = "";

//     // Step 2. Create the FOR loop
//     /* The starting point of the loop will be (str.length - 1) which corresponds to the 
//        last character of the string, "o"
//        As long as i is greater than or equals 0, the loop will go on
//        We decrement i after each iteration */
//     for (var i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; // or newString = newString + str[i];
//     }
//     /* Here hello's length equals 5
//         For each iteration: i = str.length - 1 and newString = newString + str[i]
//         First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
//         Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
//         Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
//         Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
//         Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
//     End of the FOR Loop*/

//     // Step 3. Return the reversed string
//     return newString; // "olleh"
// }

// console.log(reverseString('hello'));

// // //remove duplicate elements from array 
// const names = ["abc","xyz","pqr","xyz","was","abc"];
// // const unique = new Set(names); it will return set 
// //if we want array then we can use split operater 
// const unique = [...new Set(names)];
// console.log(unique);


// let arr = [10,20,10,20,30,40,30,40,50,60,50,70,100];
// let map = new Map();
// for(let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//         let tempValue = map.get(arr[i]);
//         map.set(arr[i],++tempValue);
//         continue;
//     }
//     map.set(arr[i],1);
// }
// let ans = {};
// for(let item of map){
//     ans[item[0]]=item[1];
// }
// console.log(ans);

// let arr = [10,20,10,20,30,40,30,40,50,60,50,70,100];
// let obj = {};
// for(let i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]] = 1;
//     }else{
//         obj[arr[i]] += 1;
//     }
// }
// console.log(obj);

//print array in alphabetical order
// function selectionSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
//       if (minIndex !== i) {
//         // Swap arr[i] and arr[minIndex]
//         const temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
//   }
//   const myArray = ["banana", "apple", "grape", "pear", "orange"];
//   console.log("Original array:", myArray);
//   selectionSort(myArray);
//   console.log("Sorted array:", myArray);

//print first non repeated character from string
// function firstNonRepeatingCharacter(str) {
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
//         return char;
//       }
//     }
//     return "_";
//   }
//   console.log(firstNonRepeatingCharacter("abcabababcd"));

//reverse array
// let arr = [1,2,3,4,5];
// let newArr = [];
// for(let i = arr.length-1;i>=0;i--){
//     newArr.push(arr[i])
// }
// console.log(newArr);

// find min and max of array 
// function findMinMax(){
//     let arr = [10,20,30,40,50,10,60,80,100]
//     let minValue = Infinity;
//     let maxValue = - Infinity;
//     for(let item of arr){
//       // console.log(item);
//         if(item < minValue)
//             minValue = item;

//         if(item > maxValue)
//             maxValue = item;

//     }
//     console.log(minValue);
//     console.log(maxValue);
// }
// findMinMax();

// print 3 random number from array
// function getRandomNumberFromArray(arr,count)
// {
//     const randomNumbers = [];
//     while(randomNumbers.length < count)
//     {
//         const randomIndex = Math.floor(Math.random() * arr.length);
//         randomNumbers.push(arr[randomIndex]);
//     }
//     return randomNumbers;
// }
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const randomNumbers = getRandomNumberFromArray(numberArray,3);
// console.log(randomNumbers);

//remove duplicate charater from string
// function removeDuplicateCharacterFromString(inputString)
// {
//     let result = "";
//     for(let i = 0;i < inputString.length;i++)
//     {
//         // console.log(inputString[i]);
//        if(result.indexOf(inputString[i]) == -1){
//         result += inputString[i];
//        }
//     }
//     return result;
// }
// const input = "abcadadabababao";
// const output = removeDuplicateCharacterFromString(input);
// console.log(output);

                                        // OR
// function removeDuplicate(str){
//     let newstr = "";
//     let charMap = {};
//     for(let char of str){
//         if(!charMap[char]){
//             charMap[char]=true;
//             newstr+=char;
//         }
//     }
//     return newstr;
// }
// let str = "abcabcdefdefg";
// console.log(removeDuplicate(str));

// function removeduplicatearr(arr){
//     let newarr = [];
//     let map = {};
//     for(let ele of arr){
//         if(!map[ele]){
//             map[ele]=true;
//             newarr.push(ele);
//         }
//     }
//     return newarr;
// }
// let arr = [10,20,30,10,20,30,40,50];
// console.log(removeduplicatearr(arr));

// WAP to print occurance of each caharacter from string 
// function printCharacterOccurrence(inputString) {
//     const charCount = {}; // Object to store character occurrences

//     // Count character occurrences
//     for (let i = 0; i < inputString.length; i++) {
//       const char = inputString[i];
//       if (charCount[char]) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }

//     // Print character occurrences in the desired format
//     let output = '{ ';
//     for (const char in charCount) {
//       output += `${char}: ${charCount[char]}, `;
//     }
//     output = output.slice(0, -2); // Remove the trailing comma and space
//     output += ' }';

//     console.log(output);
//   }

//   const input = 'hello';
//   printCharacterOccurrence(input);

// print single array from array of array 
// function concateArray(arrays)
// {
//     const concatedArray = [];
//     for(let i = 0;i<arrays.length;i++)
//     {
//         const currentArray = arrays[i];
//         // console.log(currentArray);
//         for(let j = 0;j<currentArray.length;j++){
//             // console.log(currentArray[j]);
//             concatedArray.push(currentArray[i])
//         }
//     }
//     return concatedArray;
// }
// const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9,[10,50]]];
// const resultArray = concateArray(arrayOfArrays);
// console.log(resultArray);
// var arr = `${arrayOfArrays}`;
// console.log(arr);



// let arr  = [1,2,3,4,5,6,7,8,9,10]
// var output = [];
// var t = '';
// console.log(arr.length);
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== ','){
//         console.log("i",i);
//         t += arr[i];    
//     }

//     if(arr[i] === '[' || arr[i] === ']' || arr[i] === ','){
//         console.log("i",i);
//         output.push(t);
//         t = '';        
//         continue;
//     }

// }
// console.log(output);

// function sortString(inputString)
// {
//     let arr = inputString.split("");// a->0 c->1 b->2
//     for(let i = 0;i<arr.length;i++){ // i = 0, 0<3 condition true 
//         for(let j=0;j<arr.length;j++)// j = 0,0<3 condition true
//         {
//             if(arr[j]>arr[j+1]){ // 0>1 conditon true
//                 const temp = arr[j]; // temp = 0
//                 arr[j] = arr[j+1] // arr[j] = 1
//                 arr[j+1]=temp; // temp = 1
//             }
//         }
//     }
//     return arr.join("");
// }
// const input = "acb";
// const sortedString = sortString(input);
// console.log(sortedString);

// let str = "John Deo"
// console.log(str[0]);
// console.log(str.charAt(1));

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log( str );


// // print single array from array of array 
// const arrayOfArrays = [[1, 2, 3], [4, 5,[50,100], 6], [7, 8, 9,[10,50,[50,["vbbjd"]]]]];
// // console.log(arrayOfArrays);
// var arr = `${arrayOfArrays}`;
// console.log(arr);
// var output = [];
// let t = '';
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === '[' || arr[i] === ']' || arr[i] === ','){
//         output.push(t);
//         t = '';        
//         continue;
//     }
//     if(arr[i] !== ','){

//         t += arr[i];    
//         // console.log(t);
//     }
// }
// if(t !==''){
//     output.push(t);
// }
// console.log(output);


// function reverseNumber(num)
// {
//     let reversedNumber = 0;
//     while(num > 0){
//         const digits = num %10;
//         reversedNumber = reversedNumber *  10 + digits;
//         num = Math.floor(num/10);
//     }
//     return reversedNumber;
// }
// let input = -1234
// const reversed = reverseNumber(input);
// console.log(reversed);

// function reverseNumber(num)
// {
//     let reversedNumber = 0;
//     while(num != 0){
//         const digits = num %10;
//         reversedNumber = (reversedNumber *  10) + digits;
//         num = Math.trunc(num/10);
//     }
//     return reversedNumber;
// }
// let input = -1234
// const reversed = reverseNumber(input);
// console.log(reversed);

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// let arr = [1,2,3,4]
// let narr = [];
// for(let i = 0;i<arr.length;i++){
//     let temp = 1
//     for(let j=0;j<arr.length;j++)
//     {
//         if(arr[i]!=arr[j]){
//             temp = temp * arr[j]
//         }
//     }
//     narr= [...narr,temp];
// }
// console.log(narr);


// let user = {
//     name: "John",
//     age: 30
//   };

//   // loop over keys-and-values
//   for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`); // name:John, then age:30
//   }
  

// let user = {
//     name : "John",
//     age : 30,

//     toString(){
//         return `{name: "${this.name}",age : "${this.age}"}`;
//     }
// };
// console.log(user);

// let student = {
//     name : "John",
//     age : 30,
//     isAdmin : false,
//     courses : ['html','css','js'],
//     spouse : null,
// };
// let json = JSON.stringify(student);
// console.log(typeof json);
// console.log(json);

// function checkPalindrome(string)
// {
//     const len = string.length;
//     for(let i = 0; i < len/2; i++){
//         if(string[i] != string[len - 1 - i]){
//             return 'it is not palindrome string'
//         }
//     }
//     return 'it is palindrome string'
// }
// const string = "apoorv";
// const result  =  checkPalindrome(string);
// console.log(result);

// function findSingleElement(arr) {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//       result ^= arr[i];
//     }

//     return result;
//   }

//   const array1 = [4, 2, 3, 2, 4,3,5];
//   console.log(findSingleElement(array1));

// function rearrangeEvenOdd(arr) {
//     let evenIndex = 0;
//     // Move all even numbers to the beginning of the array
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         // Swap arr[i] with arr[evenIndex]
//         let temp = arr[i];
//         arr[i] = arr[evenIndex];
//         arr[evenIndex] = temp;
//         evenIndex++;
//       }
//     }
//   }
//   const inputArray = [5, 12, 8, 3, 7, 10, 2];
//   rearrangeEvenOdd(inputArray);
//   console.log(inputArray); // Output: [12, 8, 10, 2, 5, 3, 7]

// Input:
// Array: [1, 2, 3, 4, 5, 6, 7]
// Number of Steps: 3

// Output:
// Rotated Array: [5, 6, 7, 1, 2, 3, 4]
// function rotateArrayRight(arr, steps) {
//     const n = arr.length;
//     const rotated = Array(n);

//     for (let i = 0; i < n; i++) {
//       const newPosition = (i + steps) % n;
//       rotated[newPosition] = arr[i];
//     }

//     for (let i = 0; i < n; i++) {
//       arr[i] = rotated[i];
//     }
//   }
//   const inputArray = [1, 2, 3, 4, 5, 6, 7];
//   const steps = 3;
//   rotateArrayRight(inputArray, steps);
//   console.log("Rotated array:", inputArray); // Output: [5, 6, 7, 1, 2, 3, 4]


// Two sum problem

// Input: nums = [1,4,10,-3], target = 14 
// Output: [1,2] or [2,1] # 4 + 10 = 14
// Input: nums = [9,5,1,23], target = 10
// Output: [0,2] or [2,0] # 9 + 1 = 10
// Input: nums = [1,-2,5,10], target = -1
// Output: [0,1] or [1,0] # 1 + -2 = -1

// function twoSum(nums, target) {
//     const numToIndex = {}; // To store numbers and their indices
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
//       if (numToIndex.hasOwnProperty(complement)) {
//         return [numToIndex[complement], i];
//       }
//       numToIndex[nums[i]] = i;
//     } 
//     return null; // No valid solution found
//   }
//   const nums1 = [1, 4, 10, -3];
//   const target1 = 14;
//   console.log(twoSum(nums1, target1)); // Output: [1, 2] or [2, 1]


// let user = {
//     sayHi() { // ignored
//       console.log("Hello");
//     },
//     [Symbol("id")]: 123, // ignored
//     something: undefined // ignored
//   };

//   console.log( JSON.stringify(user) ); // {} (empty object)


// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i * i <= num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }



// Question: You have an array representing a queue of people. Each element in the array represents the height of a person, and the value represents the number of people in front of them who are taller or of the same height. Reconstruct the original queue.

// Expected Input: An array of pairs [height, taller_or_equal_people_in_front].

// Expected Output: The reconstructed queue as an array.

// Input: Array: [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]

// Output: Reconstructed Queue: [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]

// In this example, the input array [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]] represents the heights of people and the number of people taller or of the same height in front of them. The task is to reconstruct the original queue of people. The output is the reconstructed queue [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]], where each element [height, taller_or_equal_people_in_front] represents a person's height and the number of taller or equal-height people in front of them.



// // Reverse of Array
// function reverseArray(arr)
// {
// let start = 0;
// let end = arr.length - 1;
// while(start < end)
// {
//     //we can swap elements here 
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp;

//     start++;
//     end--;
//     }
// }

// const originalArray = [1, 2, 3, 4, 5];
// reverseArray(originalArray);
// console.log(originalArray);


//count the occurance of element in array 
// function countOccurance(arr,n,x)
// {
//     let res = 0;
//     for(let i = 0;i<n;i++)
//     {
//         if (x == arr[i])
//             res++;

//     }
//     return res;
// }
// arr=[1,2,3,4,2,2,2,2,5];
// let n = arr.length;
// let x = 2;
// console.log(countOccurance(arr,n,x));

//Reverse words in a given string 
// function reverseString(str)
// {
//     let arr = str.split(" ");
//     let start = 0;
//     let end = arr.length - 1;
//     while(start <= end)
//     {
//         //we can swap elements here 
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;

//         start++;
//         end--;
//     }
//     return arr.join(" ");
// }
// console.log(reverseString("Hello i love India"));


//Longest Common Prefix using Sorting
// Input: {“apple”, “ape”, “april”}
// Output: “ap”

// function largestCommon(arr)
// {
//     let result = "";
//     for(let i in arr[0])
//     {
//         let count = 0;
//         for(let j=1;j<arr.length;j++)
//         {
//             if(arr[0][i]!==arr[j][i])
//             {
//                 count=1;
//                 break;
//             }
//         }
//         if(count !== 1)
//         {
//             result = result + arr[0][i];
//         }
//     }
//     return result;
// }
// let arr = ["apple","apxe","apil","apoorv"];
// console.log(largestCommon(arr));



//Find the minimum distance between the given two words
// Input: S = { “the”, “quick”, “brown”, “fox”, “quick”}, word1 = “the”, word2 = “fox”
// Output: 3
// Explanation: Minimum distance between the words “the” and “fox” is 3

// Input: S = {“geeks”, “for”, “geeks”, “contribute”,  “practice”}, word1 = “geeks”, word2 = “practice”
// Output: 2
// Explanation: Minimum distance between the words “geeks” and “practice” is 2

// function shortestDistance(str,word1,word2)
// {
//     let start = 1;
//     let end = 1;
//     for(let i in str)
//     {
//         // console.log(str[i]);
//         if(str[i]==word1)
//         {
//             start = i;
//         }
//         if(str[i]==word2)
//         {
//             end = i;
//         }
//     }
//     let result = str.slice(start,end);
//     let len = result.length;
//     console.log(len);
// }
// let str = ["the","quick","brown","fox","quick"];
// let word1 = "the";
// let word2 = "fox";
// console.log(shortestDistance(str,word1,word2));

//Check divisibility by 7
// function checkDivisibility(num)
// {
//     if(num%7==0){
//          return `${num} is divisble by 7`  
//     }else{
//         return `${num} is not divisible by 7`
//     }
// }
// let num = 42;
// console.log(checkDivisibility(num));

// Remove Consecutive Duplicates
// For a given string(str), remove all the consecutive duplicate characters.
// Example:
// Input String: "aaaa"
// Expected Output: "a"

// Input String: "aabbbcc"
// Expected Output: "abc"

// function removeDuplicate(str)
// {
//     let result = "";
//     for(let i=0;i<str.length;i++)
//     {
//         if(str[i]!=str[i+1])
//         {
//             result +=str[i] 
//         }
//     }
//     return result;
// }
// let str = "aabbbbcc";
// console.log(removeDuplicate(str));


// let obj = [{name:"abc",age:25,gender:"Male",Address:"xyz"}];
// const arr = [];
// for(const key in obj[0])
// {
//     arr.push(key,obj[0][key]);
// }
// console.log(arr);

// console.log(obj[0]['name']);

// let arr = ["name","abc","address","xyz","gender","male"];
// let result = {};
// for(let i=0;i<arr.length;i+=2)
// {
//     let key = arr[i];
//     let value = arr[i+1];
//     result[key] = value;
// }
// console.log(result);

// function printDuplicateCharacters(inputString) {
//     const charCount = {}; // Object to store character counts
//     // Loop through the characters in the input string
//     for (const char of inputString) {
//       if (charCount[char]) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }
//     // Loop through the charCount object to print duplicate characters and their counts
//     for (const char in charCount) {
//       if (charCount[char] > 1) {
//         console.log(`${char} : ${charCount[char]}`);
//       }
//     }
//   }
//   const inputString = "Programming";
//   printDuplicateCharacters(inputString);



// For a given a string(str) and a character X, write a function to remove all the occurrences of X from the given string.
// The input string will remain unchanged if the given character(X) doesn't exist in the input string.
// Sample Input 1:
// aabccbaa
// a
// Sample Output 1:
// bccb

// Sample Input 2:
// xxyyzxx
// y
// Sample Output 2:
// xxzxx

// let str = "xxyyzxx";
// let answer = "";
// let compare = "y";
// for(let i in str){
//     if(str[i]==compare){
//         continue;
//     }else{
//         answer += str[i];
//     }
// }
// console.log(answer);


// Highest Occuring Character
// For a given a string(str), find and return the highest occurring character.
// Example:

// Input String: "abcdeapapqarr"
// Expected Output: 'a'
// Since 'a' has appeared four times in the string which happens to be the highest frequency character, the answer would be 'a'.

// Sample Input 1:
// abdefgbabfba
// Sample Output 1:
// b
// Sample Input 2:
// xy
// Sample Output 2:
// x


// function highestoccuringCharacter(str)
// {
//     let map = new Map();
//     for(let i=0;i<str.length;i++){
//         if(map.has(str[i])){
//             let temp = map.get(str[i]);
//             temp = temp + 1;
//             map.set(str[i],temp);
//             continue;
//         }
//         map.set(str[i],1);
//     }
//     let max = 0;
//     let result = '';
//     for(let item of map){
//         // console.log(item);
//         if(max < item[1]){
//             max = item[1];
//             result = item[0];
//         }
//     }
//    return result;
// }
// let str = "abdefgbabfba";
// console.log(highestoccuringCharacter(str));


//                                                   OR

// function highestOccurringCharacter(str) {
//     const charCount = {}; // Object to store character counts

//     // Loop through each character in the input string
//     for (const char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     let maxCount = 0; // Variable to keep track of the maximum count
//     let resultChar = ''; // Variable to store the character with the highest count

//     // Loop through the character counts object to find the highest occurring character
//     for (const char in charCount) {
//         if (charCount[char] > maxCount) {
//             maxCount = charCount[char]; // Update the maximum count
//             resultChar = char; // Update the result character
//         }
//     }

//     return resultChar; // Return the character with the highest count
// }

// const str = "abdefgbabfba";
// console.log(highestOccurringCharacter(str)); // Output the character that occurs the most


// *
// **
// ***
// ****
// *****
// let n = 5;
// let string = "";
// for(i=1;i<=n;i++){   
//         string =string + "*";
//         console.log(string);
// }


//      *
//     **
//    ***
//   ****
//  ****


// let n  = 5;
// let string = "";
// for(i=1;i<=n;i++){
//     for(j=0;j<n-i;j++)
//     {
//         string+=" ";
//     }
//     for(k=0;k<i;k++){
//         string+="*";
//     }
//     string+="\n";
// }
// console.log(string);

//Write a program to swap two string variables without using a third variable
// let a = "hello";
// let b = "world";
// console.log(a);
// console.log(b);
// a=a+b;
// b=a.slice(0,a.length-b.length);
// a=a.slice(b.length);
// console.log(" ");
// console.log(a);
// console.log(b);


//Program to check if a subarray with 0 sum exits or not
// Input:
// [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]

// Output:
// true
// [3, 4, -7]
// [4, -7, 3]
// [-7, 3, 1, 3]
// [3, 1, -4]
// [3, 1, 3, 1, -4, -2, -2]
// [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]

// function sumwithZero(arr)
// {
//     for(let i=0;i<arr.length;i++){
//         let sum = arr[i];
//         if(sum==0){
//             return  true;
//         }
//         for(let j=i;j<arr.length;j++){
//             sum +=arr[j];
//             if(sum==0)
//             {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(sumwithZero([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]));
// console.log(sumwithZero([3,6]));


// Implement a function in JavaScript that filters an array of objects based on the value or index.
// const arr = [
//   { name: "Amir", id: "1" },
//   { name: "Samlan", id: "2" },
//   { name: "Shahrukh", id: "0" },
// ];

// // console.log(arr,0); // { name: "Amir", id: "1" }
// console.log(arr, "Amir"); // { name: "Amir", id: "1" }
// // console.log(arr, "0"); // { name: "Shahrukh", id: "0" }

//Write a program that uses a loop to print all even numbers from 1 to 20.
// for(let i=1;i<=20;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }

// Factorial of a number 
// let number = 10;
// let fact = 1;
// for(let i = 1;i<=number;i++)
// {
//     fact *=i;
// }
// console.log(fact);

//Generate and display the multiplication table of a given number using a loop
// let number = 6;
// let range = 10;
// for(let i =1;i<=range;i++)
// {
//     let res = i * number;
//     console.log(number + " * " + i + " = " + res);
// }

//Write a function that takes a string as an argument and returns whether it's a palindrome or not.
// function PalindromeCheck(str)
// {
//     let len = str.length;
//     for(let i=0;i<len/2;i++){
//         if(str[i]!=str[len-1-i]){
//             return "it is not palindrome string";
//         }
//     }
//     return "It is palindrome string";
// }
// let str = "apoorv"; 
// console.log(PalindromeCheck(str));

//Implement a function to generate and return the first N numbers in the Fibonacci series.
// let number = 10;
// let n1 = 0,n2=1,nextterm;
// for(let i=1;i<=number;i++)
// {
//     console.log(n1);
//     nextterm = n1+n2;
//     n1=n2;
//     n2=nextterm;
// }

// let user = {
//     name:"abc",
//     age : 20
// };
// for(let value of Object.entries(user)){
//     console.log(value);
// }


//Create a function that determines if a given number is prime or not.
// let number = 24;
// let isPrime = true;
// if(number == 1){
//     console.log("1 is neither a prime or composite number");
// }
// else if(number > 1)
// {
//     for(let i=2;i<number;i++){
//         if(number % i == 0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(`${number} is prime number`);
//     }else{
//         console.log(`${number} is not prime number`);
//     }
// }
// else{
//     console.log("the number is not a prime number");
// }


// Write a function that modifies a list by squaring each element and then appending the squared elements to the list.
// function squareAndAppend(arr)
// {
//     let length = arr.length;
//     for(let i=0;i<length;i++){
//         let square = arr[i] * arr[i];
//         arr.push(square);

//     }
// }
// let arr = [1,2,3];
// squareAndAppend(arr);
// console.log(arr);

//Write a program that calculates the sum and product of all elements in an array of integers.
// function average(){
//     let length = arguments.length;
//     let sum = 0;
//     for(let i=0;i<length;i++){
//         sum = sum + arguments[i];
//     }
//     return sum/length;
// }
// console.log(average(1,2,3,4,5));

// Implement a function that rotates the elements of an array to the left by a given number of positions.
// function Rotate(arr,len,d)
// {
//     let temp = new Array(len);
//     let k  = 0;
//     for(i=d;i<len;i++){
//         // console.log(arr[i]); //3,4,5,6,7
//         temp[k]=arr[i];
//         k++;
//     }
//     for(let i=0;i<d;i++){
//         // console.log(arr[i]); // 1,2
//         temp[k]=arr[i];
//         k++;
//     }
//     for(let i = 0;i<len;i++){
//         console.log(temp[i]+" ");
//     }
// }
// let arr = [1,2,3,4,5,6,7];
// let len = arr.length;
// let d = 2; // no of times rotation
// Rotate(arr,len,d);

// Create a function that sorts an array of strings in alphabetical order.
// function sort(arr)
// {
//     let i = 0,k;
//     while(i<arr.length){
//         k = i + 1;
//         while(k<arr.length){
//             if(arr[k]<arr[i]){
//                 let temp = arr[i];
//                 arr[i]=arr[k];
//                 arr[k]=temp;
//             }
//             k++;
//         }
//         i++;
//     }
//     return arr;
// }
// let arr = ["xyz","pqr","abc","bba","bca","mca","ab"];
// console.log(sort(arr));


// Create a program that reads a JSON file containing information about students and calculates their average scores.
// let students = [['David',80],['Vinoth',77],['Divya',88],['Ishitha',95],['Thomas',68]];
// let avgMarks = 0;
// for(let i = 0;i<students.length;i++){
//     avgMarks +=students[i][1];
//     var avg = (avgMarks/students.length);
// }
// console.log("Average grade: "+(avgMarks)/students.length);
// if(avg<60){
//     console.log("Grade : F");
// }
// else if(avg < 70){
//     console.log("Grade : D");
// }
// else if(avg < 80){
//     console.log("Grade : C");
// }
// else if(avg < 90){
//     console.log("Grade : B");
// }
// else if(avg < 100){
//     console.log("Grade : A");
// }

// Given an array of objects and two keys “on” and “who”, aggregate the “who” values on the “on” values.
// Input:
// const endorsements = [ 
//   { skill: 'css', user: 'Bill' }, 
//   { skill: 'javascript', user: 'Chad' }, 
//   { skill: 'javascript', user: 'Bill' }, 
//   { skill: 'css', user: 'Sue' }, 
//   { skill: 'javascript', user: 'Sue' }, 
//   { skill: 'html', user: 'Sue' } 
// ];

// console.log(aggregate(endorsements, "user", "skill"));

// Output:
// [
//   {
//     "user": "Bill",
//     "skill": [
//       "css",
//       "javascript"
//     ]
//   },
//   {
//     "user": "Chad",
//     "skill": [
//       "javascript"
//     ]
//   },
//   {
//     "user": "Sue",
//     "skill": [
//       "css",
//       "javascript",
//       "html"
//     ]
//   }
// ]

// function aggregate(endorsements, userKey, skillKey) {
//     const aggregated = {};

//     endorsements.forEach(item => {
//         const user = item[userKey];
//         const skill = item[skillKey];

//         if (!aggregated[user]) {
//             aggregated[user] = { [userKey]: user, [skillKey]: [] };
//         }

//         if (!aggregated[user][skillKey].includes(skill)) {
//             aggregated[user][skillKey].push(skill);
//         }
//     });

//     return Object.values(aggregated);
// }

// const endorsements = [
//     { skill: 'css', user: 'Bill' },
//     { skill: 'javascript', user: 'Chad' },
//     { skill: 'javascript', user: 'Bill' },
//     { skill: 'css', user: 'Sue' },
//     { skill: 'javascript', user: 'Sue' },
//     { skill: 'html', user: 'Sue' }
// ];

// console.log(aggregate(endorsements, "user", "skill"));


// const endorsements = [
//     { skill: 'css', user: 'Bill' },
//     { skill: 'javascript', user: 'Chad' },
//     { skill: 'javascript', user: 'Bill' },
//     { skill: 'css', user: 'Sue' },
//     { skill: 'javascript', user: 'Sue' },
//     { skill: 'html', user: 'Sue' }
//   ];
//   let map = new Map();
//   for(let i = 0; i < endorsements.length; i++){
//     if(map.has(endorsements[i].user)){
//         let tempData = map.get(endorsements[i].user);
//         tempData.skill.push(endorsements[i].skill);
//         map.set(endorsements[i].user, tempData);
//         continue;
//     }
//     let data = {
//         'user':endorsements[i].user,
//         'skill':[
//             endorsements[i].skill
//         ]
//     }
//     map.set(endorsements[i].user, data);
//   }
//   let result = [];
//   for(let user of map){

//     let temp = {
//         user: user[0],
//         skill: user[1].skill
//     }
//     result.push(temp);
//   }
//   console.log(result);

// Find the largest sum of contiguous subarray
// Input:
// [-2, -3, 4, -1, -2, 1, 5, -3]

// Output:
// 7
// he subarray from index 2 to 6 has the largest sum 4 + -1 + -2 + 1 + 5 = 7.

// function largestSum(arr)
// {
//     let max_so_far = Number.MIN_SAFE_INTEGER;
//     let max_current = 0;
//     for(let i = 0;i<arr.length;i++){
//         max_current += arr[i];
//         max_so_far = Math.max(max_so_far, max_current);
//         if (max_current < 0) {
//             max_current = 0;
//           }
//       }

//       //return max sum
//       return max_so_far;
//    };
// console.log(largestSum([-2, -3, 4, -1, -2, 1, 5, -3]));

// You are in charge of security at a casino, and there is a thief who is trying to steal the casino's money! Look over the security diagrams to make sure that you always have a guard between the thief and the money! There is one money location, one thief, and any number of guards on each floor of the casino. Task: Evaluate a given floor of the casino to determine if there is a guard between the money and the thief, if there is not, you will sound an alarm.
// function isSecure(floor){
//     let moneyIndex = floor.indexOf('M');
//     let thiefIndex = floor.indexOf('T');
//     let guardIndexices = [];
//     for(let i =0;i<floor.length;i++){
//         if(floor[i]=="G")
//         {
//             guardIndexices.push(i);
//         }
//     }
//     for(let guardIndex of guardIndexices){
//         if((guardIndex>moneyIndex && guardIndex<thiefIndex) || 
//             (guardIndex<moneyIndex && guardIndex>thiefIndex)){
//                 return "Secure";
//             }
//     }
//     return "Alarm";

// }
// let casinoFloor = "G...M.T..G";
// let result = isSecure(casinoFloor);
// console.log(result);


// Print all subarrays with a given sum k in an array
// Input:
// [3,4,-7,1,3,3,1,-4]
// k = 7

// Output:
// [3, 4]
// [3, 4, -7, 1, 3, 3]
// [1, 3, 3]
// [3, 3, 1]

// function printSubArray(arr,k)
// {
//     let length = arr.length;
//     for(let i=0;i<length;i++){
//         let sum = 0;
//         let temp = [];
//         for(let j =i;j<length;j++){
//             sum +=arr[j];
//             temp.push(arr[j]);
//             if(sum==k){
//                 console.log(temp);
//             }
//         }
//     }
// }
// printSubArray([3,4,-7,1,3,3,1,-4],7);


// Input: arr[] = [ 4 , 5 , 2 , 25 ]
// Output:  ``````4      –>   5
//                5      –>   25
//                2      –>   25
//               25      –>   -1
// Explanation: except 25 every element has an element greater than them present on the right side

// Input: arr[] = [ 13 , 7, 6 , 12 ]
// Output: ``````` 13      –>    -1
//                 7       –>     12
//                 6       –>     12
//                12       –>     -1
// Explanation: 13 and 12 don’t have any element greater than them present on the right side


// let arr = [4,5,2,25];
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             console.log(arr[i]+" -> "+arr[j]);
//             break;
//         }
//     }
//     if(arr[j]===undefined){

//         console.log(arr[i]+" -> "+"-1");
//     }

// }

//print duplicate characetrs of a string 
// let str = "aabbccddeex";
// for(i=0;i<str.length;i++){
//     for(j=i+1;j<str.length;j++){
//         if(str[i]==str[j]){
//             console.log(str[i]);
//         }
//     }
// }


// Problem Description
// Rahul works as a secret agent. He wants to send a message to his teammates and at the same time he doesn’t want anyone else to understand his message, except his teammates.

// So, he decided to reverse all the words in the message which have an odd length. Print the final message which he will be sending to his teammates.


// Input format
// Input message string


// Output format
// Print the string with all odd length words reversed


// Sample Input 1
// One Two three Four


// Sample Output 1
// enO owT eerht Four


// Explanation
// One is of odd length, so reverse it.

// Two is of odd length, so reverse it.

// three is of odd length, so reverse it.

// Four is of even length, so don't reverse it.


// Constraints
// 1<=message.length<=100.



// this is problem statement 




// Problem Description
// N students appeared for the board exams from a class. The answer of each student is a string (a single word). You are assigned the task of checking how many answers are copied. You have to check each consecutive pair of answers (words), to see if they have the same starting character and ending character. This implies a copy. Return the count of such copying.


// Input format
// First line contains an integer n denoting the number of answers.

// Second line contains n space separated answers (Note that each answer is a word)


// Output format
// An integer representing how many copying instances were found.


// Sample Input 1
// 4

// abcd abdd da dd


// Sample Output 1
// 1


// Explanation1
// The first character of both answer[0] and answer[1] is 'a', and last one is - 'd'. So this is copied.

// The first character of words[1] is 'a', but the first character of words[2] is 'd'. So this is not copied.

// The last character of words[2] is 'a', but the last character of words[3] is 'd'. So this is not copied.


// Constraints
// 1 <= n <= 1000 this is problem statement 

// let number1 = 21;
// let number2 = 100;
// for(let i = number1;i<=number2;i++){
//     let flag = 0;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag=1;
//             break;
//         }
//     }
//     if(i>1 && flag==0){
//         console.log(i);
//     }
// }

// In the above program, the user is prompted to enter lower and higher bound numbers. Then the prime number between those numbers (including the lower and higher bounds, if any) are listed out.

// Two nested for loops are used in the above program.

// The first for loop is used to loop between the numbers provided by the user. In this case, from 2 to 10.
// A variable flag is set to 0.
// The second for loop is used to loop between 2 to the number that is stored in i.
// Inside the second loop, the value of i is divided by each number from 2 to value one less than i (i - 1).
// While dividing, if any number remainder results in 0, that number is not a prime number. So the variable flag is set to 1.
// Finally, all the numbers that have a flag 0 (not divisible by other numbers) are printed.

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// function lessThan100(a,b){
//     if(a+b<=100){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let a=3,b=77;
// console.log(lessThan100(a,b));

//Question
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]


// function isSeven(num)
// {
//     if(num==7){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// console.log(isSeven(7));

// Given two strings, firstName and lastName, return a single string in the format "last, first".

// Examples
// concatName("First", "Last") ➞ "Last, First"

// concatName("John", "Doe") ➞ "Doe, John"

// concatName("Mary", "Jane") ➞ "Jane, Mary"

// function concatName(firstname,lastname)
// {
//     return `${lastname} ${firstname}`
// }
// console.log(concatName("John","Doe"));

// Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true

// isEmpty(" ") ➞ false

// isEmpty("a") ➞ false

// function isEmpty(str)
// {
//     if(str==""){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEmpty(" "));

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// Examples
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

// function makesTen(num1,num2)
// {
//     if(num1==10||num2==10){
//         return true;
//     }
//     else if(num1+num2==10){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(makesTen(9,1));

//Question 
// find the 3rd 1 index 

// let arr = [1,2,3,1,5,6,1,9,10,15];
// let len = arr.length;
// let count = 0;
// let target = 1;
// for(let i=0;i<len;i++){
//     if(arr[i]==target){
//         count++;
//     }
//     if(count==3){
//         // console.log(target);
//         break;
//     }
// }
// console.log(count);


// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

// function incrementItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i]++;
//     }
//     return arr;
//   }
// let arr = [2,4,6,8];
// console.log(incrementItems(arr));    

// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// function countTrue(arr){
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==true){
//             count++;
//         }
//     }
//     return count;
// } 
// let arr = [true, false, false, true, false];
// // let arr = [];
// // let arr = [false, false, false, false];
// console.log(countTrue(arr));

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// let obj = {
//     a:1,
//     b:2
// }
// let arr = [];
// for(let key in obj){
//     arr.push([key,obj[key]]);

// }
// console.log(arr);

// let arr =[['a',10],['b',20],['c',30],['d',40],['e',50]];
// let obj = {};
// for(let [key,value] of arr){
//     // console.log(key,value);
//     obj[key] = value;
// }
// console.log(obj);


// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

// function concat(n){
//     let result=[];
//     for(let i in arr)
//     {
//         for(let j in arr[i])
//         {
//             result.push(arr[i][j]);
//         }
//     }
//     return result;
// }
// let arr = [[1,2,3],[4,5],[6,7]];
// let n = arr;
// console.log(concat(n));

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// function arrayOfMultiples(num,length)
// {
//     let arr=[];
//     for(i=1;i<=length;i++)
//     {
//         arr.push(num*i);
//     }
//     return arr;
// }
// console.log(arrayOfMultiples(7,5));

// Write a function that converts an object into an array of keys and values.
// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

// let obj = {
//     D:1,
//     B:2,
//     C:3
// }
// let arr=[];
// for(let key in obj)
// {
//     // console.log(key); // D,B,C
//     // console.log(obj[key]);// it return value corresponding to key
//     arr.push(key,obj[key]);
// }
// console.log(arr);

// Examples
// sortIt([4, 1, 3]) ➞ [1, 3, 4]

// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

// sortIt([4, [1], 3]) ➞ [[1], 3, 4]

// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

// function sort(arr)
// {
//     let i = 0,j;
//     while(i<arr.length){
//         j = i + 1;
//         while(j<arr.length)
//         {
//             if(arr[j] < arr[i])
//             {
//                 let temp = arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//             j++;
//         }
//         i++;
//     }
// }
// let arr = [[3], 4, [2], [5], 1, 6];
// // let arr = [5,10,15,2,20];
// sort(arr);
// console.log(arr);


// Create a function that takes an array of numbers and returns the second largest number.

// Examples
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23

// function secondLargest(arr,arr_size){
//     let i,first,second;
//     if(arr_size<2){
//         console.log("invalid input");
//         return;
//     }
//     arr.sort();
//     for(i=arr_size-2;i>=0;i--){
//         if(arr[i]!=arr[arr_size-1]){
//             console.log(arr[i]);
//             return;
//         }
//     }
// }
// let arr = [10, 40, 30, 20, 50];
// let len = arr.length;
// secondLargest(arr,len);
// console.log(arr);

// Examples
// clone([1, 1]) ➞ [1, 1, [1, 1]]

// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]

// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]

// function clone(arr)
// {
//     arr.push(arr.slice(0));
//     return arr;
// }
// let arr = [1,2,3];
// console.log(clone(arr));

// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

// function getBudgets(arr)
// {
//     let total=0;
//     for(let i of arr){
//         // console.log(arr[i]);
//         total = total + i.budget;
//     }
//     // console.log(total);
//     return total;
// }
// let arr =[
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ];
// console.log(getBudgets(arr));

// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// function keysAndValues(obj)
// {
//     let arr = [];
//     let keystore=[];
//     let valueStore = [];
//     for(let key in obj)
//     {

//         keystore.push(key);
//         valueStore.push(obj[key]);
//     }

//     arr.push(keystore);
//     arr.push(valueStore);
//     return arr;
// }
// let obj = {a:1,b:2,c:3};
// console.log(keysAndValues(obj));

// Write a function that inverts the keys and values of an object.

// Examples
// invert({ "z": "q", "w": "f" })
// ➞ { "q": "z", "f": "w" }

// invert({ "a": 1, "b": 2, "c": 3 })
// ➞ { 1: "a", 2: "b", 3: "c" }

// invert({ "zebra": "koala", "horse": "camel" })
// ➞ { "koala": "zebra", "camel": "horse" }


// function invert(obj)
// {
//     let newObj = {};
//     for(let key in obj){
//         let value = obj[key];
//         newObj[value]=key;
//     }
//     return newObj;
// }
// let obj = { "z": "q", "w": "f" };
// console.log(invert(obj));


// let str1 = ''; 
// let str2 = '';
// for(let i = 1; i <= 5; i++){
//     str1 += '*';
//     if(i === 5){
//         str2 += str1;
//     }else{
//         str2 += str1 + '\n';
//     }
// }
// console.log(str2);


// const arrayOfArrays = [[1, 2, 3], [4, 5,[50,100], 6], [7, 8, 9,[10,50,[50,["vbbjd"]]]]];
// // console.log(arrayOfArrays);
// var arr = `${arrayOfArrays}`;
// // console.log(arr);
// var output = [];
// let t = '';
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === '[' || arr[i] === ']' || arr[i] === ','){
//         output.push(t);
//         t = '';        
//         continue;
//     }
//     if(arr[i] !== ','){
      
//         t += arr[i];    
//         // console.log(t);
//     }
// }
// if(t !==''){
//     output.push(t);
// }
// console.log(output);



// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

// Examples
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }

// expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
// ➞ { "Gucci Fur": 24600 }

// expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
// ➞ {}

// function expensiveOrders(orders,cost){
//     let newobj = {};
//     for(let key in orders){
//         // console.log(orders[key]);
//         // console.log(key);
//         if(orders[key]>cost){
//             newobj[key] = orders[key];
//             // console.log(newobj[key]);
//         }
//     }
//     return newobj;
// }
// let orders = { "a": 3000, "b": 200, "c": 1050 };
// let cost = 1000;
// console.log(expensiveOrders(orders,cost));

// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

// Examples
// countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

// countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

// countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }

// function countAll(inputString) {
//     const result = {
//         "LETTERS": 0,
//         "DIGITS": 0
//     };
//     for (const char of inputString) {
//         if (/[a-zA-Z]/.test(char)) {
//             result["LETTERS"]++;
//         } else if (/[0-9]/.test(char)) {
//             result["DIGITS"]++;
//         }
//     }
//     return result;
// }
// console.log(countAll("Hello World")); // Output: { "LETTERS": 10, "DIGITS": 0 }
// console.log(countAll("H3ll0 Wor1d")); // Output: { "LETTERS": 7, "DIGITS": 3 }
// console.log(countAll("149990")); // Output: { "LETTERS": 0, "DIGITS": 6 }


// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

// const GUEST_LIST = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina"
// }
// Write a function that takes in a name and returns a name tag, that should read:

// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:

// "Hi! I'm a guest."
// Examples
// greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

// greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

// greeting("Monti") ➞ "Hi! I'm a guest."
// const GUEST_LIST = {
//     Randy: "Germany",
//     Karla: "France",
//     Wendy: "Japan",
//     Norman: "England",
//     Sam: "Argentina"
//   };
//   function greeting(name) {
//     if (GUEST_LIST.hasOwnProperty(name)) {
//       const country = GUEST_LIST[name];
//       return `Hi! I'm ${name}, and I'm from ${country}.`;
//     } else {
//       return "Hi! I'm a guest.";
//     }
//   }
//   console.log(greeting("Randy")); 
//   console.log(greeting("Sam"));   
//   console.log(greeting("Monti")); 

//Maps
// let map = {1:"abc",2:"def",1:"xyz"};
// // console.log(map[0]); // does not support index 
// console.log(map); // Duplicate Keys are not allowed 

// let map = {1:"abc",2:"abc"};
// console.log(map);
// map[5]="pqr";
// console.log(map);
// map[1]="xyz";
// console.log(map);

// d = new Map();
// console.log(typeof(d));
// let map = new Map();
// map.set(100,"abc");
// map.set(200,"xyz");
// map.set(300,"pqr");
// console.log(map.get(100,"abc"));

// let s = "abcdabcdef";
// let arr = s.split('');
// let hashmap = {};
// for(let i=0;i<arr.length;i++){
//     if(!hashmap[arr[i]]){
//         hashmap[arr[i]]=1;
//     }else{
//         hashmap[arr[i]]+=1;
//     }
// }
// console.log(hashmap);

// let arr = [1,2,3,4,5,1,2,3,4,5];
// let obj = {};
// for(let i=0;i<arr.length;i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]]=1;
//     }else{
//         obj[arr[i]]+=1;
//     }
// }
// console.log(obj);



// const personMap = new Map();
// personMap.set("name","John");
// personMap.set("age",25);
// personMap.set("address","xyz");
// // for(let [key,value] of personMap){
// //     console.log(key,value);
// // }
// console.log(personMap.get("name"));
// console.log(personMap.size);
// console.log(personMap.has("age"));
// console.log(personMap.delete("name"));
// console.log(personMap);
// console.log(personMap.size);
// // console.log(personMap.clear());
// console.log(personMap);

// let obj = {names:"abc"};
// let map = new Map();
// map.set(obj,123);
// console.log(map.get(obj));

// let map = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
// ]);
// for(let vegetable of map.keys()){
//     console.log(vegetable);
// } it will print keys of a map by using keys()
// for(let amount of map.values()){
//     console.log(amount);
// } it will print values of a map by using values()
// for(let entry of map){
//     console.log(entry);
// } it will give both key and value from a map 

// we can create a map from an object like this:
// let obj = {
//     user : "Apoorv",
//     role : "Admin"
// }
// let map = new Map(Object.entries(obj));
// console.log(map.get('user'));

//we can create object from map
// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);
// let obj = Object.fromEntries(map.entries());
// console.log(obj.orange);

// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

// function mapLetters(str)
// {
//     let obj = {};
//     for(let i=0;i<str.length;i++){
//       let char = str[i];
//       if(!obj[char]){
//         obj[char]=[i];
//       }else{
//         obj[char].push(i);
//       }
//     }
//     return obj;
// }
// let str = "dodo";
// console.log(mapLetters(str));

// let map = new Map();
// let str = "apoorv";
// for(let i=0;i<str.length;i++){
//     let data = [];
//     if(map.has(str[i])){
//         let temp = map.get(str[i]);
//         temp.push(i);
//         map.set(str[i],temp);
//         continue;
//     }
//     data.push(i);
//     map.set(str[i],data);
// }
// let result = {};
// for (let [key, value] of map) {
//   result[key] = value;
// }
// console.log(result);

//hcf of two number
// function findHcf(){
//     let rem = 3;
//     let a = 8;
//     let b = 9;    
//     if(a === b){
//         return a;
//     }
//     if(b%a === 0){
//         return a;
//     }
//     while(rem !== 1){
//         rem = b%a;
//         if(rem === 1){
//             a = rem;
//             break;
//         }
//         if(rem === 0){
//             break;
//         }
//         a = rem;
//     }
//     return a;
//     }
//     console.log(findHcf());

// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.

// Examples
// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
// ]
//   { name: "John", avgNote: 4 }

// function calculateAverageNotes(students){

//     let avgNotes = [];
//     for(let i=0;i<students.length;i++){
//         // console.log(students[i].notes); -> [3,5,4]
//         const student = students[i];
//         // console.log(student); -> { name: 'John', notes: [ 3, 5, 4 ] }
//         let totalNotes = 0;
//         for(let j=0;j<student.notes.length;j++){
//             // console.log(student.notes[j]); ->3,5,4
//             totalNotes= totalNotes + student.notes[j];
//             // console.log(totalNotes); ->3,8,12
//         }
//         let avgNote=0;
//         if(student.notes.length!=0){
//             avgNote=totalNotes/student.notes.length; // -> 4
//         }
//         // console.log(avgNote); -> 4
//         avgNotes.push({name:student.name,avgNote});
//     }
//     return avgNotes;

// }
// const studentData = [
//     {
//         name:"John",notes:[3,5,4]
//     }
// ];
// const avgNotes = calculateAverageNotes(studentData);
// console.log(avgNotes);


// Create a function that takes an array of students and returns an array of their top notes. If the student does not have notes then let's assume their top note is equal to 0.

// Examples
// getStudentTopNotes([
//   {
//     id: 1,
//     name: "Jacek",
//     notes: [5, 3, 4, 2, 5, 5]
//   },
//   {
//     id: 2,
//     name: "Ewa",
//     notes: [2, 3, 3, 3, 2, 5]
//   },
//   {
//     id: 3,
//     name: "Zygmunt",
//     notes: [2, 2, 4, 4, 3, 3]
//   }
// ]) ➞ [5, 5, 4]

// function getStudentTopNotes(students){
//     const topNotes = [];
//     for(student of students){
//         // console.log(student);
//         let highestNotes = 0;
//         if(student.notes.length>0){
//             highestNotes = Math.max(...student.notes);
//         }
//         topNotes.push(highestNotes);
//     }
//     return topNotes;

// }
// const studentData=[
//     {
//         id: 1,
//         name: "Jacek",
//         notes: [5, 3, 4, 2, 5, 5]
//       },
//       {
//         id: 2,
//         name: "Ewa",
//         notes: [2, 3, 3, 3, 2, 5]
//       },
//       {
//         id: 3,
//         name: "Zygmunt",
//         notes: [2, 2, 4, 4, 3, 3]
//       }
// ];
// const topNotes = getStudentTopNotes(studentData);
// console.log(topNotes);

// Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.

// There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.

// const user1 = {
//   powerPlant: 70000,
//   rental: 12000
// }

// const user2 = {
//   teaching: 40000,
//   rental: 10000
// }

// becomes ➞ {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// }
// Arguments
// user1Income (Object) ⁠— an income object for user1
// user2Income (Object) ⁠— an income object for user2
// returns: A new object with like values combined
// Challenges
// They won't have the same number of key-value pairs.
// The return object must return the values ordered from lowest to highest so your answers can match the test answers.

// function combineIncomes(user1Income,user2Income){
//     let combinedIncome = {};
//     for(let category in user1Income){
//     //    console.log(category);
//     if(combinedIncome[category]===undefined){
//         combinedIncome[category] = 0;
//     }
//     combinedIncome[category]+=user1Income[category];
//     }
//     // console.log(combinedIncome);
//     for(let category in user2Income){
//         if(combinedIncome[category]===undefined){
//             combinedIncome[category] = 0;
//         }
//         combinedIncome[category]+=user2Income[category];
//     }
//     return combinedIncome;
// }

// const user1 = {
//     powerPlant: 70000,
//     rental: 12000
//   };
//   const user2 = {
//     teaching: 40000,
//     rental: 10000
//   };

//   const combinedIncomes = combineIncomes(user1, user2);
//   console.log(combinedIncomes);

// function reverseArr(arr){
//     let newArr = [];
//     for(let i=arr.length-1;i>=0;i--){
//         newArr.push(arr[i])
//     }
//     return newArr;
// }
// let arr = [1,2,3,4,5];
// console.log(reverseArr(arr));

// function largestSum(arr)
// {
//     let max_so_far = 0;
//     let max_current = 0;
//     for(let i = 0;i<arr.length;i++){
//         max_current += arr[i];
//         max_so_far = Math.max(max_so_far, max_current);
//         if (max_current < 0) {
//             max_current = 0;
//           }
//       }

//       //return max sum
//       return max_so_far;
//    };
// console.log(largestSum([-2,1,-3,4,-1,2,1,-5,4]));

//Duplicate elements 
// function hasDuplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//             //   console.log(arr[i]);
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// let arr = [1,2,1,3];
// console.log(hasDuplicate(arr));

// CREATING MAPS FROM ARRAYS AND OBJECTS 
// let user = new Map([
//     ['name','John'],
//     ['age',28],
//     ['gender','Male'],
//     ['occupation','Teacher']
// ]);
// console.log(user);

// CONVERT AN OBJECT INTO A MAP 
// let customer={
//     id:101,
//     name:"abc",
//     gender:"Male",
//     city:"London"
// }

//USER OBJECT>ENTRIES() TO CREATE AN ARRAY FROM THE OBJECT
// let customerArr = Object.entries(customer);
//PASSED THAT ARRAY TO THE CONSTRUCTOR TO THE MAP 
// let customerMap = new Map(customerArr);
// console.log(customerArr);
// console.log(customerMap);

//CONVERING A MAP INTO A ARRAY 
// let x = [...customerMap]; 
//OR WE CAN USE ENTRIES METHOD TO CONVERTING A MAP INTO A ARRAY 
// let u = [...customerMap.entries()]
// console.log(u);
// console.log(x);

//GET A KEY FROM MAP INTO A ARRAY 
// let y = [...customerMap.keys()];
// console.log(y);

//GET A VALUES FROM MAP INTO A ARRAY 
// let z = [...customerMap.values()];
// console.log(z);

//LOOPING OVER MAP
// for(let customer of customerMap){
//     // console.log(customer); gives array 
//     console.log(`Value for key ${customer[0]} is ${customer[1]}`);
// }

//How do you count a number of vowels and consonants in a given string?
// function countVowels(str){
//     let vowels = 'aeiouAEIOU';
//     let vowelsCount = 0;
//     let constantCounts = 0;
//     for(let i=0;i<str.length;i++){
//         let char = str[i];
//         if(vowels.includes(char)){
//             vowelsCount++
//         }else if(char.match(/[a-zA-Z]/)){
//             constantCounts++
//         }
//     }
//     return {vowels:vowelsCount,constant:constantCounts};
// }
// const inputString = "ApoorvDubey";
// const counts = countVowels(inputString);
// console.log(counts.vowels);
// console.log(counts.constant);


// How do you print the first non-repeated character from a string?
// function firstNonRepeatingCharacter(str){
//     let charcount = new Map();
//     let charOrder = [];
//     for(let char of str){
//         // console.log(char);
//         if(charcount.has(char)){
//             charcount.set(char,charcount.get(char)+1);
//         }else{
//             charcount.set(char,1);
//             charOrder.push(char);
//         }
//     }
//     for(let char of charOrder){
//         if(charcount.get(char)===1){
//             return char;
//         }
//     }
//     return null;
// }
// const inputString = "aabbccd";
// const firstNonRepeated = firstNonRepeatingCharacter(inputString);
// if (firstNonRepeated !== null) {
//   console.log("First non-repeated character:", firstNonRepeated);
// } else {
//   console.log("No non-repeated character found.");
// }


// var fact = 1;
// var num = 5;
// for(let i = 1;i<=num;i++){
//     fact *=i;
// }
// console.log(fact);

// var cat = {
//     name: "fluffy",
//     activities: ["play", "eat"],
//     catFriends: [
//         {
//             name: "bar",
//             activities: ["sleep", "eat normal food"],
//             weight: 8,
//             color: "black"
//         },
//         {
//             name: "foo",
//             activities: ["grumpy", "nonveg"],
//             weight: 7
//         }
//     ]
// };
// let totalActivities = cat.activities.length;
// // console.log(totalActivities);
// // let cats = cat.catFriends;
// // console.log(cats);
// for (let catFriend of cat.catFriends) {
//   // console.log(catFriend);
//     totalActivities += catFriend.activities.length;
// }
// console.log(totalActivities);

// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3

// numbersSum([true, false, "123", "75"]) ➞ 0

// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

// function numbersSum(arr)
// {
//     let sum = 0;
//     for(let ele of arr){
//         if(typeof ele === "number"){
//             sum+=ele;
//         }
//     }
//     return sum;
// }
// let arr = [1,2,"13","4",true,5];
// console.log(numbersSum(arr));


// var car={
//     make:"Bugatti",
//     model:"BUgatti La Voiture Noire",
//     year:2019,
//     accidents:[
//         {
//             date:"3/12/2019",
//             damage_points:"5000",
//             atFaultForAccident:true
//         },
//         {
//             date:"6/11/2020",
//             damage_points:"7000",
//             atFaultForAccident:false
//         },
//         {
//             date:"3/09/2022",
//             damage_points:"9000",
//             atFaultForAccident:true
//         }
//     ]
// }
// // Loop over the accidents array. Change atFaultForAccident from true to false.
// for(let cars of car.accidents){
//   // console.log(car);
//    if(cars.atFaultForAccident==true){
//     cars.atFaultForAccident=false;
//    }
//    console.log(cars.atFaultForAccident);
// }

// Parsing a list and transform the first and last elements of it:

// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.
// Input (Array):
// var array = [“GUVI”, “I”, “am”, “Geek”];
// Output:
// var object = {
// GUVI : “Geek”
// }

// let arr =  ["GUVI", "I", "am", "Geek"];
// // let map = new Map();
// // map.set(arr[0],arr[arr.length-1]);
// // console.log(map);
//        OR
// let obj = {};
// let key = arr[0];
// let value = arr[arr.length-1];
// obj[key] = value;
// console.log(obj);


//Parsing a list of lists and convert into a JSON object:
// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
// Input (Array):
// var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
// Output:
// var object = {
// make : “Ford”
// model : “Mustang”,
// year : 1964
// // }
// let arr = [["name","abc"],["age","20"],["address","xyz"]];
// let obj = {};
// for(let i of arr){
//     // console.log(i);
//     let key = i[0];
//     let value = i[1];
//     obj[key]=value;
// }
// console.log(obj);
//          OR
// let map = new Map();
// for(let i of arr){
//     if(map.has(i[0])){
//         let temp = map.get(i);
//         map.set(i[0],++temp);
//     }else{
//         map.set(i[0],i[1]);
//     }
// }
// for(let [key,value] of map){
//     console.log(key,value);
// }
// Create a function that takes two arguments: an array arr and a number num. If an element occurs in arr more than num times, remove the extra occurrence(s) and return the result.

// Examples
// deleteOccurrences([1, 1, 1, 1], 2) ➞ [1, 1]

// deleteOccurrences([13, true, 13, null], 1) ➞ [13, true, null]

// // deleteOccurrences([true, true, true], 3) ➞ [true, true, true]

// function deleteOccurrences(arr, num) {
//     const elementCount = {};
//     const result = [];
  
//     for (const element of arr) {
//       elementCount[element] = (elementCount[element] || 0) + 1;
  
//       if (elementCount[element] <= num) {
//         result.push(element);
//       }
//     }
  
//     return result;
//   }
  
//   // Test cases
//   console.log(deleteOccurrences([1, 1, 1, 1], 2)); // Output: [1, 1]
//   console.log(deleteOccurrences([13, true, 13, null], 1)); // Output: [13, true, null]
//   console.log(deleteOccurrences([true, true, true], 3)); // Output: [true, true, true]
  

// Create a function that returns the sum of missing numbers.

// Examples
// sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// // 2 + 4 + 6 + 8 + 9

// sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

// sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
// Notes
// The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.

// let arr=[1,3,5,7,10];
// let maxele = Math.max(...arr);
// let minele = Math.min(...arr);
// let sum = 0;
// let total = 0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];  
// }
// for(let j=minele;j<=maxele;j++){
//     total+=j;
// }
// let res = total-sum;
// console.log(res);

                //OR

// let arr=[1,3,5,7,10];
// const hArr = new Array(Math.max(...arr)).fill(0);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     hArr[arr[i]]++;
// }

// for (let j = 0; j < hArr.length; j++) {
//     if (hArr[j]===0) {
//         sum = sum + j;
//     }
    
// }
// console.log(sum);
// Parsing an JSON object’s Keys:
// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
// Example Input:
// {name : ‘RajiniKanth’, age : 25, hasPets : true}
// Example Output:
// [‘name’, ‘age’, ‘hasPets’]

// let obj = {name : "RajiniKanth", age : 25, hasPets : true};
// let arr = [];
// for(i in obj){
//     arr.push(i);
//     // console.log(i);
// }
// console.log(arr);

// Write a program that takes an array of user objects. Each user object will have properties like `id`, `name`, `city`, and other relevant information. The component should render a list of users grouped by cities. Display the city name as a heading,
// and under each city, list the names of the users belonging to that city. 
// For example, 
// if the List is: 
// users = [ 
// { id: 1, name: "John Doe", city: "New York" }, 
// { id: 2, name: "Jane Smith", city: "Los Angeles" }, 
// { id: 3, name: "Bob Johnson", city: "New York" }, 
// { id: 4, name: "Alice Brown", city: "Chicago" }, ];
// Output should be : 
// New York: 
// John Doe 
// Bob Johnson 
// Los Angeles: 
// Jane Smith 
// Chicago: 
// Alice Brown 

// // Sample user data
// const users = [
//     { id: 1, name: "John Doe", city: "New York" },
//     { id: 2, name: "Jane Smith", city: "Los Angeles" },
//     { id: 3, name: "Bob Johnson", city: "New York" },
//     { id: 4, name: "Alice Brown", city: "Chicago" }
//   ];
  
//   // Group users by city
//   const groupedUsers = {};
//   for (const user of users) {
//     // console.log(user.city);
//     if (!groupedUsers[user.city]) {
//       groupedUsers[user.city] = [];
//     }
//     groupedUsers[user.city].push(user.name);
//   }
  
//   // Render the grouped user list
//   for (const city in groupedUsers) {
//     console.log(city + ":");
//     for (const userName of groupedUsers[city]) {
//       console.log(userName);
//     }
//     console.log(""); // Empty line for separation
//   }




//                             OR 2nd Way 
// function renderUsersByCity(users) {
//     const cityUsers = {};

//     // Group users by city
//     users.forEach(user => {
//         const city = user.city;
//         if (city in cityUsers) {
//             cityUsers[city].push(user.name);
//         } else {
//             cityUsers[city] = [user.name];
//         }
//     });

//     // Display users by city
//     for (const city in cityUsers) {
//         console.log(`${city}:`);
//         cityUsers[city].forEach(user => {
//             console.log(`- ${user}`);
//         });
//         console.log();
//     }
// }

// // List of user objects
// const users = [
//     { id: 1, name: "John Doe", city: "New York" },
//     { id: 2, name: "Jane Smith", city: "Los Angeles" },
//     { id: 3, name: "Bob Johnson", city: "New York" },
//     { id: 4, name: "Alice Brown", city: "Chicago" }
// ];

// // Call the function to render users by city
// renderUsersByCity(users);

// let arr = [["name","abc"],["age",18],["address","xyz"]];
// let obj = {};
// for(i of arr){
//     let key = i[0];
//     let value = i[1];
//     obj[key] = value;
// }
// console.log(obj);


// Parsing a list of lists and convert into a JSON object:
// Write a function called “transformGeekData” that transforms some set of data from one format to another.
// Input (Array):
// var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
// Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},

// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

// var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
//  [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
//  let obj = {};
//  for(i of array){
//     // console.log([i]);
//     for(j of i){
//         // console.log(j);
//         // console.log(j[0]); // firstname,lastname,age,role
//         // console.log(j[1]); // Vasanth,Raja,24,JSWizard
//         let key = j[0];
//         let value = j[1];
//         obj[key] = value;
//     }
//     console.log(obj);
//  }

// let obj = {   name: 'Prashant',   getName: function() {      return this;   }}
// console.log(obj.getName());

// let obj = new Object();
// obj.name = "Prashant";
// obj.age = 24;
// obj.getDetails = function(){
//   return `${this.name} is ${this.age} years old`;
// };

// console.log(obj.getDetails());



// function areObjectsEqual(obj1,obj2)
// {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     // console.log(keys1);
//     // console.log(keys2);
//     if(keys1.length != keys2.length){
//         return false;
//     }
//     for(let key of keys1){
//         // console.log(key); // foo bar
//         if(obj1[key]!=obj2[key]){
//             return false;
//         }
//     }
//     return true;
// }
// let obj1 = {foo:5,bar:6,id:3};
// let obj2 = {foo:5,bar:6,id:3};
// let isequal = areObjectsEqual(obj1,obj2);
// console.log(isequal);

// You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

// Examples
// splitBunches([
//   { name: "grapes", quantity: 2 }
// ]) ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


// splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ]) ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]
// Notes
// The input array will never be empty.
// Objects will always have a name and quantity over 0.
// The returned object should have each fruit in the same order as the original.


// let obj =  [
//     { name: "currants", quantity: 1 },
//     { name: "grapes", quantity: 2 },
//     { name: "bananas", quantity: 2 }
// ];
// for(let i=0;i<obj.length;i++){
//     // console.log(obj[i].quantity);
//     for(let j=0; j<obj[i].quantity;j++){
//         console.log({...obj[i], quantity:1 });
//     }
// }


// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

// Examples
// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"


// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) ➞ "The End?"


// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) ➞ "Chapter 1b"
// Notes
// All page numbers in the dictionary will be valid integers.
// Return the higher page number if ever two pages are equidistant

// function nearestChapter(obj,pageno){


// }
// let obj = {
//       "New Beginnings" : 1,
//       "Strange Developments" : 62,
//       "The End?" : 194,
//       "The True Ending" : 460
// }
// let pageno = 200;
// let near = nearestChapter(obj,pageno);
// console.log(near);

// var securityQuestions = [
//     {
//     question: “What was your first pet’s name?”,
//     expectedAnswer: “FlufferNutter”
//     },
//     {
//     question: “What was the model year of your first car?”,
//     expectedAnswer: “1985”
//     },
//     {
//     question: “What city were you born in?”,
//     expectedAnswer: “NYC”
//     }
//    ]function chksecurityQuestions(securityQuestions,question) {
   
//     // your code here return true or false; 
//    }//Test case1:var ques = “What was your first pet’s name?”;
//    var ans  =  “FlufferNutter”;var status = chksecurityQuestions(securityQuestions, ques, ans);console.log(status); // true//Test case2:var ques = “What was your first pet’s name?”;
//    var ans  =  “DufferNutter”;var status = chksecurityQuestions(securityQuestions, ques, ans);console.log(status); // flase
    

// function chksecurityQuestions(securityQuestions,question,answers){

//     for(i of securityQuestions){
//         if(i.question===ques && i.expectedAnswer === ans){
//             return true
//         }
//     }
//     return false;

// }
// var securityQuestions = [
//     {
//     question: "What was your first pet’s name?",
//     expectedAnswer: "FlufferNutter"
//     },
//     {
//     question: "What was the model year of your first car?",
//     expectedAnswer: "1985"
//     },
//     {
//     question: "What city were you born in",
//     expectedAnswer: "NYC"
//     }
//    ]
//    var ques = "What city were you born in"
//    var ans = "NYC";
//    var res = chksecurityQuestions(securityQuestions,ques,ans);
//    console.log(res);


// Parsing JSON objects and Compare:

// Write a function to return the list of characters below 20 age

// var students = [
//  {
//  name: “Siddharth Abhimanyu”, age: 21}, { name: “Malar”, age: 25},
//  {name: “Maari”,age: 18},{name: “Bhallala Deva”,age: 17},
//  {name: “Baahubali”,age: 16},{name: “AAK chandran”,age: 23},   {name:“Gabbar Singh”,age: 33},{name: “Mogambo”,age: 53},
//  {name: “Munnabhai”,age: 40},{name: “Sher Khan”,age: 20},
//  {name: “Chulbul Pandey”,age: 19},{name: “Anthony”,age: 28},
//  {name: “Devdas”,age: 56} 
//  ];function returnMinors(arr)
// {}console.log(returnMinors(students));

// var students = [
//     {name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
//     {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
//     {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
//     {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
//     {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
//     {name: "Devdas",age: 56} 
// ];
// let arr = [];
// for(i of students)
// {
//     // console.log(i);
//     if(i.age<20){
//         arr.push(i.name);
//     }
// }
// console.log(arr);

// continent_list1 = [
//     {
//         "name": "Asia",
//         "countries": [
//             {
//                 "name": "India",
//                 "states": [
//                     {
//                         "name": "Maharashtra",
//                         "cities": ["Mumbai", "Pune","panwel"]
//                     },
//                     {
//                         "name": "Karnataka",
//                         "cities": ["Bengaluru", "Mysore"]
//                     }
//                 ]
//             },
//             {
//                 "name": "China",
//                 "states": [
//                     {
//                         "name": "Beijing",
//                         "cities": ["Beijing"]
//                     },
//                     {
//                         "name": "Shanghai",
//                         "cities": ["Shanghai"]
//                     }
//                 ]
//             }
//         ]
//     }
// ]



// continent_list2 = [
// {
// "name": "Asia",
// "countries": [
// {
//     "name": "India",
//     "states": [
//         {
//             "name": "Maharashtra",
//             "cities": ["Mumbai", "Pune", "panwel"]
//         },
//         {
//             "name": "Karnataka",
//             "cities": ["Bengaluru", "Mysore"]
//         }
//     ]
// },
// {
//     "name": "China",
//     "states": [
//         {
//             "name": "Beijing",
//             "cities": ["Beijing"]
//         },
//         {
//             "name": "Shanghaia",
//             "cities": ["Shanghai"]
//         }
//     ]
// }
// ]
// }
// ]

// if(JSON.stringify(continent_list1)===JSON.stringify(continent_list2)){
//    console.log(true);
// }
// else{
//     console.log(false);
// }
// const map = new Map();
// var arr=[
//     [
//         {"productId":"1","category":"clothes"},
//         {"productId":"3","category":"footwear"},
//         {"productId":"2","category":"Footwear"},
//         {"productId":"4","category":"electronic"},
//         {"productId":"5","category":"clothes"}
//     ],
//     [
//         {"productId":"8","category":"footwear"},
//         {"productId":"8","category":"footwear"},
//         {"productId":"6","category":"clothes"},
//         {"productId":"11","category":"footwear"},
//         {"productId":"10","category":"electronic"}
//     ],
//     [
//         {"productId":"7","category":"electronic"},
//         {"productId":"15","category":"clothes"},
//         {"productId":"14","category":"footwear"},
//         {"productId":"13","category":"clothes"},
//         {"productId":"12","category":"footwear"}
//     ]
// ]
// for(i of arr){
//     for(j of i){
//         if(!map.has(j.category)){
//             map.set(j.category,[j]);
//         }else{
//             map.set(j.category,[...map.get(j.category),j]);
//         }
//     }
// }
// let sortArr = [];
// for (const x of map.values()) {
//     sortArr.push(x);
// }
// console.log(sortArr);


// var inputArray = [
//     [
//         {"productId":"1","category":"clothes"},
//         {"productId":"3","category":"footwear"},
//         {"productId":"2","category":"Footwear"},
//         {"productId":"4","category":"electronic"},
//         {"productId":"5","category":"clothes"}
//     ],
//     [
//         {"productId":"8","category":"footwear"},
//         {"productId":"8","category":"footwear"},
//         {"productId":"6","category":"clothes"},
//         {"productId":"11","category":"footwear"},
//         {"productId":"10","category":"electronic"}
//     ],
//     [
//         {"productId":"7","category":"electronic"},
//         {"productId":"15","category":"clothes"},
//         {"productId":"14","category":"footwear"},
//         {"productId":"13","category":"clothes"},
//         {"productId":"12","category":"footwear"}
//     ]
// ];

// var outputArray = [];

// // Create an object to store categorized products
// var categorizedProducts = {};

// // Iterate through the inputArray and categorize the products
// for (var i = 0; i < inputArray.length; i++) {
//     var subArray = inputArray[i];
//     for (var j = 0; j < subArray.length; j++) {
//         var product = subArray[j];
//         var category = product.category.toLowerCase(); // Convert to lowercase for consistent casing
//         if (!categorizedProducts[category]) {
//             categorizedProducts[category] = [];
//         }
//         categorizedProducts[category].push(product);
//     }
// }

// // Convert the categorized products object back into an array of arrays
// for (var category in categorizedProducts) {
//     outputArray.push(categorizedProducts[category]);
// }

// console.log(outputArray);

// sampleJson = """{ 
//     "company":{ 
//        "employee":{ 
//           "name":"emma",
//           "payble":{ 
//              "salary":7000,
//              "bonus":800
//           }
//        }
//     }
//  }"""
// # write code to print the value of salary

// let sampleJson = { 
//     "company":{ 
//        "employee":{ 
//           "name":"emma",
//           "payble":{ 
//              "salary":7000,
//              "bonus":800
//           }
//        }
//     }
//  }
// let salary = sampleJson.company.employee.payble.salary;
// console.log(salary);




// Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];

// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]

// let arr = [1,2,1,2,3,4,5,5];
// let newArr = [];
// for(i of arr){
//     if(!newArr.includes(i)){
//         newArr.push(i)
//     }
// }
// console.log(newArr);

// function duplicateRemoveStr(str,n){
//     let s = new Set();
//     for(let i=0;i<n;i++){
//         s.add(str[i]);
//     }
//     for(v of s){
//         console.log(v);
//     }
// }
// let str = "ApoorvDubey";
// let n = str.length;
// duplicateRemoveStr(str,n);

// function bubbleSort(arr){
//     for (let i = 0; i < arr.length - 1; i++){
//         let swapped = false
//         for (let j = 0; j < arr.length - i - 1; j++){
//             // swapping the elements
//             if (arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 swapped = true
//             }
//         }
//         // if no elements are swapped
//         // that means our array is sorted
//         if(!swapped) 
//         break;
//     }
//     return arr
// }
// let arr = [10,4,11,3,8];
// // console.log(bubbleSort(arr));


// function pair(arrInput){
//     const arr  = arrInput.sort((a,b) => { console.log(a,b) 
//           return a - b});
//     // const arr = bubbleSort(arrInput);
//     const result = [];
//     for(let i=0;i<arr.length;i+=2){
//         if(i+1<arr.length){
//             result.push([arr[i],arr[i+1]]);
//         }else{
//             result.push([arr[i]])
//         }
//     }
//     return result;
// }
// const inputarr = [2,3,5,9,1,4,10,11,12];
// const outputarr = pair(inputarr);
// console.log(outputarr);

// let str =  "utm_source=GoogleSearchNetwork&utm_medium=cpc&utm_device=c&utm_campaign=11560683825&utm_adgroup=114386669724&utm_keyword=&utm_matchtype=&utm_placement=&utm_adposition=&utm_location=&keyword_k=&utm_term=&gclid={%E2%80%8B%E2%80%8Bvar:gclid}%E2%80%8B%E2%80%8B"
// let KeyValue = str.split('&');
// let result = {};
// for(let i=0;i<KeyValue.length;i++){
//   const [key,value]  = KeyValue[i].split('=');
//   result[key] = value;
//   console.log(result);
// }

// let obj = [
//     {name:"abc",age:20,address:"xyz"},
//     {name:"abc",age:30,address:"pqr"},
//     {name:"Apoorv",age:40,address:"lmn"},
// ];
// let uniqueNames = {};
// let filteredObject = [];
// for(let i=0;i<obj.length;i++){
//     let currentObj = obj[i];
//     // console.log(currentObj);
//     let name = currentObj.name;
//     // console.log(name);
//     if(!uniqueNames[name]){
//         uniqueNames[name] = true;
//         filteredObject.push(currentObj);
//     }
// }
// console.log(filteredObject);


// let arr = [10,20,30,10];
// let newArr = [];
// for(let i=0;i<arr.length;i++){
//     let isDuplicate = false;
//     for(let j=0;j<newArr.length;j++){
//         if(arr[i]==newArr[j]){
//             isDuplicate=true;
//             break;
//         }
//    }
//    if(!isDuplicate){
//     newArr.push(arr[i]);
//    }
// }
// console.log(newArr);


// function customSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             let date1 = arr[i].split('/').reverse().join('/');
//             let date2 = arr[j].split('/').reverse().join('/');
//             if(date1>date2){
//                 let temp = arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
// }
// const dates = ["17/11/1996","17/11/1999","17/11/1906","17/11/1980","17/11/1976","17/11/1960","17/11/1998"];
// customSort(dates);
// console.log(dates);


// let arr = [10,20,30,40,50];
// let min =  arr[0];
// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//     console.log(arr[i]);
//     if(arr[i]<min){
//         min = arr[i];
//     }
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(min);
// console.log(max);

// [[3,4,5],[3,4,5,6],[3,4,5]] print the all elements less than 5
// let arr = [[3,4,5],[3,4,5,6],[3,4,5]];
// for(let i of arr){
//     let newArr = [];
//    for(let j of i){
//     if(j<6){
//         newArr.push(j);
//     }
//    }
//    console.log(newArr);
// }



// const data = 
// {
//   "users": [
//     {
//       "name": "John",
//       "age": 28,
//       "email": "john@example.com"
//     },
//     {
//       "name": "Alice",
//       "age": 35,
//       "email": "alice@example.com"
//     },
//     {
//       "name": "Bob",
//       "age": 40,
//       "email": "bob@example.com"
//     }
//   ]
// }
// for(let i of data.users){
//     if(i.age>30){
//         console.log(i.email);
//     }
// }


// Expected Input (JSON Array of Orders):
// const ordersJSON = `
// [
//   { "customer": "Alice", "total": 100 },
//   { "customer": "Bob", "total": 150 },
//   { "customer": "Alice", "total": 75 },
//   { "customer": "Bob", "total": 200 },
//   { "customer": "Charlie", "total": 50 }
// ]
// `;
// Expected Output (Summary Object):
// {
//     "Alice": { "totalOrders": 2, "totalAmount": 175 },
//     "Bob": { "totalOrders": 2, "totalAmount": 350 },
//     "Charlie": { "totalOrders": 1, "totalAmount": 50 }
//   }
  

// const ordersJSON = 
// [
//   { "customer": "Alice", "total": 100 },
//   { "customer": "Bob", "total": 150 },
//   { "customer": "Alice", "total": 75 },
//   { "customer": "Bob", "total": 200 },
//   { "customer": "Charlie", "total": 50 }
// ];
// const obj = {};
// for(let order of ordersJSON){
//     // console.log(order);
//     const {customer,total} = order;
//     if(!obj[customer]){
//         obj[customer] = {totalOrders:0,totalAmount:0};
//     }
//     obj[customer].totalOrders+=1;
//     obj[customer].totalAmount += total;
// }
// console.log(obj);
// let str='237'
// let no_str= parseInt(str)
// if(no_str%2 !==0){
//    console.log(no_str)
// }
// else{
//    let arr=str.split('')
//    for(let i=0;i<arr.length;i++){
//        if(arr[i]%2!==0){
//            console.log(arr[i]);
//        }
//    }
// }

// Expected Input (Object with Nested Objects):
// const originalObject = {
//     name: "John",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//     },
//   };
//   Expected Output (Deep Cloned Object):

//   The deep cloned object should be a separate copy of the original object with no shared references.
//   const originalObject = {
//     name: "John",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//     },
//   };
//   const originalObject = {
//     name: "John",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//     },
//   };
  

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
// Example 1:
// Input: s = "hello"Output: "holle"
// Example 2:
// Input: s = "leetcode"Output: "leotcede"

// function reverseVowel(s){
//     const chars = s.split('');
//     // console.log(chars);
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     let left = 0;
//     let right = chars.length-1;
//     while(left<right){
//         while(left<right && !vowels.has(chars[left])){
//             left++;
//         }
//         while(left<right && !vowels.has(chars[right])){
//             right--;
//         }
//         [chars[left],chars[right]] = [chars[right],chars[left]];
//         left++;
//         right--;
//     }
//     return chars.join('');
// }
// const s1 = "leetcode";
// console.log(reverseVowel(s1));


// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2Output: 2Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// let  str = "hello";
// str = str.split("");
// const vowels = ["a","e","i","o","u"];
// let temp;
// for (let i = 0,j=str.length-1; i < j; ) {
//     if (vowels.includes(str[i]) && vowels.includes(str[j])) {
//         temp = str[i];
//         str[i] = str[j];
//         str[j] = temp;
//         i++;
//         j--;
//     }
//     if (!vowels.includes(str[i])) i++;
//     if (!vowels.includes(str[j])) j--;
// }
// str = str.join("");
// console.log(str);


// let arr = [4,5,3];
// let temp;
// for(let i=0,j=arr.length-1;i<j;i++,j--){
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
// }
// console.log(arr);

// let str = "";
// for(let i=0;i<4;i++){
//     for(let j=0;j<4;j++){
//         str+="*";
//     }
//     str+="\n";
// }
// console.log(str);

// let str = "";
// for(let i=0;i<5;i++){
//     for(let j=0;j<=i;j++){
//         str+="*";
//     }
//     str+="\n"
// }
// console.log(str); 

// let str = "";
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         str += j;
//     }
//     str +="\n"
// }
// console.log(str);

// let str = "";
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         str+=i;
//     }
//     str+="\n"
// }
// console.log(str);

// let n=5
// let str = "";
// for(let i=1;i<=n;i++){
//     for(let j=0;j<n-i+1;j++){
//         str+="*";
//     }
//     str+="\n";
// }
// console.log(str);

// let n=5
// let str = "";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//         str+=j
//     }
//     str+="\n";
// }
// console.log(str);

// let n = 5;
// let str = "";
// for(let i=0;i<n;i++){
//     //space
//     for(let j=0;j<=n-i+1;j++){
//         str += " ";
//     }
//     //star
//     for(let j=0;j<2*i+1;j++){
//         str+="*";
//     }
//     //space
//     for(let j=0;j<=n-i+1;j++){
//         str += " ";
//     }
//     str+="\n";
// }
// console.log(str);

// let n = 5;
// let str = "";
// for(let i=0;i<n;i++){
//     //space
//     for(let j=0;j<i;j++){
//         str += " ";
//     }
//     //star
//     for(let j=0;j<2*n -(2*i+1);j++){
//         str+="*";
//     }
//     //space
//     for(let j=0;j<i;j++){
//         str += " ";
//     }
//     str+="\n";
// }
// console.log(str);


// let n1 = 5;
// let str1 = "";
// for(let i=0;i<n1;i++){
//     //space
//     for(let j=0;j<n1-i;j++){
//         str1 += " ";
//     }
//     //star
//     for(let j=0;j<2*i+1;j++){
//         str1+="*";
//     }
//     //space
//     // for(let j=0;j<n1-i;j++){
//     //     str1 += " ";
//     // }
//     str1+="\n";
// }
// console.log(str1);

// let n2 = 5;
// let str2 = "";
// for(let i=0;i<n2;i++){
//     //space
//     if(i==0){
//         continue;
//     }
//     for(let j=0;j<i;j++){
//         str1 += " ";
//     }
//     //star
//     for(let j=0;j<2*n2 -(2*i+1);j++){
        
//         str1 +="*";
//     }
//     //space
//     // for(let j=0;j<i;j++){
//     //     str1 += " ";
//     // }
//     str1+="\n";
// }
// console.log(str1);


// const n = 10;
// let str = "";
//     // Upper half of the diamond
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n - i; j++) {
//            str += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             str += "*";
//         }
//         str += "\n";
//     }
//     // Lower half of the diamond
//     for (let i = n - 1; i >= 1; i--) {
//         for (let j = 1; j <= n - i; j++) {
//            str += " ";
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             str += "*";
//         }
//         str += "\n";
//     }
// console.log(str);

// let str = "";
// let n = 5;
// for(let i=1;i<=2*n-1;i++){
//     let stars = i;
//     if(i>n) stars = 2*n-i;
//     for(let j=1;j<=stars;j++){
//         str+="*"
//     }
//     str+="\n";
// }
// console.log(str);

// largest element of array 
// let arr = [3,1,2,3,6];
// let largest = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(largest);

//second largest element of array 
// let arr = [1,2,3,4,7,7,5];
// let largest = arr[0];
// let secondlargest = -1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
//         if(arr[i]>secondlargest && arr[i]!=largest){
//             secondlargest=arr[i];
//         }
//     }
// console.log(secondlargest);

//check if array is sorted or not 
// function isCheckSortedorNot(arr){
//     for(i=1;i<arr.length;i++){
//         if(arr[i]>=arr[i-1]){}
//         else
//             return false;
//     }
//     return true;
// }
// let arr = [1,2,3,5,4];
// console.log(isCheckSortedorNot(arr));


// remove duplicate elements from array 
// let arr = [1,2,3,4,5,2,1,2,4];
// let uniqueArray = [];
// for(let i=0;i<arr.length;i++){
//     if(!uniqueArray.includes(arr[i])){
//         uniqueArray.push(arr[i])
//     }
// }
// console.log(uniqueArray);

// let arr = ["abc","pqr","abc","xyz"];
// let newArr = [];
// for(let i=0;i<arr.length;i++){
//     if(!newArr==arr[i]){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

//Rotate an array
// let arr = [1,2,3,4,5,6,7];
// // // let arr = [5,7,3,2];
// // let arr = [4,0,3,2,5]
// let k = 0;
// while (k<3) {
//     let temp = arr[0];
//     for(let i=1;i<arr.length;i++){
//         arr[i-1]=arr[i];
//         if(i==arr.length-1){
//             // console.log(i);
//             arr[i]=temp;
//         }
//     }
//     k++;
    
// }
// console.log(arr);

// Move Zero's to End
// function movezero(arr){
//     let j = -1;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             j=i;
//             break;
//         }
//     }
//     //Non zero elements 
//     if(j==-1) return arr;
//     //Move the pointers i and j and swap accordingly 
//     for(let i=j+1;i<arr.length;i++){
//         if(arr[i]!==0){
//             [arr[i],arr[j]]=[arr[j],arr[i]];
//             j++;
//         }
//     }
//     return arr;
// }
// let arr = [0,2,0,0,2,3];
// let result = movezero(arr);
// console.log(result);

// : Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
// Examples:
// Example 1:
// Input: arr[]= 1 2 3 4 5, num = 3
// Output: 2
// Explanation: 3 is present in the 2nd index

// Example 2:
// Input: arr[]= 5 4 3 2 1, num = 5
// Output: 0
// Explanation: 5 is present in the 0th index

// function linerSearch(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===num){
//             return i;
//         }
//     }
//     return -1;
// }
// let arr = [1,2,3,4,5];
// let num = 4;
// console.log(linerSearch(arr,num));

// function findUnion(arr1,arr2){
//     let set = new Set();
//     let union = [];
//     for(let num of arr1){
//         set.add(num);
//     }
//     for(let num of arr2){
//         set.add(num);
//     }
//     for(let num of set){
//         union.push(num);
//     }
//     return union;
// }
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [2, 3, 4, 4, 5, 11, 12];
// let result = findUnion(arr1,arr2);
// console.log(result);

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.


// const arr = [0,1,2];
// let harr = new Array(arr.length+1).fill(0);
// for(let i=0;i<arr.length;i++){
//     harr[arr[i]]++;
// }
// // console.log(harr);
// for (let i=0;i<harr.length; i++) {
//     if(harr[i]===0){
//         console.log(i);
//     }  
// }

// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1} 

// Output: 2

// Explanation: There are two consecutive 1's in the array. 

// function findMaxConsecutiveOnes(arr){
//     let count=0,maxcount=0;
//     for(let i=0;i<arr.length;i++){
        
//         if (arr[i] === 1) {
//             count++;
//         }
//         else{
//             count = 0;
//         }
//         if (maxcount < count) {
//             maxcount = count;
//         }
//     }
//     return maxcount;
// }
// let arr = [1,1,0,1,1,1];
// let res = findMaxConsecutiveOnes(arr);
// console.log(res);

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// function getSingleele(arr){
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         if(map.has(arr[i])){
//             map.set(arr[i],map.get(arr[i]+1))
//         }else{
//             map.set(arr[i],1);
//         }
//     }
//     for(let [key,value] of map){
//         if(value==1){
//             return key;
//         }
//     }
// }
// let arr = [4,1,2,1,2];
// let res = getSingleele(arr);
// console.log(res);


// let str = 'aabcdefedeg';
// let un='';
// for(let i=0;i<str.length;i++){
//    if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
//      un+=str[i]
//     }
// }
// console.log(un)

// function getlongestSubArray(arr,k){
//     let n = arr.length;
//     let len = 0;
//     for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             let sum = 0;
//             for(let k=i;k<=j;k++){
//                 sum += arr[k];
//             }
//             if(sum === k){
//                 len = Math.max(len,j-i+1);
//             }
//         }
//     }
//     return len;    
// }
// let arr = [2, 3, 5, 1, 9,5,5,10];
// let k = 10;
// let len = getlongestSubArray(arr,k);
// console.log(len);

// Reverse Words in a String
// Problem Statement: Given a string s, reverse the words of the string.

// Examples:

// Example 1:
// Input: s=”this is an amazing program”
// Output: “program amazing an is this”

// Example 2:
// Input: s=”This is decent”
// Output: “decent is This”

// function reverse(str){
//     let arr = str.split(' ');
//     let start = 0;
//     let end = arr.length-1;
//     while(start<=end){
//         let temp = arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp;
//         start++;
//         end--;
//     }
//     return arr.join('');
// }
// let str = "this is an amazing program";
// let res = reverse(str);
// console.log(res);


// let str = "hello i love my BHARAT";
// // let str = [3,4,5,6,7];
// str = str.split(" ");
// let temp;
// for (let i = 0,j = str.length-1; i < j; i++,j--) {
//     temp = str[i];
//     str[i] = str[j];
//     str[j] = temp;
// }
// str = str.join(" ");
// console.log(str);

// function rearrangearray(arr){
//     let left = 0;
//     let right = arr.length - 1;
//     for (let i = 0; i < arr.length; i++) {
//         while(arr[left]<0){
//             left++;
//         }
//         while(arr[right]>=0){
//             right--;
//         }
//         if(left<right){
//             let temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
//         }
//     }
//     return arr;
// }
// let arr = [-1,-2,1,2,-3,4,10,-10];
// console.log(rearrangearray(arr));

// function filterOddDigits(num){
//     let odddigits = "";
//     if ( parseInt(num)%2!= 0) {
//         return num;
//     }else{
//         for(let i=0;i<num.length;i++){
//             let digit = parseInt(num[i],10);
//             if(!isNaN(digit) && digit % 2 === 1){
//             odddigits+=num[i]
//         }

//     }
    
// }
// return odddigits;
// }
// let num = "54";
// console.log(filterOddDigits(num));

// console.log(typeof parseInt('345'));

// 0
// 0 1
// 0 1 1
// 0 1 1 2
// 0 1 1 2 2
// 0 1 1 2 2 3
// 0 1 1 2 2 3 3

// let str = "";
// for(let i=0;i<8;i++){
//     for(let j=0;j<=i;j++){
//         if (j%2 === 0) {
//             str+=j/2;
//         }else{
//             str+=(j + 1) /2;
//         }
//     }
//     str+="\n";
// }
// console.log(str);


// An algorithm to print all subarrays with a given sum k in an array.

// Example
// Input:
// [3,4,-7,1,3,3,1,-4]
// k = 7

// Output:
// [3, 4]
// [3, 4, -7, 1, 3, 3]
// [1, 3, 3]
// [3, 3, 1]

// let newArr = []; // Initialize an empty array called newArr.
// function random1(arr) {
//     let random = Math.floor(Math.random() * arr.length); // Generate a random index within the range of arr.
//     if (newArr.includes(arr[random])) { // Check if the randomly selected element is already in newArr.
//         random1(arr); // If it is, recursively call random1 to try again.
//     } else {
//         newArr.push(arr[random]); // If not, push the randomly selected element into newArr.
//     }
// }

// let arr = [10, 20, 30, 40, 50, 10, 60, 70]; // Define an array called arr with some values.

// Array.from({ length: 3 }).map(() => {
//     random1(arr); // Call random1 function 3 times to populate newArr with 3 unique random elements from arr.
// });

// console.log(newArr); // Print the contents of newArr to the console.

// A
// B B
// C C C
// D D D D
// E E E E E

// let str = "";
// let n = 5;
// for(let i=0;i<n;i++){
//     for(let j=0;j<=i;j++){
//         str+= String.fromCharCode(65+i) + ' ';
//     }
//     str+="\n";
// }
// console.log(str);

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// let str = "";
// let n = 5;
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         str+="*";
//     }
//     str+= "\n";
// }
// console.log(str);

// let n =  5;
// let str = "";
// for(let i=0;i<n;i++){
//     for(let j=0;j<=n-i;j++){
//         str+= " ";
//     }
//     for(let k=0;k<2*i-1;k++){
//         str+="*";
//     }
//     str+="\n";
// }
// console.log(str);

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false do in js 

// function canTransform(s,goal){
//     if(s.length != goal.length){
//         return false;
//     }
//     let doubles = s + s;
//     return doubles.includes(goal);
// }
// let s1 = "abcde";
// let s2 = "cdeba";
// console.log(canTransform(s1,s2));

// Check if two Strings are anagrams of each other
// Problem Statement: Given two strings, check if two strings are anagrams of each other or not.

// Examples:

// Example 1:
// Input: CAT, ACT
// Output: true
// Explanation: Since the count of every letter of both strings are equal.

// Example 2:
// Input: RULES, LESRT 
// Output: false
// Explanation: Since the count of U and T  is not equal in both strings. do in js 

// function areAnagram(str1, str2) {
//     let n1 = str1.length;
//     let n2 = str2.length;
    
//     if (n1 !== n2) {
//       return false;
//     }
    
//     // Convert the strings to arrays of characters
//     let arr1 = str1.split('');
//     let arr2 = str2.split('');
    
//     // Sort the arrays
//     arr1.sort();
//     arr2.sort();
    
//     // Compare the sorted arrays
//     for (let i = 0; i < n1; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  
//   let str1 = "CAT";
//   let str2 = "ACT";
//   console.log(areAnagram(str1, str2)); // true
  

// let arr = [1,8,2,4,5];
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             let temp = arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);


// let str = "abcabc";
// let char = "c";
// let count = 0;
// for(let i=0;i<str.length;i++){
//     for(let j=i;j<str.length+1;j++){
//         let sub = str.slice(i,j);
//         // console.log(sub);
//         if(sub.includes(char)){
//             count++;
//         }
//     }
// }

// let map = new Map();
// let str = "abcabc";
// for(let i=0;i<str.length;i++){
//     for(let j=0;j<=i;j++){
//         let sub = str[j];
//         // console.log(sub);
//         map.set(str[j],1);
//     }
// }
// console.log(map);

// Given one meeting room and start and finish time of N meetings in two separate arrays we have to find the maximum number of meetings that can be accommodated in that room.

// Example
// Input:
// start = [1, 3, 0, 5, 8, 5]
// finish = [2, 4, 6, 7, 9, 9]

// Output:
// 4
// First meeting: [1, 2]
// Second meeting: [3, 4]
// Third meeting: [5, 7]
// Fourth meeting: [8, 9]

// let start = [1, 3, 0, 5, 8, 11];
// let finish = [2, 4, 6, 7, 9, 9];
// let map = new Map();
// for(let i = 0; i < start.length; i++){
//     if(start[i] === 0 || finish[i] === 0){
//         map.set(start[i],"not allowed");
//         map.set(finish[i],"not allowed");
//         continue;
//     }
//     if(map.has(start[i])){
//         continue;
//     }

//     if(map.has(start[i]))

//     map.set(start[i],finish[i]);
// }
// console.log(map);
// for(let item of map){
//     if(item[1] === "not allowed"){
//         continue;
//     }
//     console.log(item[0],item[1]);
// }

//                  OR

// let start = [1, 3, 0, 5, 8, 5];
// let finish = [2, 4, 6, 7, 9, 9];
// const temp1 = new Array(12).fill(0);
// const temp2 = new Array(10).fill(0);
// for (let i = 0; i < start.length; i++) {
//     if (temp1[start[i]] === 0 && temp2[finish[i]] === 0) {
//         if (start[i] === 0 || finish[i] === 0) continue;
//         console.log(start[i],finish[i]);
//         temp1[start[i]]++;
//         temp2[finish[i]]++;
//     }
// }

//                  OR

// var start = [1, 3, 0, 5, 8, 5]
// var finish = [2, 4, 6, 7, 9, 9]
// var output =[]
// for(var i= 0; i<start.length; i++) {
//     if(output.includes(start[i]) || output.includes(finish[i])  || finish[i] === 0 || start[i] === 0){
//     }
//     else {
//         output.push(start[i])
//         output.push(finish[i])
//         console.log(start[i],finish[i])
//     }
// }