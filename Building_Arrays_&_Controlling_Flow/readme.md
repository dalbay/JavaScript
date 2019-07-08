
# CHAPTER 3 – BUILDING ARRAYS AND CONTROLLING FLOW

## Declaring and Initializing Arrays:
Array literal
most common way to create an array
declares a variable and specifies array as content
JavaScript values assigned to array elements can be different data types

Syntax
var name = [value1, value2, value3, …];

Example:
Create an array named newsSections containing 4 strings as elements
var newsSections = ["world","local","opinion","sports"];


## Accessing Element Information:
To access an element’s value:
Include brackets and element index

Examples:
var sec1Head = document.getElementById("section1");
var sec2Head = document.getElementById("section2");
var sec3Head = document.getElementById("section3");
sec1Head.innerHTML = newsSections[0]; // "world"
sec2Head.innerHTML = newsSections[1]; // "local"
sec3Head.innerHTML = newsSections[2]; // "opinion"


## Using the Array Object:
JavaScript represents arrays with the Array object
Contains a special constructor named Array()
Constructor
Special function type used as the basis for creating reference variables
Syntax
var newsSections = new Array(6);

Note: Create arrays using array literals (easier) rather than using Array() constructor.


## Referencing Default Collections of Elements
getElementsByTagName() method
Can reference web page element by looking up all elements of a certain type in document and referencing one element in that collection
Resulting collection uses syntax similar to arrays

Example:
For instance, to reference the third li element in a document, you could use the getElementsByTagName() method to access the collection of all li elements in the document, and then add [2] to the end, indicating that you want to access the third instance of the li element in the document as follows:
document.getElementsByTagName("li")[2]
     
       To access the content of this element, you could add the innerHTML property, as follows:
    document.getElementsByTagName("li")[2].innerHTML


## Repeating Code
Three types of loop statements
while statements

Example:
assigning array element values to table cells:

function addColumnHeaders() {
   var i = 0;
   while (i < 7) {
      document.getElementsByTagName("th")↵
         [i].innerHTML = daysOfWeek[i];
      i++;
   }
}

do/while statements
Example:
adding days of week with a do/while statement.

var i = 0;
do {
   document.getElementsByTagName("th")[i].innerHTML =↵
      daysOfWeek[i];
   i++;
} while (i < 7);


for statements
Repeats a statement or series of statements
As long as a given conditional expression evaluates to a truthy value
Can also include code that initializes a counter and changes its value with each iteration
Example:
addColumnHeaders() function with a for statement.

function addColumnHeaders() {
   for (var i = 0; i < 7; i++) {
      document.getElementsByTagName("th")[i].innerHTML↵
         = daysOfWeek[i];
   }
}


## Using continue Statements to Restart Execution
continue statement
Halts a looping statement
Restarts the loop with a new iteration
Used to stop a loop for the current iteration
Have the loop to continue with a new iteration
Examples:
for loop with a continue statement
for (var count = 1; count <= 5; count++) {
   if (count === 3) {
      continue;
   }
   document.write("<p>" + count + "</p>");
}


## Making Decisions
Decision making
Process of determining the order in which statements execute in a program
if statement
Most common type of decision-making statement
Example:
var today = "Tuesday"
if (today === "Monday") {
   document.write("<p>Today is Monday</p>");
}
else {
   document.write("<p>Today is not Monday</p>");
}

Else if statemets – is commonly used to enhance event listeners so they’re backward-compatible with older browsers. IE8 and earlier used the attachEvent method instead of the addEventListener method for creating event listeners. Here is an example that adds an event listener using the correct syntax.
Example:
Used to create backward-compatible event listeners:
var submitButton = document.getElementById("button");
if (submitButton.addEventListener) {
   submitButton.addEventListener("click", submitForm,↵
      false);
}
else if (submitButton.attachEvent) {
   submitButton.attachEvent("onclick", submitForm);
}

Switch statement
Controls program flow by executing a specific set of statements
      Dependent on an expression value
Compares expression value to value contained within a case label
default label
Executes when the value returned by the switch statement expression does not match a case label
break statement
Ends execution of a switch statement
Should be final statement after each case label

Example:
function city_location(americanCity) {
   switch (americanCity) {
      case "Boston":
         return "Massachusetts";
         break;
      case "Chicago":
         return "Illinois";
         break;
      case "Los Angeles":
         return "California";
         break;
      case "Miami":
         return "Florida";
         break;
      case "New York":
         return "New York";
         break;
      default:
         return "United States";
         break;
   }
}
document.write("<p>" + city_location("Boston") + "</p>");



EXAMPLE - Case Project:


