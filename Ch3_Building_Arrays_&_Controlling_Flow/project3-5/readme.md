
![project3-5 picture](../project3-5/images/project3-5.png)

**In this project we rewrite the code we created in 3-4 to use a switch statement**
* Decision Making - switch statement
* functions
* input element
* event-listener
* submit button
```javascript
      //Global variables:
      var i = 1;
      var listItem;
      function processInput(){
        listItem = "item" + i;
        var name = document.getElementById("toolBox").value;
        switch(i){
           case 5:
              document.getElementById(listItem).innerText = name;
              document.getElementById("resultsExpl").innerText = "Thanks for your suggestions.";
              break;
           default:
               document.getElementById(listItem).innerText = name;
               document.getElementById("toolBox").value = "";
               i++;
               break;
        }
      }      
      function alertMe(){
         alert("Welcome to Project 3-5 - Making Decisions");
      }
      //Add the Event Listener:
      document.getElementById("button").addEventListener("click", processInput, false);
      
      //Adding a Page Load event listener:
      window.addEventListener("load",alertMe,false);
```
