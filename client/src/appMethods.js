export const GenerateRandomRoom = () => {
  var randomRoomCode = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length; // == 26
  for (var i = 0; i < 4; i++) {
    randomRoomCode += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  // Alternatively:
  // var randomCapitalLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

  return randomRoomCode;
}



export const Function2 = () => {
  var randomRoomCode = '';
}


export const GenerateRandomDiscard = () => {
  let initialDiscardIndex = Math.floor(Math.random() * (15 - 0 + 1) + 0);
  let standardDeck = [...this.state.standardDeck];
  let ind = standardDeck.findIndex((ele) => ele == initialDiscardIndex);
  let updatedCardsInDeck = standardDeck.splice(ind, 1);
  this.setState({ cardsInDeck: standardDeck });
  return initialDiscardIndex;
}