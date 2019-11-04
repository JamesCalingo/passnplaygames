var playerArray = []

$("#go").on("click", function (e){
  e.preventDefault();
  var numOfPlayers = $("#playerNum").val().trim();
  console.log(numOfPlayers);
  playerArray.push("player", "player", "player")
  alert(playerArray)
})