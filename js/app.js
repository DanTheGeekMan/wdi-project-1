var deliveryRescue = deliveryRescue || {}

deliveryRescue.moveTruck = function(direction){
  deliveryRescue.truckPosition = $('#truck').css("left")  
  console.log("String without px " + deliveryRescue.truckPosition.replace("px", ""))
  console.log("Value of truckPosition "+ deliveryRescue.truckPosition + ".");
  console.log("Length of truckPosition strig " + deliveryRescue.truckPosition.length);
  console.log("Position is " + deliveryRescue.truckPosition);
  if (direction === "left_button") {
    deliveryRescue.moveDirection += -10;
    console.log("Move left");
  } else {
    deliveryRescue.moveDirection += 10;
    console.log("Move right");
  }
  deliveryRescue.truckPosition = "200px";
  $('#truck').css("left", deliveryRescue.truckPosition);
}

deliveryRescue.resetGame = function(){
  console.log("Reset function called.")
  }

deliveryRescue.clickButtons = function() {
  if ($(this).attr("id") === "reset_button") {
    deliveryRescue.resetGame();
      } else {
      deliveryRescue.moveTruck($(this).attr("id"));
  }
}

deliveryRescue.addListeners = function() {
  $('.buttons').on("click", deliveryRescue.clickButtons);
  // $(function(){
  //   $('div').on("click", function() {
  //     var $element = $(this);
  //     $element.hide("slow", "swing", function(){
  //       setTimeout(function(){
  //         $element.show();
  //       }, 1000);
  //     });
  //   });
  // });
}

deliveryRescue.setup = function() {
  deliveryRescue.addListeners();
}

$(document).ready(deliveryRescue.setup.bind(deliveryRescue));