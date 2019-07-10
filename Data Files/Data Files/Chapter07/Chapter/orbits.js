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

