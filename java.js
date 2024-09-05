function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Get image elements for player and computer
    const playerImage = document.getElementById("player-image");
    const computerImage = document.getElementById("computer-image");
    
    // Set the image source based on player's choice
    playerImage.src = playerChoice + '.png';
    playerImage.alt = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

    // Set the image source based on computer's random choice
    computerImage.src = computerChoice + '.png';
    computerImage.alt = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    // Determine the result and display it
    const resultText = document.getElementById("result");
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = "You win!";
    } else {
        resultText.textContent = "You lose!";
    }
}
