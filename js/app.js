var deliveryRescue = deliveryRescue || {}
//var $timer = $('#timer');
//var $startStop = $timer.find('#startStop');
//var $reset = $timer.find('#reset');
//var $screen = $timer.find('#screen');
var ms = 0;
var s = 0;
var timer;

deliveryRescue.moveTruck = function(direction){
  deliveryRescue.truckPosition = parseInt($('#truck').css("left").replace("px", ""))
  if (direction === "left_button") {
    deliveryRescue.truckPosition += -10;
  } else {
    deliveryRescue.truckPosition += 10; }
    $('#truck').css("left", deliveryRescue.truckPosition);
    console.log("Timer " + s)
  }

  deliveryRescue.resetGame = function(){
    $('#truck').css("left", 290);
  }

  deliveryRescue.clickButtons = function() {
    if ($("#notifyBox").css("display") === "block") {
      if ($(this).attr('id') === "clearNotifyBox") {
       $('#clearNotifyBox').css("display", "none");
       $('#notifyBox').css("display", "none");
       deliveryRescue.timer();     
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

deliveryRescue.timer = function() {
  function padNum(num) {
    return num < 10 ? "0" + num : String(num);
  }
  //$startStop.on("click", function() {
    if(!$timer.hasClass('running')) {
      $timer.addClass('running');
      timer = setInterval(function() {
        ms++;
        if(ms > 99) {
          ms = 0;
          s++;
        }
        $screen.text(padNum(s));
      }, 10);
    } else {
      $timer.removeClass('running');
      clearTimeout(timer);
    }
  //});
  $reset.on('click', function() {
    $timer.removeClass('running');
    clearTimeout(timer);
    $screen.text("00");
    ms = 0;
    s = 0;
  });
};


deliveryRescue.setup = function() {
  deliveryRescue.addListeners();
}


$(document).ready(deliveryRescue.setup.bind(deliveryRescue));