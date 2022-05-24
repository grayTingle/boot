var color = $(".selected").css("background-color");
var $canvas = document.getElementById("myCanvas");
var context = $canvas.getContext("2d");
var lastEvent;
var mouseDown = false;

//when clicking on control list items
$(".controls").on("click", "li", function() {
  //deselect sibling elements
  $(this).siblings().removeClass("selected");
  //select clicked element
  $(this).addClass("selected");
  //cache the current color
  color = $(this).css("background-color");
});

//when you hit new color
$("#revealColorSelect").click(function() {
  //color select show or hide
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}

//when color sliders change
$("input[type=range]").change(changeColor);

//when you hit add color
$("#addNewColor").click(function() {
  //put it in the ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //select the new color
  $newColor.click();
});

//when you  do a draw and hold down your mouse
$canvas.onmousedown=function(e) {
  lastEvent = e;
  mouseDown = true;
}
$canvas.onmousemove=function(e) {

  //please actually draw something
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.lineWidth = 4;
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}
$canvas.onmouseup=function() {
  mouseDown = false;
}
$canvas.onmouseleave=function() {
  $canvas.onmouseup();
}