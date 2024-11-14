let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const resultElement = document.getElementById("result");

    if (guess === randomNumber) {
        resultElement.innerText = "تبریک! درست حدس زدی!";
    } else {
        resultElement.innerText = "اشتباه بود، دوباره تلاش کن!";
    }
}
