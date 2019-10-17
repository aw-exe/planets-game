// //assign the target score to be a random number between 19-120
// //the target score should reset and change each time the user wins or losses

$(document).ready(function() {
    const targetNumber = (Math.floor(Math.random()*120) + 19);
    $("#get-this-number").text(targetNumber);
    let sum = 0;
    let counter = 0;

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

// //assign each planet-img to a random number between 1-12
// //the planet-img values should reset and change each time the user wins or losses

const planets = [planet1, planet2, planet3, planet4]
for(let i=0; i < planets.length; i++) {
    console.log (planets[i])
    console.log (planets[i].src)
    const newPlanet = $("<img>")
    // const planetBtn = $("<button>")
    newPlanet.attr("src", planets[i].src)
    newPlanet.attr("id", planets[i].name)
    // planetBtn.attr("data-planet", planets [i])
    newPlanet.addClass("img-thumbnail")
    newPlanet.attr("planetValue", (Math.floor(Math.random()*12) + 1))
    // planetBtn.attr("value", (Math.floor(Math.random()*12) + 1))
    // $("#planetdiv").append(planetBtn)
    // planetBtn.append(newPlanet)
    $("#planetdiv").append(newPlanet)
}

//Everytime I try to add my onclick event, my planet images go away. I tried making the planets buttons but then I couldn't get the value of each button to appear in the counter without breaking. 

// (".img-thumbnail")on.("click", function() {
//     var planetValue = ($(this).attr("data-planetValue"));
//     planetValue = parseInt(planetValue);
//     counter += planetValue;
//     alert("New score: " + counter);
//     if (counter === targetNumber) {
//       alert("You win!");
//     }
//     else if (counter >= targetNumber) {
//       alert("You lose!!");

// }

});



        

//value of each planet-img appears when clicked in the 'your score' card of the html

//log user wins in the 'wins' card of the html

//log the user losses in the 'losses' card of the html

//reset page when user wins or losses but does not get rid of the scoreboard
