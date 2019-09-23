## Managing State and Information Security

* Save state information with query strings, hidden form fields, and cookies
* Describe JavaScript security issues and employ coding practices designed to address them

### Understanding State Information

* State information
  – Information about individual visits to a Web site
* HTTP original design: stateless
  –	No persistent data about site visits stored
* Reasons for maintaining state information
  –	Customize individual web pages
  –	Store information within a multipart form
  –	Provide shopping carts

#### Saving State Information with Query Strings

* Query string
  –	Set of name-value pairs
* Appended to a target URL
  –	Consists of a single text string
* Contains one or more pieces of information
* Passes information from one web page to another

##### Passing data with a query string

- Add a question mark (?) immediately after a URL; followed by the query string (in name-value pairs) for the information to preserve
- Ampersands (&) - separates individual name-value pairs within the query string
*Example:*
```html
<a href="http://www.example.com/↵ 
   addItem.html?isbn=9780394800165&quantity=2">Order Book</a>
 ```

##### Parsing Data from a Query String
- Passed query string assigned to target web page Location object search property
  - The *Location object* contains information about the current URL.
  –	The *search property* of the Location object contains a URL’s query or search parameters including the (?)

- Remove the question mark
  - Using the substring() method combined with the length property
```JavaScript
// Assign the query string to the queryData variable
var queryData = location.search;
// Remove the opening question mark from the string
queryData = queryData.substring(1, queryData.length);
```
- Convert individual pieces of information into array elements
  –	Using the split() method
```JavaScript
// split queryData into an array
var queryArray = queryData.split("&");
```
##### Example
Create a function that parses the query string and stores the result in an array when page loads up.
```JavaScript
// interpret the document content in strict mode
"use strict";

// global variable
var queryArray = [];

// function to parse the query string and store the result in an array.
function populateInfo() {
   // checks if the search property of the Location object has a value;
   if (location.search) {
      var queryData = location.search;
      // copy all but the first character (?) from the queryData variable
      queryData = queryData.substring(1, queryData.length);
      // extract each name-value pair from the queryData variable and assign it as an element in the queryArray variable
      queryArray = queryData.split("&");
   }
}

// run the populateInfo function when the page finishes loading. 
if (window.addEventListener) {
   window.addEventListener("load", populateInfo, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", populateInfo);
}
```
#### Saving State Information with Hidden Form Fields
- Hidden form field
  - Special type of form element
  - Not displayed by web browser
  - Syntax: ```<input type="hidden">```
 
 
##### Example
Enhance the populateInfo() function to assign values from the queryArray array to the hidden fields (when page loads up.)
```JavaScript
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
```
Create a function to parse and display data from the query string on a html page.
```JavaScript
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
// calls parseData when page finishing loading
if (window.addEventListener) {
   window.addEventListener("load", parseData, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", parseData);
}
```
### Storing State Information
#### Storing State Information with Cookies
- Query strings and hidden form fields temporarily maintain state information
- Cookies
  - Small pieces of information about a user
  - Stored by a web server in text files
  - Stored on the user’s computer
  - Saved cookies sent from client to the server
  - *Temporary Cookies* - Available only for current browser session
  - *Persistent Cookies* - Stored in a text file on client computer

- Use the cookie property of the Document object 
  - Creates cookies in name-value pairs
  - Syntax - ```document.cookie = name + "=" + value;```
  - Cookie property created with a required name attribute and four optional attributes:
    - expires, path, domain, secure
[!Coockies images](./images/cookiesImg)

##### Creating and Modifiying Cookies
- Cookies cannot include semicolons or special characters
- Encoding involves converting special characters in a text string
- *```encodeURIComponent()```* function
  - Converts special characters in the individual parts of a URI to corresponding     
    hexadecimal ASCII value
  - Syntax: ```encodeURIComponent(text)```
- *```decodeURIComponent()```* function
  - Counterpart of encodeURIComponent() function
  - Syntax: ```decodeURIComponent(text)```
  
- *```expires```* attribute
  - Determines how long a cookie can remain on a client system before being deleted
  - Cookies created without this attribute are available current browser session only
  - Syntax: ```expires=date```
  - Can manually type a string in UTC format or:
	- Can create string with the Date object
  - Use the toUTCString() method to convert the Date object to a string
##### Example:
Create cookies containing the form field names and their values:
```JavaScript
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

```







