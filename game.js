//use Hungarian naming concention
//attach event listener to attack buttons
let oSlapBtn = document.getElementById("slapButton")
oSlapBtn.addEventListener("click",slap,false);

let oKickBtn = document.getElementById("kick")
oKickBtn.addEventListener("click",kick,false);

let oPunchBtn = document.getElementById("punch");
oPunchBtn.addEventListener("click",punch,false);

//grab DOM elems to output health level, etc.
let oHealthOutput = document.getElementById("health");
let oHitsOutput = document.getElementById("hits");
let oNameOutput = document.getElementById("name");
let oImageOutput = document.getElementById("img_id")

let iHealth = 100;
let iHits = 0;
// slap function decreases variable iHealth by 1
function slap(){
  iHealth--;
  //update html to show current health
  updateHealth()
  updateHits()
}
function kick(){
  iHealth-=10;
  updateHealth()
  updateHits()
}
function punch(){
  iHealth-=5;
  updateHealth()
  updateHits()
}
//update function display the new iHealth value
function updateHealth(){
  if(iHealth<=0){
    knockedOut();
    document.body.style.backgroundColor = "red";
    return;
  }
  let bgColor = 256 -(2.56 *(100- iHealth));
  document.body.style.backgroundColor = `rgb(256,${bgColor},${bgColor})`
  oHealthOutput.textContent = String(iHealth);
}

//update function to display number of hits
function updateHits(){
  iHits++;
  oHitsOutput.textContent = String(iHits);
}
function knockedOut(){
  oImageOutput.src = "knock_out.jpg";
  oHealthOutput.textContent = "Knocked Out";
  oNameOutput.textContent = "Mike Tyson";
  document.getElementById("btn_group").innerHTML = '<div class="col-3 text-center my-3"><button type="button" onclick="getBackUp()" class="btn btn-primary">Get Back Up?</button></div>';
}
function getBackUp(){
  window.location.reload();
}
