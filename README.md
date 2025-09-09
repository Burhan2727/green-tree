<h1> 1) What is the difference between var, let, and const?</h1>
<p>
Var->
<ul>
<li>function scoped or globally scoped if declared outside of function.it does not have block scope</li>
<li>can be reassigned and redeclared in the same scope</li>
</ul>
let->
<ul>
<li>Block scoped. Accessible only whithin {} where its declared </li>
<li>can be reassigned but can not be redeclared in the same scope</li>
</ul>
const->
<ul>
<li>Block scoped. Accessible only whithin {} where its declared </li>
<li>can not be reassigned and  redeclared.however, objects and arrays declared with const  can still have their contents modified</li>
</ul>
</p>

<h1> 2) What is the difference between map(), forEach(), and filter()? </h1>
map()->
<ul>
<li>Execute a function for each element in the array</li>
<li> Return a new array of the same length</li>
</ul>
foreach()->
<ul>
<li>Execute a function for each element in the array</li>
<li>it does not return a new array</li>
</ul>
filter()->
<ul>
<li>Create a new array containing only elements that pass a condition</li>
<li>return a new array</li>
</ul>

<h1>3) What are arrow functions in ES6?</h1>
<p>
Arrow function in ES6 are more concise way to write function expressions in javascript.they have a shorter syntex.
</p>
syntex ->
<ul>
<li>const add = (a, b) => a+b</li>
<li>const square = a => a*2</li>
<li>const square = (a, b) => {const sub = a-b
return sub}</li>
</ul>

<h1>4)How does destructuring assignment work in ES6?</h1>
Array destructure ->
<ul>
<li>const arr = [1, 2, 3]</li>
destructure -> const [a, b, c]= arr;
-> a=1, b=2, c=3
</ul>
object destructure ->
<ul>
<li>const person = {name: "Burhan", age: 28};</li>
destructure -> const {name, age} = person;
</ul>
<h1>5) Explain template literals in ES6. How are they different from string concatenation?
</h1>
<p>Template literals are a new way of creating string in ES6.they are defined backticks (``) instead of single or double qoutes</p>

key features ->
<ul>
<li>String Interpolation</li>
you can directly embed variables or expressions inside a string using ${} syntax.<br>
EXAMPLE- let name = "burhan";
let greeting = `Hello, ${name}`;
<li>Multi line string:</li>
let song = `amar shonar bangla
<br>
ami tomay valobashi
`
<li>Expression Evaluation:</li>
let a = 1; let b = 2;
let result = `The sum of ${a} and ${b} is ${a + b}`
</ul>