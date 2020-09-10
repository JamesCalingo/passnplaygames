var playerArray = ["X - you are the Fake Artist!"]

startGame = () =>{
  console.log(playerArray)
  $(".main").html(`<div class="text-center">
  <h1>NOTE: make sure you are looking at THIS page before passing/when you receive the device</h1>
  
  <p>When you're ready, click the button below to find out the word...or maybe not.</p>
  
  <button class="btn btn-danger btn-lg mt-3 findRole">What's the word?</button>
  </div>`)
 
  }



$("#goArtist").on("click", function (e){
  e.preventDefault();
  let numOfPlayers = $(".playerNum").val().trim();
  let word = $("#fakeArtistWord").val().trim();
  category = $("#fakeArtistCat").val().trim()
  if(numOfPlayers <= 0){
    Swal.fire("How can you expect art to be produced if we have no artists?");
    return false
  }else if (numOfPlayers > 15){
    Swal.fire("Too many artists will make your canvas quite messy. Try to keep it to no more than 15 or so.");
    return false
  }
  else if(!word || !category){
    Swal.fire("How can these artists produce art if they don't know what they're supposed to produce?")
    return false
  }
  else if (word === "x" || word === "X"){
    for(var i = 0; i < numOfPlayers - 1; i++){
      playerArray.push("X - you are the Fake Artist!");
    }
    startGame()
  }
  else{
  console.log(word);
  console.log(category);
  for(var i = 0; i < numOfPlayers - 1; i++){
    playerArray.push(word)
  }
  startGame()
  }
})

$(document).on("click", ".findRole", function (e){
  e.preventDefault();
  if(playerArray.length === 0){
    window.location.href = "../index.html"
  }
  else{
let randNum = Math.floor(Math.random() * playerArray.length)
let selection = playerArray[randNum]
Swal.fire({
  title: `The word is...\n${selection}`,
  text: `Category: ${category}`,
  confirmButtonText: "Whenever you're ready, click here before passing to the next player."
})

// $("#category").text(category)
playerArray.splice(randNum, 1)
console.log(playerArray)
  }
})
