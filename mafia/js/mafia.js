var playerArray = [];
// objects for the array (in the future they will be better scoped)
var playerObj = {
  name: "Civilian",
  role: `You're just a regular civilian. Try to get the mafia voted out, and if they're all gone, you win!\nWhen you're ready, click the button below and pass the device to the next player.`
};
var mafiaObj = {
  name: "Mafia",
  role: "You're part of the mafia. Eliminate the townspeople one by one during night and day, and once enough of the town is gone, you win! \nWhen you're ready, click the button below and pass the device to the next player."
};
var detectiveObj = {
  name: "Detective",
  role: "You are a special detective in charge of the mafia case. Each night, you will inspect one player to see if they are with the mafia. You're on the village team, so use your knowledge to your advantage, eliminiate the mafia, and you win! \nWhen you're ready, click the button below and pass the device to the next player."
};
var medicObj = {
  name: "Medic",
  role: "You're a highly skilled medic. Each night, you will choose one player(you are allowed to choose yourself), and if they are attacked by the mafia, you will prevent their death with your epic medic skills. You're on the village team, so help eliminate the mafia and you win! \nWhen you're ready, click the button below and pass the device to the next player."
};
var cupidObj = {
  name: "Cupid",
  role: "You're a legendary matchmaker. On the first night, you will choose two people to become lovers. After this, you're just an ordinary civilian, so eliminate the mafia (even if one of them is in love) and you win!\nWhen you're ready, click the button below and pass the device to the next player."
};
var tannerObj = {
  name: "Tanner",
  role: "You're a local tanner...but you're not fond of it. You'd rather be literallly anywhere else but this town right now, but there's one problem: the town kinda needs you to stay at your job. However, with the mafia confusion going around, you figure it's a good time to try and trick the town to buying your one way ticket out of town! \ntl;dr: Your goal is to get voted out by town. If this happens, you win! Note that you do NOT win if the mafia kills you at night, and if you're chosen by Cupid, you.\nWhen you're ready, click the button below and pass the device to the next player."
}

$("form").on("submit", function (e){
  e.preventDefault();
  var numOfPlayers = $(".playerNum").val().trim();
  
  if(numOfPlayers <= 0){
    console.log(numOfPlayers)
    alert("There's seriously no one in this town? Is this a ghost town?");
    return false
  }
  else{
    // Get the number of Mafia and special roles
  var numOfMafia = $("#mafiaNum").val();
  var detCheck = document.getElementById("detectiveCheck");
  var medCheck = document.getElementById("medicCheck");
  var cupidCheck = document.getElementById("cupidCheck");
  var tannerCheck = document.getElementById("tannerCheck")
  console.log(numOfPlayers);
  console.log(numOfMafia);

  // Create regular player object and add them too array
  
  for(var i = 0; i < numOfPlayers - numOfMafia; i++){
    playerArray.push(playerObj)
  };
  // Create mafia object and add to array
 
  for(var j = 0; j < numOfMafia; j++){
    playerArray.push(mafiaObj);
  };

  // special roles
  if(detCheck.checked == true){
    playerArray.push(detectiveObj);
    playerArray.shift()
  };
  if(medCheck.checked == true){
    playerArray.push(medicObj);
    playerArray.shift()
  };
  if(cupidCheck.checked == true){
    playerArray.push(cupidObj);
    playerArray.shift()
  };
  if(tannerCheck.checked == true){
    playerArray.push(tannerObj);
    playerArray.shift()
  };
  console.log(playerArray);
  
  
  window.location.href = "player.html"
  }
});

$(".findRole").on("click", function (e){
  e.preventDefault();
  if(playerArray.length === 0){
    window.location.href = "../index.html"
  }
  else{
let randNum = Math.floor(Math.random() * playerArray.length)
let selection = playerArray[randNum]
Swal.fire({
  title: `You are a...\n ${selection.name}`,
  text: selection.role,
  confirmButtonText: "HI I'M THE BUTTON"
})
playerArray.splice(randNum, 1)
  }
})
