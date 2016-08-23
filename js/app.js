var deliveryRescue = deliveryRescue || {}
deliveryRescue.timerCounter = 0;

deliveryRescue.moveTruck = function(direction){
  deliveryRescue.truckPosition = parseInt($('#truck').css("left").replace("px", ""))
  if (direction === "left_button") {
    deliveryRescue.truckPosition += -10;
  } else {
    deliveryRescue.truckPosition += 10; }
    $('#truck').css("left", deliveryRescue.truckPosition);
  }

  deliveryRescue.resetGame = function(){
    $('#truck').css("left", 290);
    deliveryRescue.timerCounter = 0;
    $('#clearNotifyBox').css("display", "block");
    $('#notifyBox').css("display", "block");
  }

var currentBoxId = 0;
var score = 0;
var health = 10;
var arrayOfBoxes = [];

// var rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

deliveryRescue.generateBox = function () {
  var leftValue = Math.floor(Math.random() * (430 - 160 + 1)) + 160;
  var divTag = "<div class='box' id='" + currentBoxId + "'></div>"
  $(divTag)
  .appendTo("#middle")
  .css("left",leftValue + "px")
  .animate({
    top: 310
   }, 2500)
  var workingBox = "#" + currentBoxId;
  arrayOfBoxes.push(currentBoxId);
  
  setInterval(function() {
    $(workingBox).remove()
    var desiredIndexOfArrayOfBoxes = arrayOfBoxes.indexOf('#2');
    console.log("Array index of working box is " + desiredIndexOfArrayOfBoxes);
  },2500);
  currentBoxId++;
  
  //collision detection
  // setInterval(function() {
  //   arrayOfBoxes = $('#box')
  // }, 100);






  //detectCollision();
  //   var truckStatus = {x: 5, y: 5, width: 50, height: 50}
  //   var boxStatus = {x: 20, y: 10, width: 10, height: 10}

  //   if (truckStatus.x < boxStatus.x + boxStatus.width &&
  //    truckStatus.x + truckStatus.width > boxStatus.x &&
  //    truckStatus.y < boxStatus.y + boxStatus.height &&
  //    truckStatus.height + truckStatus.y > boxStatus.y) {
  // }
}

deliveryRescue.timerFunction = function() {
  setInterval(function() { deliveryRescue.timerCounter++;
  }, 1000);
}

deliveryRescue.clickButtons = function() {
  if ($("#notifyBox").css("display") === "block") {
    if ($(this).attr('id') === "clearNotifyBox") {
     $('#clearNotifyBox').css("display", "none");
     $('#notifyBox').css("display", "none");
     setInterval(function() {deliveryRescue.generateBox()},1500)
     deliveryRescue.timerFunction();   
   }
 } else {
   if ($(this).attr("id") === "reset_button") {
    deliveryRescue.resetGame();
  } else {
    deliveryRescue.moveTruck($(this).attr("id"));
  } 
}
}

deliveryRescue.addListeners = function() {
  $('.buttons').on("click", deliveryRescue.clickButtons);
}

deliveryRescue.setup = function() {
  deliveryRescue.addListeners();
}

$(document).ready(deliveryRescue.setup.bind(deliveryRescue));