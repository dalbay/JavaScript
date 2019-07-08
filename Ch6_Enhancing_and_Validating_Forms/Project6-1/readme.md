### This project contains validation for a form that works in all browsers.
* In the opening <form> tag, add code to disable browser-based validation
* Adding global variables
* Validate required fields
* Create Event Listeners for the submit event
* Create function to trigger validation of required fields when the submit button is clicked
* Run setup functions when page finishes loading (code to call the createEventListener() function)
   
![chapter_6_1](/images/project6-1.png)


```javascript
//The Form
   <article>
      <h2>Personal Information</h2>
      <!--disable browser based validation-->
      <form action="results.htm" novalidate="novalidate" >
        <div id="errorText"></div> 
        <div id="numErrorText"></div>
        <fieldset id="contactinfo">
          <label for="addrinput">
            Street Address
          </label>
          <input type="text" id="addrinput" name="Address" required="required" placeholder="number and street name" />
          <label for="cityinput">
            City
          </label>
          <input type="text" id="cityinput" name="City" required="required" />
          <label for="stateinput">
            State/Province
          </label>
          <input type="text" id="stateinput" name="State" required="required" />
          <label for="zipinput">
            Zip/Postal Code
          </label>
          <input type="number" id="zipinput" name="Zip" required="required" />
          <label for="ssn1">
            Social Security Number
          </label>
          <input type="number" id="ssn1" name="SSN1" class="ssn" maxlength="3" required="required" />
          <label for="ssn2" id="ssn2label">
            Social Security Number (continued)
          </label>
          <input type="number" id="ssn2" name="SSN2" class="ssn" maxlength="2" required="required" />
          <label for="ssn3" id="ssn3label">
            Social Security Number (end)
          </label>
          <input type="number" id="ssn3" name="SSN3" class="ssn" maxlength="4" required="required" />
        </fieldset>
        <fieldset id="submitsection">
          <input type="submit" id="submitBtn" value="Submit" />
        </fieldset>
     </form>
   </article>
   <script src="script.js"></script>


/* interpret document contents in JavaScript strict mode */
"use strict";

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
```
