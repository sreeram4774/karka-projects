//Animate my counter from 0 to set number (6)
$({counter: 0}).animate({counter: 210}, {
    //Animate over a period of 2seconds
    duration: 4000,
    //Progress animation at constant pace using linear
    easing:'linear',
    step: function() {    
      //Every step of the animation, update the number value
      //Use ceil to round up to the nearest whole int
      $('.total').text(Math.ceil(this.counter))
    },

    complete: function() {
      //Could add in some extra animations, like a bounc of colour change once the count up is complete.
    }
  });

  $({counter: 0}).animate({counter: 450}, {
    //Animate over a period of 2seconds
    duration: 4000,
    //Progress animation at constant pace using linear
    easing:'linear',
    step: function() {    
      //Every step of the animation, update the number value
      //Use ceil to round up to the nearest whole int
      $('.totals').text(Math.ceil(this.counter))
    },

    complete: function() {
      //Could add in some extra animations, like a bounc of colour change once the count up is complete.
    }
  });

  $({counter: 0}).animate({counter: 50}, {
    //Animate over a period of 2seconds
    duration: 4000,
    //Progress animation at constant pace using linear
    easing:'linear',
    step: function() {    
      //Every step of the animation, update the number value
      //Use ceil to round up to the nearest whole int
      $('.totalss').text(Math.ceil(this.counter))
    },

    complete: function() {
      //Could add in some extra animations, like a bounc of colour change once the count up is complete.
    }
  });

  $({counter: 0}).animate({counter: 100}, {
    //Animate over a period of 2seconds
    duration: 4000,
    //Progress animation at constant pace using linear
    easing:'linear',
    step: function() {    
      //Every step of the animation, update the number value
      //Use ceil to round up to the nearest whole int
      $('.totalsss').text(Math.ceil(this.counter))
    },

    complete: function() {
      //Could add in some extra animations, like a bounc of colour change once the count up is complete.
    }
  });