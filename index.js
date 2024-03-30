
const Neapolitan_Pizza = document.getElementById('Neapolitan-Pizza');
const New_York_Style_Pizza = document.getElementById('New-York-Style-Pizza');
const Chicago_Deep_Dish_Pizza = document.getElementById('Chicago-Deep-Dish-Pizza');
const Margherita_Pizza = document.getElementById('Margherita-Pizza');
const Sicilian_Pizza = document.getElementById('Sicilian-Pizza');
const Hawaiian_Pizza = document.getElementById('Hawaiian-Pizza');
const California_Pizza = document.getElementById('California-Pizza');
const Greek_Pizza = document.getElementById('Greek-Pizza');
const Detroit_Style_Pizza = document.getElementById('Detroit-Style-Pizza');
const Tavern_Style_Pizza = document.getElementById('Tavern-Style-Pizza');

const display_content = document.getElementById('display-content');
const display = document.getElementById('display');

function sayHello(mh, color){
    const mymh = mh.innerText;
    // console.log(mymh, "somebody say me to say, Hello")
    display_content.innerText = mymh + " is a good choies"
    display.style.backgroundColor = color;
}

Neapolitan_Pizza.addEventListener("click", function() {sayHello(this, '#F4C2C2')});
New_York_Style_Pizza.addEventListener("click", function() {sayHello(this, '#FF7F50')});
Chicago_Deep_Dish_Pizza.addEventListener("click", function() {sayHello(this, '#FF6347')});
Margherita_Pizza.addEventListener("click", function() {sayHello(this, '#E9967A')});
Sicilian_Pizza.addEventListener("click", function() {sayHello(this, '#F08080')});
Hawaiian_Pizza.addEventListener("click", function() {sayHello(this, '#FFB6C1')});
California_Pizza.addEventListener("click", function() {sayHello(this, "#FF82AB")});
Greek_Pizza.addEventListener("click", function() {sayHello(this, "#FF1493")});
Detroit_Style_Pizza.addEventListener("click", function() {sayHello(this, "#FF69B4")});
Tavern_Style_Pizza.addEventListener("click", function() {sayHello(this, "#FFC0CB")});