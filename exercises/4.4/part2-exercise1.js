word = "arara"

function reverseWord() {
    let splitWord = word.split("");
    let reverseArray = splitWord.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}

function checkPalindrome() {
    let isPalindrome;
   
    if (word === reverseWord()) {
        isPalindrome = true;
    }
    else {
        isPalindrome = false;
    }

    return isPalindrome;
}

console.log(checkPalindrome());