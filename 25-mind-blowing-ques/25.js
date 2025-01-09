//? 1. Reverse each word in a string.

// var line = "anirudh is a good boy";

// let words = line.split(" ")
//     .map(function (word){ //
//         return word.split("").reverse().join("");
//     })

// console.log(words.join(" "));

//? 2. Is integer or not

// var num = 12;

// if(num%1 == 0){
//     console.log("integer");
// }
// else{
//     console.log("not integer");
// }

//? 3. Duplicate an array

// var arr = [1, 2, 3, 4, 5];
// var duplicate = (arraySend) => {
//     return arraySend.concat(arraySend);
// }

// console.log(duplicate(arr));

//? 4. Reverse a number

// var num = 12345;
// var reverse = 0;
// const reverseNum = (num) => {
//     while(num>0){
//     var rem = num%10;
//     reverse = reverse*10+rem;
//     num = Math.floor(num/10);
//     }
//     return reverse;
// }

// console.log(reverseNum(num));

//? 5. Javascript function to a check string is pallindrome or not

// var str = "aniria";
// var left = 0;
// var right = str.length-1;
// const checkpallindrome = (str) =>{
//     while(left<right){
//         if(str[left] == str[right]){
//             left++;
//             right--;
//         }else{
//             return false;
//         }
//     }
//     return true;
// };

// console.log(checkpallindrome(str));

//? 6. string to alphabetical order

// const stao = (str) =>{
//     return str.split("").sort().join("");
// }

// console.log(stao("anirudh"));

//? 7. convert the first letter of each word to uppercase

// var str = "my name is bitto";

// const flewtu = (str) => {
//     return str
//         .split(" ") //! splitting the string
//         .map((st) => st[0].toUpperCase() + st.slice(1)) //! .slece() is getting the remaing letter in the string
//         .join(" ");
// };

// console.log(flewtu(str));

//? 8. return the Type of an argument

// const rtoaa = (what) => {
//     return typeof(what);
// };

// console.log(rtoaa(true));

//? 9. Get the occurence of each letter

// const ooel = (str) => {
//     var occ ={}; //! making a object to add occurence
//     str.split("").map((elem) =>{
//         if(occ.hasOwnProperty(elem) == false){
//             occ[elem] = 1;
//         }else{
//             occ[elem]++;
//         }
//     })
//     return occ;
// }

// console.log(ooel('Anirudhaaaiaff'));

//? 10. loop an array and sum all members of it

// const lasami = (arr) => {
//     var sum = 0;
//     arr.forEach((num)=>{
//         sum += num;
//     })
//     return sum;
// }
// console.log(lasami([1,2,3,4,5,6,7]));

//? 11. in an arry of string and numbers characters only add thoes which are not string

// const add = (arr) => {
//     var sum = 0;

//     arr.forEach((element) => {
//       if(typeof element === 'number'){
//         sum += element;
//       }
//     });
//     return sum;
// }

// console.log(add([1,1,1,1,1,"anir"]));

//? 12. Remove the value form a array of object where the value is not equal to male

// var arr = [
//     {gender:"female", age:12},
//     {gender:"male", age:12},
//     {gender:"male", age:12}
// ]

// const remove = (arr) => {
//     return arr.filter((e) => e.gender === "male");
// }

// console.log(remove(arr));

//? WAP to get the first n element of an array

// function recive(arr, n = 1) {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   }else{
//     console.log(n+ "nahi hai");
//   }
// }

// recive([1, 2, 3, 4, 5, 6, 7], 2);

//? WAP to find the mostfrequent element an array
//! important very
// var arr = [1, 1, 2, 2, 3, 4, 3, 3, 2, 1, 1, 2, 4, 2, 1, 1, 2, 2, 2, 2];

// function mea(arr) {
//   var feq = {};
//   arr.forEach(function (elem) {
//     if (feq.hasOwnProperty(elem)) feq[elem]++;
//     else feq[elem] = 1;
//   });

//   var ans = Object.keys(feq).reduce(function (acc, num) {
//     return feq[acc] > feq[num] ? acc : num;
//   });

//   return ans;
// }

// console.log(mea(arr));


// console.log('A'-1); //! 'A' cannot be converter to a number so the uotput will be NaN

// console.log(12 + '122');//! 12122

// console.log('12' + 2 - "2"); //! because of "-" we convert string to a number

// const a = {};
// const b = {
//     name: 'anirudh'
// }
// const c = {
//     name: 'anurag'
// }
// const d = {
//     name : 'anjali'
// }
// a[b] = {
//     name: 'arjun'
// }
// a[c] = {
//     name: 'ameer'
// }
// a[d] = {
//     name: 'arya'
// }

// console.log(a[c]); //! Objects can’t be directly used as unique keys in plain JavaScript objects. They get turned into the same string "[object Object]", so only the last one sticks.

// console.log(NaN == NaN)
// console.log(NaN === NaN) //!in JavaScript, NaN is not considered equal to anything, even itself.

// const arr = [1,2,3,4,5];

// const x = arr.unshift(1,2);//! add the element in the start of arr and return the length
// console.log(x);
// console.log(arr);

// const y = arr.shift();//! remove and return the element from the start
// console.log(y);
// console.log(arr);

// const arr = [100,50,200,150];
// arr.sort((a,b) => a-b);//! in JavaScript sorts array elements as strings by default, even if the elements are numbers.
// console.log(arr);
//? infinite curring example
// function add(a) {
//     return function (b){
//         if(b!== undefined){
//             return add(a+b);// ! keeps returning a function for chaining
//         }
//         return a;//! return the accumulated result
//     };
// }

// console.log(add(1)(2)(3)(4)());


// ? what is temporal dead zone

//! The Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const cannot be accessed before their declaration in the code.


const arr = [1,2,3,4,5];

const [a,b,c] = arr;

console.log(a);