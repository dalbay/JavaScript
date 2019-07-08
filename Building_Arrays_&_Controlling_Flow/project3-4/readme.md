
![project3-4 image](../project3-4/images/project3-4.png)

**This program takes input from a text box to a list on the web page.** 
* making decisions
* functions
* input element
* event-listener
* submit button

```javascript
      var i = 1;
      var listItem;
      function processInput(){
         if(i <= 5){
            listItem = "item" + i;
            var name = document.getElementById("toolBox").value;
            document.getElementById(listItem).innerText =  name;
            document.getElementById("toolBox").value = "";
            if(i === 5){
               document.getElementById("resultsExpl").innerText = "Thanks for your suggestions."
            }
            i++;             
         }
      }
      function alertMe(){
         var name = document.getElementById("toolBox").value;
         alert("Thank You" + name);
      }
      document.getElementById("button").addEventListener("click", processInput, false);
```

![project3-4 image](../project3-4/images/project3-4A.png)

