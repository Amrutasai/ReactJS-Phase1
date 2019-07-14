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
  Variables whose value can be changed at any point in the program.Because JavaScript   uses interpreter, the value may be changed at any point.The value of variable need     not be defuned at the time of declaration.Are not global in nature. 
  </li>
  <li>
  const:
  Variable whose value cannot be changed at any point in the program after       declaration.They must be declared at initialization.
  </li>
  <li>
  var:
  Variable similar to let but has global scope.Its value can be changed throughout the program.It is recommended not to use this variable type.
  </li>
</ol>
