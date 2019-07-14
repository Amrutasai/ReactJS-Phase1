**2.	What is the difference between interpreted and compiled language? Give examples for each.**<br></br>
It is very difficult for a programmer to code in machine language which operated in '0' and '1'. 
Hence the concept of high level language(C,Java,Python, etc.) was introduced in which the programmer can type in engish. 
To translate this code to machine understandable code we need a translator.Interpreters and Compilers do this job.  
The difference between a compiled and Interpreted language lies in the method a given code is executed.
<br></br>An Interpreter:
<li>Source code is the program itself.</li>
<li>They require an interpreter every time they are executed.</li>
<li>Code is re-executed every time.</li>
<li>It is very portable provided the destination computer has an interpreter to execute the code.</li>
<li>The code will execute if the computer does not have an interpreter for that language.</li>
<li>Slower than compiled programs but easier to debug.</li>
<li>Examples:JavaScript, Python, Perl.</li><br>
A Compiler:<br></br>
<li>The programmer has to write the code in high level language and then compile it to translate it into machine code.
This machine level code(BYTE code) is the source code and it is not human readable.</li>
<li>The machine level code is specific to its own processor because of different architechture.
The compiled code is not portable.</li>
<li>The program is processed only once to generate compiled source code for execution.The same compiled code is used for future use</li>
<li>They are faster than a program run through an interpreter.</li>
<li>It is possible to recompile the code in another computer to exeecute it on different platforms.</li>
<li>The byte code is executed by the Operating System.</li>
<li>Examples:C, Fortran,C++,Java.</li>
<br></br>

**3.	What are the different ways of defining a variable? Explain with examples. What is the disadvantage of using var?**<br></br>
<li>Names should begin with lowercase string.</li>
<li>Names cannot contain symbols or begin with symbols.</li>
<li>Names cannot begin with a number.</li>
<li>Names can contain a mix of uppercase strings, lowercase strings, and numbers.</li>
<br>There are 3 types of variables in JavaScript.
<ol>
  <li>
  let:
  <br>Variables whose value can be changed at any point in the program.Because JavaScript   uses interpreter, the value may be changed at any point.The value of variable need     not be defuned at the time of declaration.Are not global in nature. 
  </li>
  <li>
  const:
  <br>Variable whose value cannot be changed at any point in the program after       declaration.They must be declared at initialization.
  </li>
  <li>
  var:
  <br>Variable similar to let but has global scope.Its value can be changed throughout the program.It is recommended not to use this variable type.
  </li>
</ol>
<br>Examples:
<br>let a=1; 
<br>const pi=3.14;
<br>var b=3;
<br>The variable type is automatically understood be it string,numerical,fload,boolean,etc.
<br>{
var a=1;
let b=2;}
<br>console.log(a);
<br>console.log(b);
<br>OUTPUT:
<br>1
<br>error
<br>Expected behaviour of var is block scope but we get global scope. Due to this unexpected behaviour we avoid using var and use only let and const.

**<br>4.	What are the different types of Scopes in Javascript? Explain with examples each in detail.**
<br></br>
There are various types of scopes in JavaScript.
<ol>
<li>Global Scope<br>
All variables are by default Global in scope. This means it is accessible anywhere in the JavaScript code.<br>
Examples:<br>
let a=10;<br>
function FunctionalScope()<br>
{
  <br>console.log(a);// Local Scope<br>
}<br>
console.log(a); //Global Scope<br>
OUTPUT:<br>
10<br>
10
</li>
<li>
Block Scope<br>
Certain variables which are defined in block cannot be accessed outside block.<br>
Examples:<br>
{<br>
var a=1;<br>
let b=2;<br>
}<br>
console.log(a);<br>
console.log(b);<br>
OUTPUT<br>
1 //unexpected behaviour of var.Hence not recommended.<br> 
error<br>
</li>
<li>
Funtional Scope<br>
Certain variables are restricted to function body where they are declared.<br>
Examples:<br>
{<br>
var a=1;<br>
let b=10;<br>}<br>
console.log(a);<br>
function help()<br>{<br>
let a=4;<br>
let b=2;<br>}<br>
console.log(a);<br>
OUTPUT:<br>
1<br>
1 //accesses global scope a=1
</li>
</ol>
EXAMPLE:<br>
let pi=3.14; // Global Scope<br>
{<br>
var a=1;<br>
let b=10;<br>
console.log(pi);<br>
}<br>
console.log(a); //Block Scope<br>
function help()<br>
{<br>
var a=4;<br>
let b=2:<br>
console.log(pi); //Global Scope<br>
console.log(a); //Functional Scope<br>
}<br>
console.log(a); //Block Scope<br>
console.log(pi); //Global Scope;<br>
help();<br>
OUTPUT:<br>
3.14<br>
1<br>
1<br>
3.14<br>
3.14<br>
4<br>

**<br>5.	What are the different types of function? Explain each in detail with example. Explain the working of this in each type.**
<br>
<br>Function<br>
<ol>
<li>Anonymous function<br>
These functions can be involked using the variable name.They do not need function names.<br>
let a=function(var1,var2,...)<br>
{<br>body<br>}
</li>
<li>
Normal function<br>
These functions use 'function' keyword and also need func_name at declaration<br>
function func_name(var1,var2,...)<br>
{<br>body<br>}
</li>
<li>
Declaration in class/objects<br>
These are declared in class or objects. They don't need function keyword for declaration and have to be accessed using class/object instance.<br>
name(var1,var2,...)<br>
{<br>body<br>}
</li>
<li>
</li>
</ol>
