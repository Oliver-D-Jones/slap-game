//use Hungarian naming concention
//attach event listener to attack buttons
let oSlapBtn = document.getElementById("slapButton")
oSlapBtn.addEventListener("click",slap,false);

let oKickBtn = document.getElementById("kickButton")
oKickBtn.addEventListener("click",kick,false);

let oPunchBtn = document.getElementById("punchButton");
oPunchBtn.addEventListener("click",punch,false);

//grab DOM elems to output health level, etc.
let oHealthOutput = document.getElementById("health");
let oHitsOutput = document.getElementById("hits");
let oNameOutput = document.getElementById("name");
let oImageOutput = document.getElementById("img_id")
let oCanvasElem = document.getElementById("myCanvas");
let oCanvasContext = oCanvasElem.getContext("2d");

let iHealth = 100;
let iHits = 0;
let iImageTimer = 0;
// slap function decreases variable iHealth by 1
function slap(){
  iHealth--;
  //update html to show current health
  updateHealth()
  updateHits()
  oImageOutput.src = "slap-image.jpg";
  setTimeout(showPerson,500)
}
function kick(){
  iHealth-=10;
  updateHealth()
  updateHits()
  oImageOutput.src = "kick-image.jpg";
  setTimeout(showPerson,500)
}
function punch(){
  iHealth-=5;
  updateHealth()
  updateHits()
  oImageOutput.src = "punch-image.jpg";
  iImageTimer = setTimeout(showPerson,500);
}
function showPerson(){
  //let iImageToShow = Math.floor()
  oImageOutput.src = "main-1.jpg"
  if(iHealth<1)
    oImageOutput.src= "knock_out.jpg";
}
//update function display the new iHealth value
function updateHealth(){

  if(iHealth<=0){
    drawPowerLevel(true);
    knockedOut();
    document.body.style.backgroundColor = "red";
    return;
  }
  let bgColor = 256 -(2.56 *(100- iHealth));
  document.body.style.backgroundColor = `rgb(256,${bgColor},${bgColor})`
  drawPowerLevel(false);
  oHealthOutput.textContent = String(iHealth);
}

//update function to display number of hits
function updateHits(){
  iHits++;
  oHitsOutput.textContent = String(iHits);
}
function knockedOut(){
  iImageTimer = null
  oHealthOutput.textContent = "Knocked Out";
  oNameOutput.textContent = "Mike Tyson";
  document.getElementById("btn_group").innerHTML = '<div class="col-sm-3 text-center my-3"><button type="button" onclick="getBackUp()" class="btn btn-primary">Get Back Up?</button></div>';
}
function getBackUp(){
  window.location.reload();
}
function drawPowerLevel(ko){

  let iX = (240 - iHealth/100 *240 ) + 3;
  if(ko){
    iX=245;
  }
  // Create gradient
  let oGradient = oCanvasContext.createLinearGradient(2,2,iX,20);
  oGradient.addColorStop(0,"grey");
  oGradient.addColorStop(1,"black");

  // Fill with gradient
  oCanvasContext.fillStyle = oGradient;
  oCanvasContext.fillRect(3,2,iX,15);
}
