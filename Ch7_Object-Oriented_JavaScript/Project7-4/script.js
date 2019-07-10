/*
Hands-on Project 7-4
Author: Faruk Dalbay
/Date:   7/10/2019
*/

"use strict";

//global variables
var delivInfo = {};  //empty object
var delivSummary = document.getElementById("deliverTo");   //this will be populated in the order summary section

// This function will add the value of each input field to the delivInfo object as a property value.
function processDeliveryInfo(){
    // local variable
    var prop;
    //store the values of the input field
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;

    //add the value of the property to the content of the deliverTo element
    for(prop in delivInfo){
        if(delivInfo[prop] !== ""){
            delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
        }        
    }
}

// function that will call the processDeliveryInfo(), and displays the section element
function previewOrder(){
    processDeliveryInfo();
    document.querySelector("section").style.display = "block";
    document.querySelector("section div").style.display = "block";
}

// Create an event listener on the element with the id value previewBtn. 
// The click event should call the previewOrder() function
function createEventListeners(){
    var previewButton = document.getElementById("previewBtn");
    if(previewButton.addEventListener){
        previewButton.addEventListener("click",previewOrder,false);
    }else if(previewButton.attachEvent){
        previewButton.attachEvent("onclick",previewOrder);
    }
}

// add the statements to run the function that creates the event listener when the 
// page finishes loading.
if(window.addEventListener){
    window.addEventListener("load",createEventListeners,false);
}else if(window.attachEvent){
    window.attachEvent("onload",createEventListeners);
}

