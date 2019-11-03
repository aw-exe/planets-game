//Variables
let counter = 0;
let usersScore = 0;
let wins = 0;
let losses = 0;


//To create planet images
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


//To randomly generate a number between 20-120
$(document).ready(function () {
    const targetNumber = (Math.floor(Math.random() * 120) + 19);
    $("#get-this-number").text(targetNumber);
    let sum = 0;

    // to update planet values after each game
    function updatePlanets() {
        for (var i = 0; i < planetsArray.length; i++) {
            var randomVal = Math.floor(Math.random() * 15 + 1);
            $("#planetDiv" + i).attr('val', randomVal)
        }
    }

    // to reset game
    function resetGame() {
        updatePlanets();
        targetScoreSelector();
        usersScore = 0;
        $("#usersScore-text").text(usersScore);
    }



    //Functions
    const planets = [planet1, planet2, planet3, planet4]
    for (let i = 0; i < planets.length; i++) {
        // console.log (planets[i])
        // console.log (planets[i].src)
        const newPlanet = $("<img>")
        newPlanet.attr("src", planets[i].src)
        newPlanet.attr("id", planets[i].name)
        newPlanet.addClass("img-thumbnail")
        newPlanet.attr("planetValue", (Math.floor(Math.random() * 12) + 1))
        $("#planetdiv").append(newPlanet)
    }

    $("#planetdiv").on("click", ".img-thumbnail", function () {
        let planetValue = $(this).attr("planetValue");
        planetValue = parseInt(planetValue);
        counter += planetValue;

        $("#usersScore").text(counter);

        if (counter === targetScore) {
            alert("You win!");
            wins++;
            $("#userWins").text(userWins);
            resetGame();

        } else if (counter > targetScore) {
            alert("Final User Score: " + counter + ". You busted! Try again!");
            losses++;
            $("#userLosses").text(userLosses);
            resetGame();
        }

    }); //closes planetdiv



}); // closes document.ready   