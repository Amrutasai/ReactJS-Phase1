**2.	What is the difference between interpreted and compiled language? Give examples for each.**
It is very difficult for a programmer to code in machine language which operated in '0' and '1'. 
Hence the concept of high level language(C,Java,Python, etc.) was introduced in which the programmer can type in engish. 
To translate this code to machine understandable code we need a translator.Interpreters and Compilers do this job.  
The difference between a compiled and Interpreted language lies in the method a given code is executed.
An Interpreter:<br>
<li>Source code is the program itself.
<li>They require an interpreter every time they are executed.
<li>Code is re-executed every time.
<li>It is very portable provided the destination computer has an interpreter to exzecute the code.
<li>The code will **not** execute if the computer does not have an interpreter for that language.
<li>Slower than compiled programs but easier to debug.
<li>Examples:JavaScript, Python, Perl.
<br>A Compiler:
<li>The programmer has to write the code in high level language and then compile it to translate it into machine code.<br>
This machine level code(BYTE code) is the source code and it is not human readable.
<li>The machine level code is specific to its own processor because of different architechture.
The compiled code is not portable.
<li>The program is processed only once to generate compiled source code for execution.The same compiled code is used for future use.
<li>They are faster than a program run through an interpreter.
<li>It is possible to recompile the code in another computer to exeecute it on different platforms.
<li>The byte code is executed by the Operating System.
<li>Examples:C, Fortran,C++,Java.

