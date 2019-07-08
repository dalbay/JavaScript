
![project3-4 image](../project3-4/images/project3-4.png)

**This program takes input from a text box to a list on the web page.** 
* making decisions
* functions
* input element
* event-listener
* submit button

```javascript    
<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width,initial-scale=1.0">
   <title>Hands-on Project 3-4</title>
   <link rel="stylesheet" href="styles.css" />
   <script src="modernizr.custom.05819.js"></script>
</head>

<body>
   <header>
      <h1>
         Hands-on Project 3-4
      </h1>
   </header>

   <article>
      <div id="results">
          <ul>
             <li id="item1"></li>
             <li id="item2"></li>
             <li id="item3"></li>
             <li id="item4"></li>
             <li id="item5"></li>
          </ul>
          <p id="resultsExpl"></p>
      </div>
      <form>
          <fieldset>
            <label for="toolBox" id="placeLabel">
              Type the name of a tool, then click Submit:
            </label>
            <input type="text" id="toolBox" />
          </fieldset>
          <fieldset>
            <button type="button" id="button">Submit</button>
          </fieldset>
      </form>
   </article>
   
   <script>
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
   </script>
   
</body>
</html>
```

![project3-4 image](../project3-4/images/project3-4A.png)

