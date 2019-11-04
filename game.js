var playerArray = [];

$("#go").on("click", function (e){
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
  playerArray.push("player", "mafia", "doctor", "cop");
  var role = playerArray[Math.floor(Math.random() * playerArray.length)];
  alert(role);
  }
})