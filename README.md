# Blackjack
### 21 Card game also known as Pontoon

## How to run
On loading the webpage in the web browser the game will automatically launch after 3 seconds.


The game is played in pop-up/dialogue boxes: a series of alerts, prompts and confirms that allow the user (player) to navigate the game.


After leaving the game the game can be launched again by clocking the launch button.


The game can be run in any browser on desktop and on mobile.
The game is not affected by pop-up blockers (as far as I can see).

-----
## Game rules

The point of the game is to try and get a score of 21 with your cards.

If you get 21, either immediately or by drawing additional cards, you win the game!

If you go over 21 you go bust and lose the game.

If your hand is below 21 you are offered the choice to stick (stay on your current hand) or twist (draw another card).
This choice repeats until you go bust, hit 21 or decide to stick.


The computer takes their turn: if they hit 21 they win, if they go over 21 they go bust and lose, if their hand is between 16 and 20 they will automatically stick.

If both player and computer stick, the winner is whoevers hand is closest to 21 without going over.

Each card dealt has a value between 2 and 11.
On starting the game you will be dealt two cards, so have a hand with a value between 4 and 22
The computer starts with one card, and will play its turn when the player has decided to stick.
-----
## Develpoment

The logic of the game is build in JavaScript, with a landing page structured in HTML and styled in CSS.


One bug: The "cards" are randomly generated numbers between 2-11. This means that unlike a game with actual cards, it would be possible for 5 or more of the same number "card" to be in play in one game.
This could be corrected in the future by placing real card values into an array for random selection.


Another bug: Leaving the game by clicking 'cancel' during the game will end the game abruptly instead of alerting the player any further.


Another bug: Entering "Twist" or "Stick" with capital letters (as is default on mobile) stops the game, so input needs to be pushed into lower case.


-----
## Links
### Link to deployed application:
https://jh871.github.io/Blackjack/

### Link to my github repo:
https://github.com/jh871/Blackjack

-----
## Screenshot of running application: 
![Screenshot of running Blackjack application](/assets/images/ScreenshotBlackjack.png)

-----
## License
This webpage has an MIT License.