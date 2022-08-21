#AliExpress Clone Using HTML, CSS and JavaScript

*JavaScript is being used to determine if product title has more than 23 characters. <br>
using querySelectorAll and forEach loop with an arrow function I iterate through all the products title DIVs and check <br>
if it's has more than 23 characters (maximum block width overflow), using for loop I push every character within the innerHTML <br>
of that certain DIV to an array and then using calculation of number of Character - 23 to fill the .splice() function parameters. <br>
Then, using splice, I remove all the characters after index 22 - splice(23, charactersToDelete) and then using the third parameter <Br>
to fill the Array with 3 dots (...) - splice(23, charactersToDelete, '.','.','.') - and now the new array have 23 characters + 3 dots. <br>
Using join('') I concate the array into a new String that have 23 characters of that title + 3 dots. <br> 

<h2>Demo of the site</h2>
<img src="Demo.gif">