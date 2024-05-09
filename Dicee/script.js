function dice1roll(){
return Math.floor(Math.random()* 6) + 1;
}
function dice2roll(){
return Math.floor(Math.random()* 6) + 1;
}
function dicee(){
    let result1 = dice1roll();
    let result2 = dice2roll();
    if (result1>result2) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    } else if (result2>result1) {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerText = "It's a Draw!";
    }
    document.querySelector(".img1").setAttribute("src", "images/dice" + result1 + ".png"); 
    document.querySelector(".img2").setAttribute("src", "images/dice" + result2 + ".png");
}    
dicee()