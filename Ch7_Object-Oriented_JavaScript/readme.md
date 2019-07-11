# CHAPTER 7 - Using Object-Oriented JavaScript
### Introduction to OOP
#### Understanding Encapsulation
* Encapsulated objects
* Interface
* Principle of information hiding
#### Understanding Classes
* Using Build-In JavaScript Classes
* Instantiating an Object
* Performing garbage collection
### Using the Date, Number, and Math Classes
#### Date Class
* Manipulating the Date and Time with the Date Class
#### Number Class
#### Math Class
### Defining Custom JavaScript Objects
#### Declaring Basic Custom Objects
* Declaring Sub-Objects
* Adding Properties to an Existing Object
* Referring to Object Properties as Associative Arrays
* Creating Methods
* Enumerating Custom Object Properties
* Deleting Properties
* Defining Constructor Functions
* Adding Properties to a Constructor Function
* Adding Methods to a Constructor Function
* Using the prototype Property

## Case Study

![Chapter7_project](/Ch7_Object-Oriented_JavaScript/Case_Study/images/case_StudyCh7.png)

```javascript
"use strict"; // interpret content in JavaScript strict mode

//global variables
var today = new Date();

var ticket = {
    today:{
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDay()
    },
    passengers:{
        fName: "",
        lName: ""
    }
};

function registerName (){
    // createa a reference to the passengers element(ul)
    var passengerList = document.getElementById("passengers");
    // create a new li element as an unattached document node
    var passengerName = document.createElement("li");

    // assign the properties of the ticket object with the field in the form
    ticket.passengers.fName = document.getElementById("fname").value;
    ticket.passengers.lName = document.getElementById("lname").value;

    // add entered name to passenger list in ticket section
    passengerName.innerHTML = ticket.passengers.fName+ " " + ticket.passengers.lName;
    passengerList.appendChild(passengerName);

    // clear the first and last name from the form
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";

    // display ticket and passenger section
    document.getElementById("ticket").style.display = "block";
    document.getElementById("passengersSection").style.display = "block";

    // return focus to first name field
    document.getElementById("fname").focus();

    //add default date or selected date
    var selectedDate = document.getElementById("tripDate").value;
    if(selectedDate !== ""){
        document.getElementById("selectedDate").innerHTML = selectedDate;
    }else{
        document.getElementById("selectedDate").innerHTML = ticket.today.year+'-'+ ticket.today.month+'-'+ticket.today.day;
    }
    //display dateSection
    document.getElementById("dateSection").style.display = "block";
}

function createEventListeners(){
    var nameButton = document.getElementById("addName");
    if(nameButton.addEventListener){
        nameButton.addEventListener("click",registerName,false);
    }else if(nameButton.attachEvent){
        nameButton.attachEvent("onclick",registerName);
    }

}
if(window.addEventListener){
    window.addEventListener("load",createEventListeners,false);
}else if(window.attachEvent){
    window.attachEvent("onload",createEventListeners);
}
```

