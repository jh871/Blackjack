//inititalise hands (cards dealt to player)
let playerHand = 0;
let dealerHand = 0;

//initialise player scores
let wins = 0;
let losses = 0;
let draws = 0;


//players first hand is always two cards.
function twoCards() {
    let card1 = Math.floor(Math.random() * (10)+2);
    let card2 = Math.floor(Math.random() * (10)+2);
    return (card1 + card2);
}
playerHand = twoCards()

//to draw one card between 2 and 11
let oneCard = function(){
    let card = Math.floor(Math.random() * (10)+2);
    return card;
};


//starts game
function startGame () {
    let conf = confirm("Would you like to play Blackjack? \n \n The rules are simple: Try and get as close to 21 as possible! \n If you get 21 you win! \n If you get above 21, you lose! \n If you get below 21 you can TWIST to add another card (and another and another...) but beware: if you go bust, the dealer wins! \n If you think you're close enough to 21 you can STICK to stay where you are. \n But don't play too safe: If the dealer comes closer to 21 than you, the dealer wins!");
    if (conf == false) {
        alert("Goodbye")
        } else if (conf == true) {
            playerHand = twoCards()
            dealerHand = oneCard()
            alert("Let's play Blackjack! \n Your first hand (two cards) is " + playerHand + " \n Dealer's first card is " + dealerHand);
            game();
        };
    return;
};

//main conditions of game
function game() {
    if (playerHand === 21) {
        alert("You have " + playerHand + "! \nYou win!")
        wins ++;
        gameOver()
    } else if (playerHand > 21) {
        alert("You're BUST!");
        losses++;
        gameOver();
    } else if (playerHand < 21) {
        choice();
    };
    return;
};


//player's choice of stick or twist
function choice () {
    let choice = prompt("stick or twist?")
    if (choice == "stick"){
    alert("You have chosen to stick on " + playerHand + "\n Dealer's turn.");
    dealerGame();
    } else if (choice == "twist") {
        twist();
    };
    return;
};

//twist to choose additional card
function twist() {
    let newCard = oneCard();
    playerHand += newCard;
    alert("Your new card is " + newCard + "\n You have " + playerHand);
    game();
    return;
}

// when player sticks, run dealer's side of the game
function dealerGame() {
    alert("Dealer has " + dealerHand + "\n Dealer draws another card");
    let newCard = oneCard();
    dealerHand += newCard;
    if (dealerHand === 21) {
        alert("Dealer's new card is " + newCard + "\nDealer has " + dealerHand + "\n Dealer wins!");
        losses++
        gameOver();
    } else if (dealerHand > 21) {
        alert("Dealer's new card is " + newCard + "\nDealer has " + dealerHand + "\n Dealer is BUST! \n You win!");
        wins++;
        gameOver();
    } else if (dealerHand < 17) {
        alert("Dealer's new card is " + newCard);
    dealerGame();
    } else if (dealerHand < 21 && dealerHand > 17) {
        alert("Dealer's new card is " + newCard + "\nDealer is sticking with "+ dealerHand);
        compareHand(playerHand, dealerHand);
    };
    return;
};


//when both players stick, compare cards to find winner
function compareHand(num1, num2){
    if (num1 === num2) {
        alert("You both had " + playerHand + "! It's a draw!")
        draws++
        gameOver();
    } else if (num1 > num2) {
        alert("You have " + playerHand + "\nDealer has " + dealerHand + "\n \n You came closest to 21! You win!");
        wins++;
        gameOver();
    } else if (num1 < num2) {
        alert("You have " + playerHand + "\nDealer has " + dealerHand + "\n \n Dealer came closest to 21! Dealer wins!")
        losses++;
        gameOver();
    };
    return;
};


// function to end the game
function gameOver() {
    alert("Wins: " + wins + "\nLosses: " + losses + "\nDraws: " + draws);
    let playAgain = confirm("Game over! \n Play again?");
    if (playAgain === false) {
        alert("Thanks for playing!")
    } else if (playAgain === true) {
    startGame();
    };
};

//Calling startGame launches game.
startGame();

//when player hand is bigger than dealer hand it skips letting the player know they've won and goes straight to the tally.
//take confirm y/n off - have alert for true and false though!
