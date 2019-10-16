//assign the target score to be a random number between 19-120
    //the target score should reset and change each time the user wins or losses

$(document).ready(function() {
    const targetNumber = (Math.floor(Math.random()*120) + 19);
    $("#get-this-number").text(targetNumber);
    let sum=0;

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
    newPlanet.attr("value", (Math.floor(Math.random()*12) + 1))
    $("#planetdiv").append(newPlanet)
    // console.log ($("#mars").attr("value"))
}





});




        
//assign each planet-img to a random number between 1-12
//the planet-img values should reset and change each time the user wins or losses

//value of each planet-img appears when clicked in the 'your score' card of the html

//log user wins in the 'wins' card of the html

//log the user losses in the 'losses' card of the html

//reset page when user wins or losses but does not get rid of the scoreboard
