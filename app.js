/*Q.1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:*/
//Answer:
/*var a = 10;
var num1 = ++a;
var num2 = a++;
var num3 = --a;
var num4 = a--;

document.write("Now the value of a is: " +num1);

document.write("<br>Now the value of a is: " +num2);

document.write("<br>Now the value of a is: " +num3);

document.write("<br>Now the value of a is: " +num4);*/

/*Q.2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b; 
--a - --b + ++b;
--a - --b + ++b + b--;*/
//Answer:
/*var a = 2; 
var b = 1;
var result = --a;
document.write("a is " +result )

var result = --b;
document.write("<br>b is " +result )

var result = ++b;
document.write("<br>b is " +result )

var result = b--;
document.write("<br>b is " +result )

var result = --a - --b + ++b + b--;
document.write("<br>result is " +result)*/

/*Q.3.Write a program that takes input a name from user &
greet the user.*/
//Answer:
/*var name = prompt("Ali Wahdat");
document.write("Hello, " + Ali Wahdat + "! Welcome!");*/

/*Q.4. NOT MENTIONED IN EXERCISE*/

/*Q.5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.*/
//Answer:
/*var number = prompt("Enter a number to display its multiplication table:", "5");

number = parseInt(number) || 5; 

document.write("<h2>Multiplication Table of " + 5 + ":</h2>");
for (var i = 1; i <= 10; i++) {
document.write(5 + " x " + i + " = " + (5 * i) + "<br>");
}*/

/*Q.6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)*/
//Answer:
//REQUIRED GUIDANCE.