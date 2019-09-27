# Updating Web Pages With AJAX

## Introduction to Ajax
- Allows client web pages to quickly interact and exchange data with a web server *Without reloading entire web page*.
- Relies on Programming language such as ***JavaScript***; Data interchange format such as **JSON** or **XML**.
- **```XMLHttpRequest```** object **(XHR object)**
  Uses HTTP to exchange data between a client computer and a web server
  Can be used to request and receive data without reloading a web page
- Combining XMLHttpRequest with DHTML allows update and modification to individual portions of a web page with data received from a web server

### Understanding the Limitations of Ajax
Data requested can be located on a third-party server. The **same-origin policy** applies only to JavaScript and not to other programs running on a web server. This means that you can use a server-side script as a proxy to access data from another domain. In computer terms, a ***proxy*** is a server that acts for or performs requests for other client and servers. The server-side proxy script can return the data to the client computer as it is requested with the XMLHttpRequest object. Proxy scripts is often written in PHP - *language specifically designed to run on web servers*. 
*Using a proxy remains a common technique for working around the same-origin policy to access third-party content.* 
### Accessing Content on a Separate Domain
The purpose of the same-origin policy is to prevent malicious scripts from modifiying the content of other windows, tabs, and frames, and to prevent the theft of private browser information and information displayed on secure web pages. However, the ability of one web server to access web pages and data on another web server is the foundation of the World Wide Web. Although you should never attempt to pass off content from another website as your own, there are legitimate reasons why you would use a server-side script to access data from another domain. One common use is to display data provided by a ***web service***, which is a data source available on one domain for use on other domains acorss the web. Web services provide services and data in response to requests that use the methods and properties of their APIs; it is up to the client accessing a web service to provide an implementation for a program that calls the web service.  
***Widgets***:  
Instead of implementing an API to access and display content from a web service, some companies offer prepacked code known as **widgets** that enable to add content from the service to a web document. Widgets often contain code that uses Ajax to fetch and update content from the service.  
When you incorporate data from a web service into an app that runs in a browser, you need to know only which method of the web service to call for each type of commodity.  

For the Whole Spectrum Energy Solution app, you'll request and use data from forecast.io, a web service that provides real-time weather data, including a forecast, for a specified location. A forecast.io request has the following format:  
``` https://api.forecast.io/forecast/apikey/latitude,longitude```  
The **apikey** term represents an API key, which is a unique identifier assigned by the service to each person or organization that wants to access the service. Unlike Google Maps, which allows a limited number of requests per day without an API key, all forecast.io requests must include an API key.  
The latitude and longitude terms represent latitude and longitute values provided as positive or negative floating-point numbers.  
The data returned by forecast.io is a string representation of a JSON object. You can use the ```JSON.parse()``` method to convert the returned string to a JavaScript object.  
This web app will rely on a server-side script as a proxy to retreive weather infromation from forecast.io. This script is written in **PHP**, which is a programming language specifically designed to run on web servers. Your PHP proxy script executes when it is passed latitude and longitude values with the ```XMLHttpRequest``` object. After the PHP script retrieves the weather infromation for the specified coordinates, it returns the data to the JavaScript code that called it.  
PHP code to retreive data from the forecast.io service:
```PHP
<?php
    $WeatherSource = "https://api.forecast.io/forecast/apikey/" . $_GET["lat"] . "," . $_GET["lng"];
    header("Content-Type: application/json");
    header("Cache-Control: no-cache");
    readfile($WeatherSource);
?>
```
### Running Ajax from a Web Server
- Opening a local file in a web browser requires the use of the ```file:///``` protocol. 
- Ajax relies on the XMLHttpRequest object to retreive data, you must open your Ajax file from a web server with the HTTP (```http://```) or HTTPS (```https://```) protocol. 
- Can install server software on any computer
- Popular web server software:
  - Apache HTTP Server
  - Nginx
  - Microsoft Internet Information Services (IIS)




