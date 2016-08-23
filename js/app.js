var deliveryRescue = deliveryRescue || {};

deliveryRescue.moveTruck = function(direction){
  deliveryRescue.truckPosition = parseInt(deliveryRescue.$truck.css("left").replace("px", ""))
  if (direction === "left_button") {
    deliveryRescue.truckPosition += -10;
  } else {
    deliveryRescue.truckPosition += 10; 
  }
  deliveryRescue.$truck.css("left", deliveryRescue.truckPosition);
}

deliveryRescue.resetGame = function(){
  deliveryRescue.$truck.css("left", 290);
  deliveryRescue.timerCounter = 0;
  deliveryRescue.$clearNotify.css("display", "block");
  deliveryRescue.$notify.css("display", "block");
}

deliveryRescue.generateRandomNumber = function(){
  var left = this.$middle.position().left;
  return Math.floor(Math.random() * ((this.$middle.width() - this.boxWidth) - left + 1)) + left;
}

deliveryRescue.generateBox = function () {
  var leftValue = deliveryRescue.generateRandomNumber();
  var divTag = "<div class='box' id='" + deliveryRescue.currentBoxId + "'></div>"
  
  $(divTag)
  .appendTo(deliveryRescue.$middle)
  .css("left", leftValue + "px")
  .animate({
    top: deliveryRescue.$middle.height()
  }, {
    duration: deliveryRescue.speed,
    step: function(now, fx){
      var $block          = $(this);
      //var testing = $block.width()
      var blockPosition   = $block.position();
      var truckPosition   = deliveryRescue.$truck.position();
      var intersectPoint  = deliveryRescue.$middle.height() - $block.height() - deliveryRescue.$truck.height();
      //var intersectHoriz  = deliveryRescue.$middle.width() - $block.width() - deliveryRescue.$truck.width();
      var intersectMargin = 5;
      if ((blockPosition.top - intersectPoint) >= 0 && (blockPosition.top - intersectPoint) < intersectMargin &&
          ((truckPosition.left < blockPosition.left) && (truckPosition.left + 100) > (blockPosition.left + 50))){ 
          //(truckPosition.left - blockPosition.left) < $block.width()) {
        var prevScore = parseInt(deliveryRescue.$score.html());
        deliveryRescue.$score.html(prevScore += 1); 
        $block.remove();
      } else {
        // Check if it's at the bottom
      }
    }
  })

  var workingBox = "#" + deliveryRescue.currentBoxId;
  deliveryRescue.arrayOfBoxes.push(deliveryRescue.currentBoxId);

  setTimeout(function() {
    $(workingBox).remove()

    deliveryRescue.arrayOfBoxes.splice(workingBox, 1);
  }, deliveryRescue.speed);

  deliveryRescue.currentBoxId++;
}

deliveryRescue.timerFunction = function() {
  deliveryRescue.timerInterval = setInterval(function() { 
    deliveryRescue.timerCounter++;
  }, 1000);
}

deliveryRescue.clickButtons = function() {
  if (deliveryRescue.$notify.css("display") === "block") {
    if ($(this).attr('id') === "clearNotifyBox") {
      deliveryRescue.$clearNotify.css("display", "none");
      deliveryRescue.$notify.css("display", "none");
      
      deliveryRescue.boxInterval = setInterval(function() {
        deliveryRescue.generateBox()
      },1500);

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

deliveryRescue.bindArrowKeys = function(e){
  var event = window.event ? window.event : e;
  deliveryRescue.truckPosition = parseInt(deliveryRescue.$truck.css("left").replace("px", ""))

  var farLeft  = deliveryRescue.$middle.position().left;
  var farRight = farLeft + deliveryRescue.$middle.width() - deliveryRescue.$truck.width();

  switch (event.keyCode) {
    case 37: 
      if (deliveryRescue.truckPosition === farLeft) return;
      deliveryRescue.truckPosition += -20;
      break;
    case 39:
      if (deliveryRescue.truckPosition === farRight) return;
      deliveryRescue.truckPosition += 20; 
      break;
  }
  

  return deliveryRescue.$truck.css("left", deliveryRescue.truckPosition);
}

deliveryRescue.addListeners = function() {
  this.$buttons.on("click", deliveryRescue.clickButtons);
  $(document).keydown(deliveryRescue.bindArrowKeys);
}

deliveryRescue.setup = function() {
  this.timerCounter = 0;
  this.currentBoxId = 0;
  this.score        = 0;
  this.health       = 10;
  this.arrayOfBoxes = [];
  this.boxWidth     = 50;
  this.speed        = 3000;
  this.$buttons     = $(".buttons");
  this.$notify      = $("#notifyBox");
  this.$middle      = $("#middle");
  this.$truck       = $('#truck');
  this.$score       = $('.score');
  this.$clearNotify = $('#clearNotifyBox');
  this.boxInterval;
  this.timerInterval;
  deliveryRescue.addListeners();
}

$(document).ready(deliveryRescue.setup.bind(deliveryRescue));