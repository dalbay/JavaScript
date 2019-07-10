<?php
/* To make this app work, you must replace the text "apikey" in the following statement with a valid API key */
$WeatherSource = "https://api.forecast.io/forecast/bdd599b0046e685fe18338073ea3ce70/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>
