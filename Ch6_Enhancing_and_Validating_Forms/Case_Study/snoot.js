/**JavaScript 6th Edition
 * 
 * Chapter 6
 * Chapter case
 * 
 * Snoot Flowers
 * Functions
 * Author : Faruk Dalbay
 * Date: 6/29/2019
 * 
 * Filename: snoot.js 
 */

 "use strict";//interpret document contents in JavaScript strict mode

/* change the days list dynamically based on the selected month and year */
/* global variables */
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();
var formValidity = true;
/* set up node building blocks for selection list of day */
function setupDays(){
    //get all the day options
    var dates = document.getElementById("delivDy").getElementsByTagName("option");
    //copies the 29th option element with index no 28 to the twentyNine node
    twentyNine.appendChild(dates[28].cloneNode(true));
    //copies the 29th and 30th option elements 
    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true));
    //copies the 29th, 30th, and 31st option elements
    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true));
}
/* function to update days */
function updateDays(){
    var deliveryDay = document.getElementById("delivDy");
    var dates = deliveryDay.getElementsByTagName("option");
    var deliveryMonth = document.getElementById("delivMo");
    var deliveryYear = document.getElementById("delivYr");
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;

    while(dates[28]){
        /*remove child with index of 28 until this index is empty(repeats this until no
            child exists at index 28.) */
        deliveryDay.removeChild(dates[28]);
    }

    if(deliveryYear.selectedIndex === -1){
        //if no year is selected, choose the default year so length of Feb can be determined
        deliveryYear.selectedIndex = 0;
    }

    if(selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2018"){
        //if leap year, Feb has 29 days
        deliveryDay.appendChild(twentyNine.cloneNode(true));
    }else if(selectedMonth ==="4" || selectedMonth ==="6" || selectedMonth === "9" || selectedMonth === "11"){
        //these months have 30 days
        deliveryDay.appendChild(thirty.cloneNode(true));
    }else if(selectedMonth ==="1" || selectedMonth ==="3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12"){
        //these months have 31 days
        deliveryDay.appendChild(thirtyOne.cloneNode(true));
    }
}



 /* remove default values and fromatting from state and delivery date selection
    lists */
function removeSelectDefaults(){
    //this variable references a collection that includes all the select elements in the document
    var emptyBoxes = document.getElementsByTagName("select");
    //loop to run commands on the select element at position i
    for(var i = 0; i < emptyBoxes.length; i++){
        //enter the following code to set the selectedIndex value:
        emptyBoxes[i].selectedIndex = -1;
    }
}

//remove fallback placeholder text
function zeroPlaceholder(){
    var messageBox = document.getElementById("customText");
    messageBox.style.color = "black";
    if(messageBox.value === messageBox.placeholder){
        messageBox.value = "";
    }
}

//restore placeholder text if box contains no user entry
function checkPlaceholder(){
    var messageBox = document.getElementById("customText");
    if(messageBox.value === ""){
        messageBox.style.color = "rgb(178,184,183)";
        messageBox.value = messageBox.placeholder;
    }
}

//to add placeholder text to the Custom message box in older browser:
function generatePlaceholder(){
    if(!Modernizr.input.placeholder){
        var messageBox = document.getElementById("customText");
        messageBox.value = messageBox.placeholder;
        messageBox.style.color = "rgb(178,184,183)";
        if(messageBox.addEventListener){
            messageBox.addEventListener("focus",zeroPlaceholder,false);
            messageBox.addEventListener("blur",checkPlaceholder,false);
        }else if(messageBox.attachEvent){
            messageBox.attachEvent("onfocus",zeroPlaceholder);
            messageBox.attachEvent("onblur",checkPlaceholder);
        }
    }
}

//automatically check Custom message check box if user makes entry in  customText box
function autockeckCustom(){
    var messageBox = document.getElementById("customText");
    if(messageBox.value !== "" && messageBox.value !== messageBox.placeholder){
        //if user entry in textarea, check Custom check box
        document.getElementById("custom").checked = "checked";
    }
}

//copy values for Billing Address fields to Delivery Address fields
function copyBillingAddress(){
    var billingInputElements = document.querySelectorAll("#billingAddress input");
    var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");

    if(document.getElementById("sameAddr").checked){
        //copy all input values
        for(var i = 0; i < billingInputElements.length; i++){
            deliveryInputElements[i+1].value = billingInputElements[i].value;
        }
        //copy the single select element
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
    }else{
        for(var i = 0; i < billingInputElements.length; i++){
            deliveryInputElements[i +1].value = "";
        }
        document.querySelector("#deliveryAddress select").selectedIndex = -1;//means no value selected
    }
}
/* validate address fieldsets */
function validateAddress(fieldsetId){
    var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
    var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;

    try{
        for(var i = 0; i < elementCount; i++){
            //validate all input elements in fieldset
            currentElement = inputElements[i];
            if(currentElement.value === ""){
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            }else{
                currentElement.style.background = "white";
            }
        }
      currentElement = document.querySelector("#" + fieldsetId + " select");
        //validate state select element
        if (currentElement.selectedIndex === -1) {
            currentElement.style.border = "1px solid red";
            fieldsetValidity = false;
        } else {
            currentElement.style.border = "";
        }
       if(fieldsetValidity === false){
            //throw appropriate message based on current fieldset
            if(fieldsetId === "billingAddress"){
                throw "Please complete all Billing Address information.";
            }else{
                throw "Please complete all Delivery Address information";
            }
        }else{
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    }catch(msg){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

/* validate delivery date fieldset */
function validateDeliveryDate(){
    var selectElements = document.querySelectorAll("#deliveryDate select");
    var errorDiv = document.querySelector("#deliveryDate .errorMessage");
    var fieldsetValidity = true;
    var elementCount = selectElements.length;
    var currentElement;

    try{
        for(var i = 0; i < elementCount; i++){
            currentElement = selectElements[i];
            if(currentElement.selectedIndex === -1){
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }else{
                currentElement.style.border = "";
            }
        }
        if(fieldsetValidity === false){
            throw "Please specify a delivery date.";
        }else{
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    }
    catch(msg){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
/* validate payment fieldset */
function validatePayment(){
    var errorDiv = document.querySelector("#paymentInfo .errorMessage");
    var fieldsetValidity = true;
    var ccNumElement = document.getElementById("ccNum");
    var selectElements = document.querySelectorAll("#paymentInfo select");
    var elementCount = selectElements.length;
    var cvvElement = document.getElementById("cvv");
    var cards = document.getElementsByName("PaymentType");
    var currentElement;

    try{
        //verify that a card is selected
        if(!cards[0].checked && !cards[1].checked && !cards[2].checked && !cards[3].checked){
            for(i = 0; i < 4; i++){
                cards[i].style.outline = "1px solid red";
            }
            fieldsetValidity = false;
        }else{
            for(i = 0; i < 4; i++){
                cards[i].style.outline = "";
            }
        }
        //verify that a card number has been entered
        if(ccNumElement.value === ""){
            ccNumElement.style.background = "rgb(255,233,233)";
            fieldsetId = false;
        }else{
            ccNumElement.style.background = "white";
        }
        //verify that a month and year have been selected
        for(var i = 0; i < elementCount; i++){
            currentElement = selectElements[i];
            if(currentElement.selectedIndex === -1){
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }else{
                currentElement.style.border = "";
            }
        }
        //verify that a cvv value has been entered
        if(cvvElement.value === ""){
            cvvElement.style.background = "rgb(255,233,233)";
            fieldsetValidity = false;
        }else{
            cvvElement.style.background = "white";
        }
        //check if any field is blank
        if(!fieldsetValidity){
            throw "Please complete all payment infromation";
        }else{
            errorDiv.style.display = "none";
        }
    }catch(msg){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

/* validate message fieldset */
function validateMessage(){
    var errorDiv = document.querySelector("#message .errorMessage");
    var msgBox = document.getElementById("customText");
    try{
        if(document.getElementById("custom").checked && ((msgBox.value === "") || (msgBox.value === msgBox.placeholder))){
            //custom checked but message box empty
            throw "Please enter your message text.";
        }else{
            errorDiv.style.display = "none";
            msgBox.style.background = "white";
        }
    }catch(msg){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        msgBox.style.background = "rgb(255,233,233)";
        formValidity = false;
    }
}

/* validate create account fieldset */
function validateCreateAccount(){
    var errorDiv = document.querySelector("#createAccount .errorMessage");
    var usernameElement = document.getElementById("username");
    var pass1Element = document.getElementById("pass1");
    var pass2Element = document.getElementById("pass2");
    var passwordMismatch = false;
    var invColor = "rgb(255,233,233)";

    try{
        //reset styles to valid state
        usernameElement.style.background = "";
        pass1Element.style.background = "";
        pass2Element.style.background = "";
        errorDiv.style.display = "none";
        if(usernameElement.value !== "" && pass1Element.value !== "" && pass2Element.value !== ""){
            //all fields are filled
            if(pass1Element.value !== pass2Element.value){
                //password don't match
                passwordMismatch = true;
                throw "Passwords entered do not match; please reenter.";
            }
        }
        if(!(usernameElement.value === "" && pass1Element.value === "" && pass2Element.value === "")){
            //not all fields are blank
            throw "Please complete all fields to create an account.";
        }
    }catch(msg){
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        if(passwordMismatch){
            usernameElement.style.background = "";
            pass1Element.style.background = invColor;
            pass2Element.style.background = invColor;
        }else{
            if(usernameElement.value === ""){
                usernameElement.style.background = invColor;
            }
            if(pass1Element.value === ""){
                pass1Element.style.background = invColor;
            }
            if(pass2Element.value === ""){
                pass2Element.style.background = invColor;
            }
        }
        formValidity = false;
    }
}

/* validate number fields for older browsers */
function validateNumbers(){
    var ccNotNum;
    var cvvNotNum;
    var ccNumElement = document.getElementById("ccNum");
    var cvvElement = document.getElementById("cvv");
    var ccNumErrMsg = document.getElementById("ccNumErrorMessage");
    var cvvErrMsg = document.getElementById("cvvErrorMessage");

    try{
        if(isNaN(ccNumElement.value) || ccNumElement.value === ""){
            ccNotNum = true;
        }else{
            //ccNum value is a number
            ccNumElement.style.background = "";
            ccNumErrMsg.style.display = "none";
        }
        if(isNaN(cvvElement.value) || cvvElement.value === ""){
            cvvNotNum = true;
        }else{
            //cvv values is a number
            cvvElement.style.background = "";
            cvvErrMsg.style.background = "none";
        }
        if(ccNotNum || cvvNotNum){
            throw "must contain numbers only.";
        }
    }catch(msg){
        if(ccNotNum){
            ccNumElement.style.background = "rgb(255,233,233)";
            ccNumErrMsg.style.display = "block";
            ccNumErrMsg.innerHTML = "The card number " + msg;
        }
        if(ccNotNum){
            cvvElement.style.background = "rgb(255,233,233)";
            cvvErrMsg.style.display = "block";
            cvvErrMsg.innerHTML = "The cvv number " + msg;
        }
        formValidity = false;
    }
}


/* validate form */
function validateForm(evt){
    if(evt.preventDefault){
        evt.preventDefault();//prevent form from submitting(prevents the default behaviour )
    }else{
        evt.returnValue = false;//prevent form from submitting in IE8
    }
    formValidity = true;//reset value for revalidation

    validateAddress("billingAddress");
    validateAddress("deliveryAddress");
    validateDeliveryDate();
    validatePayment();
    validateMessage();
    validateCreateAccount();
    validateNumbers();
}

/* create event listeners */
/* this code adds two event listeners: the first to call the updateDays() function when
    the value in the month selection list changes, and the second to call the same function
    when the value in the year selection list changes. */
function createEventListeners(){
    var deliveryMonth = document.getElementById("delivMo");
    if(deliveryMonth.addEventListener){
        deliveryMonth.addEventListener("change",updateDays,false);
    }else if(deliveryMonth.attachEvent){
        deliveryMonth.attachEvent("onchange",updateDays);
    }

    var deliveryYear = document.getElementById("delivYr");
    if(deliveryYear.addEventListener){
        deliveryYear.addEventListener("change",updateDays,false);
    }else if(deliveryYear.attachEvent){
        deliveryYear.attachEvent("onchange",updateDays);
    }

    var messageBox = document.getElementById("customText");
    if(messageBox.addEventListener){
        messageBox.addEventListener("blur",autockeckCustom,false);
    }else if(messageBox.attachEvent){
        messageBox.attachEvent("onblur",autockeckCustom);
    }

    var same = document.getElementById("sameAddr");
    if(same.addEventListener){
        same.addEventListener("click",copyBillingAddress,false);
    }else if(same.attachEvent){
        same.attachEvent("onclick",copyBillingAddress);
    }

    var form = document.getElementsByTagName("form")[0];
    if(form.addEventListener){
        form.addEventListener("submit",validateForm,false);
    }else if(form.attachEvent){
        form.attachEvent("onsubmit",validateForm);
    }
}

/* run initial form configuration functions when page is loaded first */
function setUpPage(){
    removeSelectDefaults();
    setupDays();
    createEventListeners();
    generatePlaceholder();
}


/* run setup function when page finishes loading */
if(window.addEventListener){
    window.addEventListener("load",setUpPage,false);
}else if(window.attachEvent){
    window.attachEvent("onload",setUpPage);
}

