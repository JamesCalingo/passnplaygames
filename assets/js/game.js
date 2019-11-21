var playerArray = [];
var word;
var category;

$("#goMafia").on("click", function (e){
  e.preventDefault();
  let numOfPlayers = $(".playerNum").val().trim();
  
  if(numOfPlayers <= 0){
    console.log(numOfPlayers)
    alert("There's no one in this town? Is this a ghost town?");
    return false
  }
  else{
  let numOfMafia = $("#mafiaNum").val();
  let detCheck = document.getElementById("detectiveCheck");
  let medCheck = document.getElementById("medicCheck");
  let cupidCheck = document.getElementById("cupidCheck")
  console.log(numOfPlayers);
  console.log(numOfMafia);
  for(var i = 0; i < numOfPlayers - numOfMafia; i++){
    playerArray.push("Player")
  };
  for(var j = 0; j < numOfMafia; j++){
    playerArray.push("Mafia");
  };
  if(detCheck.checked == true){
    playerArray.push("Detective");
    playerArray.shift()
  };
  if(medCheck.checked == true){
    playerArray.push("Medic");
    playerArray.shift()
  };
  if(cupidCheck.checked == true){
    playerArray.push("Cupid");
    playerArray.shift()
  };
  console.log(playerArray)
  let role = playerArray[Math.floor(Math.random() * playerArray.length)];
  // alert(role);
  window.location.href = "player.html"
  }
});

$("#goArtist").on("click", function (e){
  e.preventDefault();
  let numOfPlayers = $(".playerNum").val().trim();
  word = $("#fakeArtistWord").val().trim();
  category = $("#fakeArtistCat").val().trim()
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
  window.location.href = "player.html"
  }
})
let words = "test"


playerArray.push("test", "test", "test", "YOU DA FAKE")
$(".findRole").on("click", function (e){
  e.preventDefault();
  window.location.href = "./role.html"
let randNum = Math.floor(Math.random() * playerArray.length)
let selection = playerArray[randNum]
$(".role").text(selection)
$("#category").text(category)
playerArray.splice(randNum, 1)
alert(playerArray)
})

$(".return").on("click", function(e){
if(playerArray.length === 0){
  window.location.href = "../index.html"
}
else{
  window.location.href = "player.html"
}
})