var deliveryRescue = deliveryRescue || {}

deliveryRescue.clickButtons = function() {
  console.log("Clicked buttons is " + $(this).attr("id"));
}

deliveryRescue.addListeners = function() {
  $('.buttons').on("click", deliveryRescue.clickButtons);
}

deliveryRescue.setup = function() {
  deliveryRescue.addListeners();
}

$(document).ready(deliveryRescue.setup.bind(deliveryRescue));