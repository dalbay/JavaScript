"use strict";
// // Get the query string by assigning it to a variable
// var queryData = location.search;
// console.log(queryData);
// // OUTPUT:
// // ?fname=Joe&lname=Dow

// // Remove the opening question mark from the string
// queryData = queryData.substring(1,queryData.length);
// console.log(queryData);
// // OUTPUT:
// // fname=Joe&lname=Dow

// //Convert individual pieces of information into array elements
// var queryArray = queryData.split("&");
// console.log(queryArray);
// /* OUTPUT:
// (2) ["fname=Joe", "lname=Dow"]
// 0: "fname=Joe"
// 1: "lname=Dow"
// length: 2
// __proto__: Array(0)
//  */

 
 var queryString = [];
 // function to parse the query string and store the result in an array.
 function getQueryString() {
     // checks if the search property of the Location object has a value;
     if (document.location.search) {
         var getData = location.search;
         // copy all but the first character (?) from the queryData variable
         getData = getData.substring(1, getData.length);
        // extract each name-value pair from the queryData variable and assign it as an element in the queryArray variable
         var queryArray = getData.split('&');
         // declare the hiddenInputs variable (reference to all the hidden fields)
         var hiddenInputs = document.querySelectorAll('input[type=hidden]');
         // assign each name-value pair as an element in the queryArray variable
         for (var i = 0; i < queryArray.length; i++) {
             hiddenInputs[i].value = queryArray[i].substring(queryArray[i].lastIndexOf("=") + 1);
         }
     }
 }

 //Create a function to parse and display data from the query string on a html page.
 function parseData() {
     //encode characters with their character equivalents first.
     var formData = decodeURIComponent(location.search);
     var formArray = [];
     var list = document.querySelector("div.results ul");
     formData = formData.substring(1, formData.length);
     while (formData.indexOf("+") !== -1) {
         formData = formData.replace("+", " ");
     }
     formData = decodeURIComponent(formData);
     formArray = formData.split("&");
     for (var i = 0; i < formArray.length; i++) {
         var newItem = document.createElement("li");
         newItem.innerHTML = formArray[i];
         list.appendChild(newItem);
     }
 }

 // Read from a cookie
 function readFromCookies(){
     var currentFirstName;
     var list = document.querySelector("div.resultFromCookie ul");
     var cookieString = decodeURIComponent(document.cookie);
     var cookieArray =cookieString.split("; ");
     for(var i =0; cookieArray.length;i++){
         currentFirstName = cookieArray[i];
         if(currentFirstName.substring(0,currentFirstName.indexOf("=")) === "fname"){
             var newItem = document.createElement("li");
             newItem.innerHTML = currentFirstName.substring(currentFirstName.indexOf("=") + 1,currentFirstName.length);
             list.appendChild(newItem);
             break;
         }
     }
 }

 // Delete Cookie
 function deleteCookie(){
    //console.log(decodeURIComponent(document.cookie));
    var expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() - 7);
    document.cookie = "lname=" + encodeURIComponent(document.querySelector('div.resultFromCookie ul li')) + "; expires=" + expiresDate.toUTCString();
    //console.log(decodeURIComponent(document.cookie));
 }

 // Create cookie
function createCookies() {
    // var formFields = document.querySelectorAll('input[type=hidden]');
    // var expiresDate = new Date();
    // // add 7 days to expire cookie
    // expiresDate.setDate(expiresDate.getDate() + 7);
    // for (var i = 0;  formFields.length; i++) {
    //     // decode special characters
    //     var currentValue = decodeURIComponent(formFields[i].value);
    //     // create the cookies   
    //     document.cookie = formFields[i].name + "=" + encodeURIComponent(currentValue) + "; expires=" + expiresDate.toUTCString();
    // }
    console.log("Cookie reads: "+decodeURIComponent(document.cookie));
}
// Delete cookie
function deleteCookies(){
    var expiresDate = new Date();
    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split("; ");
    for(var i =0; i <= cookieArray.length;i++){
        if(cookieArray[i].substring(0,cookieArray.indexOf("="))==="fname"){

        }
    }
}


// Function to handle the submit
// this function prevents the form from being submitted immediately, then calls the createCookies function,
// and then fires the submit event on the form.
function handleSubmit(e) {
    e.preventDefault();
    createCookies();
    document.getElementsByTagName("form" [0].submit());
}
// create an event handler to call the handleSubmit function when the form is submitted.
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", handleSubmit, false);
}
// create an event handler for the form that calls the handleSubmit() function
function setUpPage() {
    createEventListeners();
    getQueryString();
    parseData();
   // readFromCookies();
    
}
// when page finishes loading ->
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}








