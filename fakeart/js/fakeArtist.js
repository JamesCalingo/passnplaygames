var playerArray = []
var category

$("#goArtist").on("click", function (e){
  e.preventDefault();
  let numOfPlayers = $(".playerNum").val().trim();
  let word = $("#fakeArtistWord").val().trim();
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
  window.location.href = "player.html"
  return(playerArray)
  }
})

playerArray.push("testa", "testb", "testc", "testd", "YOU DA FAKE")
$(".findRole").on("click", function (e){
  e.preventDefault();
  if(playerArray.length === 0){
    window.location.href = "../index.html"
  }
  else{
let randNum = Math.floor(Math.random() * playerArray.length)
let selection = playerArray[randNum]
Swal.fire({
  title: `The word is...\n${selection}`,
  text: "Whenever you're ready, click the button and then pass the device to the next player.",
  confirmButtonText: "HI I'M THE BUTTON"
})

// $("#category").text(category)
playerArray.splice(randNum, 1)
  }
})
