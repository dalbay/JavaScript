"use strict"; // interpret content in JavaScript strict mode

//global variables
var today = new Date();

var countdown;

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




//---------------------------------

// consturctor function
function Order(number, order, payment, ship){
    this.customerNumber = number;
    this.orderDate = order;
    this.paymentMethod = payment;
    this.shippingDate = ship;
}

// create a new object based on the Order constructor
var shoppingBasket = new Order("KJ230P", new Date(2017, 6, 17), "visa", new Date(2017, 6, 18) );

// assigns to the new object a new property with prototype
shoppingBasket.prototype.trackingNumber = "Z20535550349";


// Object definition - Event
function Event(location, date){
    // properties
    this.eventLocation = location;
    this.eventDate = date;
    // method
    this.calcEventCost = calcCost;
    this.eventCost = 0;
}
// method for Event object
function calcCost(guests){
    this.eventCost = guests * 25; //$25 per head
}

// Object definition - GraduationEvent
function GraduationEvent( graduate, school){
    // properties
    this.guestOfHonor = graduate;
    this.schoolName = school;
    // method
    this.showEventDetails = eventDetails;
}
// method for GraduationEvent object
function eventDetails(){
    var summaryDiv = document.getElementById("summarySection");
    summaryDiv.innerHTML += ("<p>Guest of Honor: " + this.guestOfHonor + "</p>");
    summaryDiv.innerHTML += ("<p>School: " + this.schoolName + "</p>");
    summaryDiv.innerHTML += ("<p>Event date: " + this.eventDate + "</p>");
    summaryDiv.innerHTML += ("<p>Event location: " + this.eventLocation + "</p>");
    summaryDiv.innerHTML += ("<p>Event cost: " + this.eventCost.toLocalString() + "</p>");
}

// GraduationEvent object definition extends the Event object definition
GraduationEvent.prototype = new Event();

// instantiate a new object based on GraduationEvent constructor function
var smithGraduation = new GraduationEvent("Jacob Smith","Augusta Tech");
// use inherited properties and method
smithGraduation.eventLocation = "Santa Barbara, CA";
smithGraduation.eventDate = "May 27, 2017";
smithGraduation.calcEventCost(175);
// call method from the Graduation constructor funcion
smithGraduation.showEventDetails();

