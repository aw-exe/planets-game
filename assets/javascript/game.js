//assign the target score to be a random number between 19-120.
//the target score should reset and change each time the user wins or losses.

let counter = 0;
let wins = 0;
let losses = 0;

$(document).ready(function() {
    const targetNumber = (Math.floor(Math.random()*120) + 19);
    $("#get-this-number").text(targetNumber);
    let sum = 0;
   

const planet1 = {
    name: "mercury",
    src: "./assets/images/mercury.jpg", 
}

const planet2 = {
    name: "venus",
    src: "./assets/images/venus.jpg",      
}

const planet3 = {
    name: "mars",
    src: "./assets/images/mars.jpg",
}

const planet4 = {
    name: "jupiter",
    src: "./assets/images/jupiter.jpg",
}



const planets = [planet1, planet2, planet3, planet4]
for(let i=0; i < planets.length; i++) {
    console.log (planets[i])
    console.log (planets[i].src)

    const newPlanet = $("<img>")

    newPlanet.attr("src", planets[i].src)
    newPlanet.attr("id", planets[i].name)
    newPlanet.addClass("img-thumbnail")
    newPlanet.attr("planetValue", (Math.floor(Math.random()*12) + 1))
 
    $("#planetdiv").append(newPlanet)

}

$("#planetdiv").on("click", ".img-thumbnail", function() {
    let planetValue = $(this).attr("planetValue");

    planetValue = parseInt(planetValue);
    counter += planetValue;

    $("#usersScore").text(counter);
 
}); //closes planetdiv



}); // closes document.ready   

