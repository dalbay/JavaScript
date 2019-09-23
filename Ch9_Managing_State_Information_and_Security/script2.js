// interpret the document content in strict mode
"use strict";

// global variable
var queryArray = [];

function populateInfo() {
   // checks if the search property of the Location object has a value;
   if (location.search) {
      var queryData = location.search;
      // declare the hiddenInputs variable (reference to all the hidden fields)
      var hiddenInputs = document.querySelectorAll("input[type=hidden]");
      // copy all but the first character (?) from the queryData variable
      queryData = queryData.substring(1, queryData.length);
      // extract each name-value pair from the queryData variable and assign it as an element in the queryArray variable
      queryArray = queryData.split("&");
      for (var i = 0; i < queryArray.length; i++) {
         hiddenInputs[i].value = queryArray[i].substring(queryArray[i].lastIndexOf("=") + 1);
      }
   }
}

function createCookies() {
   var formFields = document.querySelectorAll("input[type=hidden], input[type=radio], textarea");
   var expiresDate = new Date();
   expiresDate.setDate(expiresDate.getDate() + 7);
   for (var i = 0; i < formFields.length; i++) {
      var currentValue = decodeURIComponent(formFields[i].value);
      currentValue = currentValue.replace(/\+/g, " ");
      document.cookie = formFields[i].name + "=" + currentValue + 
                        "; expires=" + expiresDate.toUTCString();
   }
}

function handleSubmit(evt) {
   if (evt.preventDefault) {
      evt.preventDefault(); // prevent form from submitting
   } else {
      evt.returnValue = false; // prevent form from submitting in IE8
   }
   createCookies();
   document.getElementsByTagName("form")[0].submit();
}

function createEventListeners() {
   var form = document.getElementsByTagName("form")[0];
   if (form.addEventListener) {
      form.addEventListener("submit", handleSubmit, false);
   } else if (form.attachEvent) {
      form.attachEvent("onsubmit", handleSubmit);
   }
}

function setUpPage() {
   createEventListeners();
   populateInfo();
}
// run the setUpPage function when the page finishes loading. 
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}