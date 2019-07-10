/*  JavaScript 6th Edition
    Chapter 12
    Chapter case

    Life on Rocks Wildlife Cruises
    Author: 
    Date:   

    Filename: script.js
*/


function display(event) {
   $(event.currentTarget).children("ul").slideDown("slow");
}

function hide(event) {

   $(event.currentTarget).children("ul").hide();
}

$("ul.mainmenu li").hover(display,hide);
//$(window).load(alert);