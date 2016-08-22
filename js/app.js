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

  deliveryRescue.boxFall = function () {
    deliveryRescue.boxCount = 10;
    var $boxObj = $('#box');
    var top = 360;
    var left = 200; for(i = 0; i < deliveryRescue.boxCount; i++) {
      $boxObj.css({
        left: left,
        top: 0,
        opacity: 0,
        display: 'block'
      }).animate({
        left: left,
        top: 310,
        opacity: 1
      }, 2500, 'easeOutBounce');
    }
  }

//   deliveryRescue.collisionDetection = function () {
//     var rect1 = {x: 5, y: 5, width: 50, height: 50}
//     var rect2 = {x: 20, y: 10, width: 10, height: 10}

//     if (rect1.x < rect2.x + rect2.width &&
//      rect1.x + rect1.width > rect2.x &&
//      rect1.y < rect2.y + rect2.height &&
//      rect1.height + rect1.y > rect2.y) {
//       // collision detected!
//   }
// }

deliveryRescue.timerFunction = function() {
  setInterval(function() { deliveryRescue.timerCounter++;
  }, 1000);
}

deliveryRescue.clickButtons = function() {
  console.log("Button clicked " + $(this).attr('id') + " and the timer is at " + deliveryRescue.timerCounter + " seconds.");
  if ($("#notifyBox").css("display") === "block") {
    if ($(this).attr('id') === "clearNotifyBox") {
     $('#clearNotifyBox').css("display", "none");
     $('#notifyBox').css("display", "none");
     deliveryRescue.timerFunction();   
       // deliveryRescue.collisionDetection();
       deliveryRescue.boxFall();  
       deliveryRescue.boxFall();  
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