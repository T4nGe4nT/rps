const hands = ['rock', 'paper', 'scissors'];

function getHand() {
  return hands[Math.floor(Math.random() * 3)];
}

const player1 = { name: 'Player 1', getHand: getHand };
const player2 = { name: 'Player 2', getHand: getHand };

function playRound(player1, player2) {
  const hand1 = player1.getHand();
  const hand2 = player2.getHand();
  
  let result = `${player1.name} played: <img src="${hand1.charAt(0).toUpperCase() + hand1.slice()}.gif" width="100" height="100">`;
  result += `<br>${player2.name} played: <img src="${hand2.charAt(0).toUpperCase() + hand2.slice()}.gif" width="100" height="100"><br>`;
  

  if (hand1 === hand2) {
    result += "It's a tie!<br>";
  } else if (
    (hand1 === 'rock' && hand2 === 'scissors') ||
    (hand1 === 'scissors' && hand2 === 'paper') ||
    (hand1 === 'paper' && hand2 === 'rock')
  ) {
    result += `${player1.name} wins!<br>`;
  } else {
    result += `${player2.name} wins!<br>`;
  }

  return result;
}

document.getElementById('playButton').addEventListener('click', () => {
  const result = playRound(player1, player2);
  document.getElementById('results').innerHTML = result;
});
