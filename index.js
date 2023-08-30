document.getElementById("btn").addEventListener("click", () => {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let randomDiceName = "dice" + randomNumber1 + ".png";

    let randomImage = "./Dicee Challenge - Starting Files/images/" + randomDiceName;

    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImage);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomDiceName2 = "dice" + randomNumber2 + ".png";

    let randomImage2 = "./Dicee Challenge - Starting Files/images/" + randomDiceName2;

    let image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins 🚩!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

})
