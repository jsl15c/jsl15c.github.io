$(document).ready(() => {
  $('.container-padding').css('opacity', '1');
  $('.container-padding').css('transform', 'translateY(0)');
  $('.menu').css('display', 'block');
  $('.btn').click(()=> {
    if ($('.btn').hasClass('active')) {
      $('.a').toggleClass('one-full-height');
      $('.b').toggleClass('two-full-width');
      $('.btn').toggleClass('active');
      // $('.btn>span').toggleClass('active-color');
      $('.menu').toggleClass('open');
      $('.btn span')[0].innerHTML = 'menu';
      $('.slide-info').removeClass('slide-active');
      $('.slide-info div').removeClass('block');
      setTimeout(()=> {
        $('.a').toggleClass('one-full-width');
        $('.b').toggleClass('two-full-height');
      }, 250);
    }
    else {
      $('.a').toggleClass('one-full-width');
      $('.b').toggleClass('two-full-height');
      $('.btn').toggleClass('active');
      // $('.btn>span').toggleClass('active-color');
      $('.menu').toggleClass('open');
      $('.btn span')[0].innerHTML = 'close';
      setTimeout(()=> {
        $('.a').toggleClass('one-full-height');
        $('.b').toggleClass('two-full-width');
      }, 250);
    }
  });

  $('.about').click(()=> {
    $('.slide-info').addClass('slide-active');
    $('.slide-info .about-info').addClass('block');
  });

  $('.projects').click(()=> {
    $('.slide-info').addClass('slide-active');
    $('.slide-info .projects-info').addClass('block');
  });

  $('.skills').click(()=> {
    $('.slide-info').addClass('slide-active');
    $('.slide-info .skill-info').addClass('block');
  });

  $('.close-info').click(()=> {
    $('.slide-info').removeClass('slide-active');
    $('.slide-info div').removeClass('block');
  });
  // animateColor();
  get
});

function animateColor() {
  let decreaseColor = false;
  let decreasePercent = false;
  let colorCounter = 0;
  let angleCounter = 0;
  let percentCounter = 100;

  let cssFunction;
  if (/Chrome/.test(navigator.userAgent) || /Safari/.test(navigator.userAgent)) {
    cssFunction = ((angleCounter, colorCounter, percentCounter) => {
      $('.gradient-box').css('background-image',
      `-webkit-linear-gradient(-${angleCounter}deg, #8100FF 0%, rgb(${colorCounter}, 178, 254) ${percentCounter}%)`
    );
  });

  } else {
    cssFunction = (() => {
      $('.gradient-box').css('background-image',
      `linear-gradient(-${angleCounter}deg, #8100FF 0%, rgb(${colorCounter}, 178, 254) ${percentCounter}%)`
      );
    });
  }
  setInterval(() => {
    // controls angleCounter
    angleCounter++;
    // entire block controls colorCounter
    if (colorCounter === 256) {
      decreaseColor = !decreaseColor;
      colorCounter--;
    }
    else if (decreaseColor === true) {
      if (colorCounter === 0) {
        decreaseColor = !decreaseColor;
      }
      else {
        colorCounter--;
      }
    }
    else {
      colorCounter++;
    }
    cssFunction(angleCounter, colorCounter, percentCounter);
  }, 10);
}

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime; 
  if (date.getSeconds() % 2 == 0) {
    strTime = hours + ':' + minutes + ' ' + ampm;
  } else {
    strTime = hours + ' ' + minutes + ' ' + ampm;
  }
  $('.fun-data .time').text(strTime)
}

formatAMPM(new Date());
setInterval(function () {
  formatAMPM(new Date());
}, 1000)
