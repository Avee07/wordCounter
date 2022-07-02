<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The split() Method</h2>

<p>split() splits a string into an array of substrings, and returns the array:</p>

<p id="demo"></p>

<script>
function countString(str, letter) {
    let count = 0

    // looping through the items
    for (let i = 0; i < str.length ; i++) {

        // check if the character is at that position
        if(str.charAt(i) == letter) {
            count = count + 1 
        }
    }
    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);
</script>

</body>
</html>
