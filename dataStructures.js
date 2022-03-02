// level {1/2/3}
/*## Javascript data structure questions
​
### level 1:




/*1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
Output should be [2, 3, 4] */

/*ANS */

let arr=[1,2,3].map(e=>{return e+1})
console.log(arr)

/*2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
Output should be a number: 6 */

let a=[1,2,3].length*2
console.log(a)

/*3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
Output should be a string: "name: Elie, rank: Pro" */ 

let obj={name: 'Elie', rank: 'Pro'}
console.log(JSON.stringify(obj))




