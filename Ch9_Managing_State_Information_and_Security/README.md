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
```JavaScript
// interpret the document content in strict mode
"use strict";

// global variable
var queryArray = [];

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

// run the setUpPage function when the page finishes loading. 
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}
```
