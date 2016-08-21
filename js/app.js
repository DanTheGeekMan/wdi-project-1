var deliveryRescue = deliveryRescue || {}

// deliveryRescue.getButtons = function() {
//   this.buttons = document.querySelectorAll(".buttons");
//   console.log("Buttons " + this.buttons + ".");
// }
// deliveryRescue.addListeners = function(addListenerTo) {
//   for (var i = 0; i < addListenerTo.length; i++) {
//     addListenerTo[i].addEventListener("click", function(){
// this.test = event.target.getAttribute('id');
//       console.log("hello world " + this.test + ".");});
//   }
// }













deliveryRescue.setup = function() {
  $.buttonsVar = $('.buttons')
console.log("buttons are " + $.buttonsVar);
  // this.getButtons();
  // this.addListeners(this.buttons);
}

$(document).ready(deliveryRescue.setup);

// window.addEventListener("DOMContentLoaded", deliveryRescue.setup.bind(deliveryRescue));
