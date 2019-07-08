/*Hands-on Project 6-1
    Faruk Dalbay
    07/02/2019
 */

"use strict";//interpret document contents in JavaScript strict mode

/* global variables */
var formValidity = true;

/* validate required fields */
function validateRequired(){
    var inputElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputElements.length;
    var requiredValidity = true;
    var currentElement;

    //validate all input elements in fieldset
    try{
            for(var i = 0; i < elementCount; i++){
        currentElement = inputElements[i];
        if(currentElement.value === ""){
            currentElement.style.background = "rgb(255,233,233)";
            requiredValidity = false;
        }else{
            currentElement.style.background = "white";
        }
    }
    if(requiredValidity === false){
        throw "Please complete all fields";
    }
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";

    }catch(msg){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

/* validate number fields for older browsers */
function validateNumbers(){
    var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
    var elementCount = numberInputs.length;
    var numErrorDiv = document.getElementById("numErrorText");
    var numbersValidity = true;
    var currentElement;
    try{
        for(var i = 0; i < elementCount; i++){
            //validate all input elements of type "number" in fieldset
            currentElement = numberInputs[i];
            if(isNaN(currentElement.value) || (currentElement.value === "")){
                currentElement.style.background = "rgb(255,233,233)";
                numbersValidity = false;

            }else{
                currentElement.style.background = "white";
            }
        }
        if(numbersValidity === false){
            throw "Zip and Social Security values must be numbers.";
        }
        numErrorDiv.style.display = "none";
        numErrorDiv.innerHTML = "";
    }catch(msg){
        numErrorDiv.style.display = "block";
        numErrorDiv.innerHTML = msg;
        formValidity = false;
    }
}

/* create event listeners */
function createEventListeners(){
    var form = document.getElementsByTagName("form")[0];
    if(form.addEventListener){
        form.addEventListener("submit",validateForm,false);
    }else if(form.attachEvent){
        form.attachEvent("onsubmit",validateForm);
    }
}

/* trigger validation of required fields when the submit button is clicked */
function validateForm(evt){
    if(evt.preventDefault){
        evt.preventDefault(); //prevent form from submitting(prevents default behaviour)
    }else{
        evt.returnValue = false; //prevent form from submitting in IE8
    }
    formValidity = true; //reset value for revalidation
    validateRequired(); // will validate or fail and set the value for validation
    validateNumbers();
    if(formValidity === true){
        document.getElementsByName("form")[0].submit();
    }
}

/* run the setup function when page finishes loading */
if(window.addEventListener){
    window.addEventListener("load",createEventListeners,false);
}else if(window.attachEvent){
    window.attachEvent("onload",createEventListeners);
}

