var deliveryRescue = deliveryRescue || {}

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