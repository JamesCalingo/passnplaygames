var playerArray = [];

$("#goMafia").on("click", function (e){
  e.preventDefault();
  var numOfPlayers = $("#playerNum").val().trim();
  if(numOfPlayers <= 0){
    console.log(numOfPlayers)
    alert("Do you seriously have no one playing?");
    return false
  }
  else{
  var numOfMafia = $("#mafiaNum").val()
  console.log(numOfPlayers);
  console.log(numOfMafia);
  for(var i = 0; i < numOfPlayers - numOfMafia; i++){
    playerArray.push("Player")
  }
  for(var j = 0; j < numOfMafia; j++){
    playerArray.push("Mafia")
  }
  console.log(playerArray)
  var role = playerArray[Math.floor(Math.random() * playerArray.length)];
  alert(role);
  }
})