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
    $("#box").css('display', "block");
    var $dropDiv = $('#dropDiv');
    $('#holder a').on('click', function() {
        var offset = $(this).offset(); // get position of the element we clicked on
        var h = $(this).outerHeight(); // get width/height of click element
        var w = $(this).outerWidth();
        var dh = $dropDiv.outerHeight(); // get width/height of drop element
        var dw = $dropDiv.outerWidth();
        var initLeft = offset.left + ((w/2) - (dw/2)); // determine middle position
        
        $dropDiv.css({ // animate drop
                left: initLeft,
                top: $(window).scrollTop() - dh,
                opacity: 0,
                display: 'block'
            }).animate({
                left: initLeft,
                top: offset.top - dh,
                opacity: 1
            }, 2500, 'easeOutBounce');
    });
  }

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