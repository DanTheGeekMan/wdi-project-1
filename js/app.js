var deliveryRescue = deliveryRescue || {}

deliveryRescue.moveTruck = function(){
  console.log("ID " + $(this).attr("Id"))
  if ($(this).attr("id") === "right_button") {
    deliveryRescue.moveDirection = -10;
    console.log("Move right");
  } else {
    deliveryRescue.moveDirection = 10;
    console.log("Move left");
  }
}

deliveryRescue.resetGame = function(buttonId){
  console.log("Reset function called.")
  console.log("Clicked buttons is " + buttonId);
}

deliveryRescue.clickButtons = function() {
  if ($(this).attr("id") === "reset_button") {
    console.log("reset event check 1" + $(this).attr("id"))
    deliveryRescue.resetGame($(this).attr("id"));
    console.log("reset event check last" + $(this).attr("id"))
      } else {
      deliveryRescue.moveTruck();
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