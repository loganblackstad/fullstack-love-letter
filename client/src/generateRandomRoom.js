var GenerateRandomRoom = () => {
  var randomRoomCode = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length; // == 26
  for (var i = 0; i < 4; i++) {
    randomRoomCode += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  // Alternatively:
  // var randomCapitalLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

  console.log(randomRoomCode);
  return randomRoomCode;
}

// console.log(GenerateRandomRoom);

export default { GenerateRandomRoom };