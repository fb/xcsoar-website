/*
 * Assign .qrcode to an element and all children of type a will get a
 * qr-tooltip when hovering over it
 */
$(document).ready(function() {
  var wto;

  $("#qrcode").length || $("body").append('<div style="display:none; position:absolute;" id="qrcode"></div>');

  $(".qrcode a").hover(function() {
    clearTimeout(wto);
    var link = $(this)
    wto = setTimeout(function() {
      // hover over
      $("#qrcode").empty().fadeIn().qrcode({
        width: 128,
        height: 128,
        text: link.attr('href')
      });
    }, 300);
  }, function() {
    // hover out
    $("#qrcode").fadeOut();
  }).mousemove(function(e) {
    var mousex = e.pageX + 20; //Get X coordinates
    var mousey = e.pageY - 32; //Get Y coordinates
    $('#qrcode')
      .css({ top: mousey, left: mousex })
  });
});
