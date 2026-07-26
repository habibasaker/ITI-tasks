  var orangeImage = "/images/marble1.jpg";
  var grayImage = "/images/marble3.jpg";

  var currentPosition = 0;
  var totalMarbles = 5;
  var timer;

  function moveMarble() {
    document.getElementById("marble" + currentPosition).src = grayImage;

    currentPosition++;
    if (currentPosition >= totalMarbles) {
      currentPosition = 0;
    }
//hena hy7rek e
    document.getElementById("marble" + currentPosition).src = orangeImage;
  }
//byt7rak kol sanya
  function startAnimation() {
    timer = setInterval(moveMarble, 1000);
  }
// lama 22af b el mouse 
  function stopAnimation() {
    clearInterval(timer);
  }

  document.getElementById("marble0").src = orangeImage;
  startAnimation();
//y7arekk el lon
  for (var i = 0; i < totalMarbles; i++) {
    var marbleImg = document.getElementById("marble" + i);
// lama a7ot tl mouse emshi
    marbleImg.onmouseover = function() {
      stopAnimation();
    };
// lama ashel el mouse at7arek
    marbleImg.onmouseout = function() {
      startAnimation();
    };
  }