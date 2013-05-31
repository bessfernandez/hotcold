JS Golf, Hot and Cold game
==============

The goal in JS golf is to meet the objectives outlined in as little (key)"strokes" as possible, that is with the smallest JS file.
<br />
An html page with the HTML and CSS needed has been provided. Changing the HTML is against the rules.
<br />
There is a link to script.js in the HTML page, script.js is the file we will be playng with. 
create it and have fun!

goals
-----
A functionig hot and cold game, based on the assignment in Thinkful's unit 2.
A number is generated at random, the user guesses numbers till the generated number is guessed.
After each number guessed the user is prompted, hotter or colder, depending on if the guess is closer or farther away than the previous guess.

This games requirments:
- Game must function!
- Submit button will compair current guess (value of input[type=text]) with previous guess and update both text and background color of div#status
- div#status  text values will be "hotter", "colder" and "correct" as needed
- div#status color values any variation of red, blue, green respectively.
- guess <b>must</b> be compaired with previous guess to get an accurate "hotter" or "colder"
- guess equal to previous guess will return colder
- reset button will remove previous guess, generate a new number, set div#status text to "..." and div#status background color to #333 Without refreshing the page.
- First guess should be compaired against 25. (if guess is withing 25 digits of target return "hotter" if it is 25 digis away or farther return "colder")

No worry about browser compatibility, only needs to run in chrome.

Style loosly based on submission by [Rose Emmons](https://plus.google.com/u/0/107224717251001624273/posts/MnEt3jMfzt6)
