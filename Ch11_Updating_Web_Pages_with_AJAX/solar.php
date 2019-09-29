<?php
$WeatherSource = "https://api.forecast.io/forecast/773920fad47b82d3eda1b1bfb2daf84a/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>