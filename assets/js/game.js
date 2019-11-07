var playerArray = [];

$("#goMafia").on("click", function (e){
  e.preventDefault();
  var numOfPlayers = $(".playerNum").val().trim();
  if(numOfPlayers <= 0){
    console.log(numOfPlayers)
    alert("Is this a ghost town?");
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
  let role = playerArray[Math.floor(Math.random() * playerArray.length)];
  // alert(role);
  window.location.href = "player.html"
  }
});

$("#goArtist").on("click", function (e){
  e.preventDefault();
  var numOfPlayers = $(".playerNum").val().trim();
  var word = $("#fakeArtistWord").val().trim();
  var category = $("#fakeArtistCat").val().trim()
  if(numOfPlayers <= 0){
    alert("How can you expect art to be produced if we have no artists?");
    return false
  }
  if(!word || !category){
    alert("How can these artists produce art if they don't know what they're supposed to produce?")
    return false
  }
  else{
  console.log(word);
  console.log(category);
  for(var i = 0; i < numOfPlayers - 1; i++){
    playerArray.push(word)
  }
  playerArray.push("X - You are the fake artist!")
  console.log(playerArray)
  let role = playerArray[Math.floor(Math.random() * playerArray.length)];
  alert(role);
  }
})