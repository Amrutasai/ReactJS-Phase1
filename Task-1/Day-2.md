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
<li>The machine level code is specific to its own processor because of different architecture.
The compiled code is not portable.</li>
<li>The program is processed only once to generate compiled source code for execution.The same compiled code is used for future use</li>
<li>They are faster than a program run through an interpreter.</li>
<li>It is possible to recompile the code in another computer to exeecute it on different platforms.</li>
<li>The byte code is executed by the Operating System.</li>
<li>Examples:C, Fortran,C++,Java.</li>
<br></br>

**3.	What are the different ways of defining a variable? Explain with examples. What is the disadvantage of using var?**<br></br>
Naming Rules:
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
<li>let a=1; 
<li>const pi=3.14;
<li>var b=3;
<br>The variable type is automatically understood be it string,numerical,float,boolean,etc.
<br><li>{
var a=1;
let b=2;}
<br>&nbsp&nbsp&nbsp console.log(a);
<br>&nbsp&nbsp&nbsp console.log(b);
<br><li>OUTPUT:
<br>&nbsp&nbsp&nbsp&nbsp 1
<br>&nbsp&nbsp&nbsp&nbsp error
<br>Expected behaviour of var is block scope but we get global scope. Due to this unexpected behaviour we avoid using var and use only let and const.

**<br>4.	What are the different types of Scopes in Javascript? Explain with examples each in detail.**
<br></br>
There are various types of scopes in JavaScript.
<ol>
<li>Global Scope<br>
All variables are by default Global in scope. This means it is accessible anywhere in the JavaScript code.<br>
<br>Examples:<br>
let a=10;<br>
function FunctionalScope()<br>
{
  <br>console.log(a);// Local Scope<br>
}<br>
console.log(a); //Global Scope<br>
OUTPUT:<br>
10<br>
10
</li><br>
<li>
Block Scope<br>
Certain variables which are defined in block cannot be accessed outside block.<br>
<br>Examples:<br>
{<br>
var a=1;<br>
let b=2;<br>
}<br>
console.log(a);<br>
console.log(b);<br>
OUTPUT<br>
1 //unexpected behaviour of var.Hence not recommended.<br> 
error<br>
</li><br>
<li>
Funtional Scope<br>
Certain variables are restricted to function body where they are declared.<br>
<br>Examples:<br>
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
<br>We use functions so that we need not re-write the same code again and again in the code. However to reference a declared value in itself we use 'this' keyword.The values pointed to by the 'this' keyword can change depending on the type of function and how they are called/involked.
<br>Function Types:<br>
<ol>
<li>Anonymous function<br>
These functions can be involked using the variable name.They do not need function names.This in this type of function refers to the object it is called on behalf of<br>
<br>let a=function(var1,var2,...)<br>
{<br>&nbsp body<br>}<br>
Example:<br>
let a=function()<br>
{<br>
&nbsp let x=1;<br>
&nbsp let y=2;<br>
&nbsp console.log(x);<br>
}<br>
In this case the 'this' in this case would refer to the object 'a'.We can access element x&y using 'this.x' and 'this.y'.

</li><br>
<li>
Normal function<br>
These functions use 'function' keyword and also need func_name at declaration<br>
<br>function func_name(var1,var2,...)<br>
{<br>&nbsp body<br>}
<br>Example:<br>
function help()<br>
{<br>
&nbsp let x=1;<br>
&nbsp let y=2;<br>
&nbsp console.log(x);<br>}<br>
The 'this' keyword does not refer to the currently executing function, so must refer to Function objects by name, even within the function body
</li><br>

<li>
Declaration in class/objects<br>
These are declared in class or objects. They don't need function keyword for declaration and have to be accessed using class/object instance.'this' key word in this case would point at the instance of the class/object the function belongs to.<br>
<br>name(var1,var2,...)<br>
{<br>&nbsp body<br>}
<br>Example:
<br>help()<br>
{<br>
&nbsp let x=1;<br>
&nbsp let y=2;<br>
&nbsp console.log(x)<br>}
<br>'this' in cases like this would point to the object or class declaration this function is a part of.
</li><br>
<li>
Arrow Function<br>
An arrow function is a type of anonymous function. Takes 'this' from parent class, hence must not be used in functions with defined values.<br>
let name:()=> //Object function<br>{<br>&nbsp body<br>}
<br>let name=()=> //Class function<br>
{<br>
&nbsp body<br>}
<br>Example:
<br>let a={<br>
&nbsp fname:'Amruta',<br>
&nbsp lname:'Sai',<br>
&nbsp getName:()=>{<br>
&nbsp&nbsp&nbsp&nbsp&nbsp return `${this.fname}` //Global Scope<br>
&nbsp&nbsp&nbsp&nbsp&nbsp return `${a.lname}`<br>}
<br>}<br>
OUTPUT:<br>
undefined,Sai<br>
<br>
</li>
</ol>

**6.	What is NodeJS? Explain the event loop with example.**<br>

<br>JavaScript was designed with intention of it running only on browsers.<br>It was not designed to be executed on desktops, which made it hard for its debugging.Hence NodeJS was introduced.

NodeJS is a free, open source, Java runtime environment built on V8 engine that executes JavaScript code outside of browsers.<br>
NodeJS has an event-driven architecture that supports asynchronous I/O operations which is very important considering JavaScript is a *single thread* language(Does not support multiple thread execution at a time.).<br>

When NodeJS is initialized, it starts the event loop, which is a loop that runs infinitely executing the taskes that are assigned to execute at various states along its path. This event loop is responsible for the response given by the operations hence those which are I/O based or take large amount of time must be executed in asynch(task assigned to kernel to run in background).
The operation assigned to the async method returns a *promise* object.<br>
Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel pings NodeJS so that the appropriate callback may be added to the queue to eventually be executed, hence maintaining concurrency.
After every loop NodeJS checks for pending operations waiting in callback queue(asynchronous I/O or timers) and terminates if there arn't any.

States <br>
<li>Timers: Queue of callbacks scheduled by setTimeout() and setInterval().<br>
<li>Pending callbacks: Queue of postponed callbacks.<br>
<li>Poll: Queue of new I/O events; execute I/O related callbacks.<br>
<li>Check: setImmediate() callbacks are invoked here.<br>
<li>Close callbacks: some close callbacks, e.g. socket.on('close', ...).<br>

Since the event loop exhausts the queue of one state before moving to the others, it is not necessary that the Timer based callbacks will execute exactly after their time duration is covered. In fact, they can be delayed by the execution of other processes in other queues and the time specified in the function is the minimum delay in its execution.<br>

For example:<br>
Code:<br>
console.log("i am first");<br>
setTimeout(function timeout() {
    console.log("i am second");
}, 0);<br>
console.log("i am third");<br>
Output:<br>
i am first<br>
i am third<br>
i am second<br>
Explanation:<br>
Even though the timeout for statement 2 is 0ms,it is added to the loop after third statement because 0ms is the minimum time delay for statement 2 and it getss added to callback queue whereas statement 3 has no delay and hence directly executed on the loop.

**7.	What is Promise? How do you create a promise? Explain with an example.**

A Promise is a class that creates an object which helps us keep track of the details of an asynchronous event.
It takes one function with 2 arguments.

<li>Resolved
<li>Rejected.

There are 3 states of a promise:
<li>Pending:
<br>&nbsp&nbsp&nbsp&nbsp Event has not taken place yet.
<br>&nbsp&nbsp&nbsp&nbsp OR
<br>&nbsp&nbsp&nbsp&nbsp Data hasn't been requested yet.

<li>Resolved:
<br>&nbsp&nbsp&nbsp&nbsp Event was sucessfully executed.
<br>&nbsp&nbsp&nbsp&nbsp OR
<br>
&nbsp&nbsp&nbsp&nbsp Data was fetched successfully.We can now define functions that are to be executed in this case using 'then' clause.

<li>Rejected:
<br>&nbsp&nbsp&nbsp&nbspEvent encountered errors.
<br>&nbsp&nbsp&nbsp&nbspOR
<br>&nbsp&nbsp&nbsp&nbspData was not fetched. We can define function to handle this error using 'catch' clause

Skeleton of a promise:

let a= new Promise((resolve,reject)=><br>{
  <br>
  
  **resolve(data);** //if data fetch is success. data:processed data that is pointed to by the promise.<br>
  **reject(data);** //if data not fetched. In this case data is an error object.<br>
})
<br>**a.then**((data)=><br>
{<br>console.log(data);<br>})
**.catch**((data)=><br>
{<br>console.log(data);<br>})

Examples:<br>
Promises are returned by asynchronous method,during fetching APIs