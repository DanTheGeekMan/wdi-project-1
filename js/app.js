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

  deliveryRescue.generateBox = function () {
        var leftValue = Math.floor(Math.random() * (430 - 160 + 1)) + 160;
        $("<div class='box'></div>")
        .appendTo("#middle")
        .css("left",leftValue + "px")
        .animate({
          top: 310
        }, 2500)

        // $('#middle').append(box).css('left','300px')
        // console.log(box)
        // $(box).css({
        //   left: leftValue,
        //   top: 0,
        //   opacity: 0,
        //   display: 'block'
        // }).animate({
        //   left: leftValue,
        //   top: 310,
        //   opacity: 1
        // }, 2500, 'easeOutBounce');

  }

  // deliveryRescue.boxFall = function () {
  //   deliveryRescue.testBox = $('<div class="box"></div>').appendTo('#middle').css("left");

  //   // deliveryRescue.boxCount = 10;
  //   var $boxObj = $('#box');
  //   // var top = 360;
  //   // var left = 200; for(i = 0; i < deliveryRescue.boxCount; i++) {
  //     $boxObj.css({
  //       left: left,
  //       top: 0,
  //       opacity: 0,
  //       display: 'block'
  //     }).animate({
  //       left: left,
  //       top: 310,
  //       opacity: 1
  //     }, 2500, 'easeOutBounce');
  // //   }
  // // }
  // append to #middle
  // function init () {
  //   $('ul').on('click', 'li', function() {
  //     $(this).parent().append($(this).clone());
  //   })
  // }
 // this.dom = $('<p class="circle"></p>').appendTo('#ground');

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
     setInterval(function() {deliveryRescue.generateBox()},1500)
     deliveryRescue.timerFunction();   
       // deliveryRescue.collisionDetection();
       // deliveryRescue.generateBox();  
       //deliveryRescue.boxFall();  
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