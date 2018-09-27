#H1 BINGO

**Bingo** works as the famous bingo game.

Functioning:

1. PREVIOUS
    1. Request user name
    2. Generate ticket
    3. Calculate the range of numbers to show

2. GAME STARTS
    1. Generates a random number
    2. Checks if the random number chosen is repeated and has already been released. If it is repeated, it will return to step 1.
    3. Checks if the random number is on the board.
        + If it is on the board:
            + **Bingo** will display an 'X' in place of the number. 
            + **Bingo** will check whether the user completed his/her first line or, if a line has already been completed, it will check if the whole board is completed. 
            + **Bingo** will ask the user if he/she wants to continue. 
            + The game continues by returning to step 1.
        + If it is not on the board, it goes back to step 1 and the game continues.

    Steps 1 and 2 will repeat on a loop until:
        * The user completes a line from the board. "LINE" will be displayed on screen.
        * The user completes the full board. "BINGO" will be displayed on screen.

*Note: invalid inputs are controlled by **Bingo**, **Bingo** will keep on requesting the user to introduce a valid option.*







