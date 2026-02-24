

var phi = (1 + Math.sqrt(5)) / 2;
var spiralRadius = 100;
var maxT = Math.log(spiralRadius) / Math.log(phi);
var startShift = Math.PI / 3;

var maxWidth = 600;

var fontSizes = [6, 14, 28, 36, 48];
var maxFontSize = 48;
var minFontSize = 0;

function arrange(scroll) {
    var children = $(".spiral-div");
    
    
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var t = maxT * (i + 1) * 1.0 / (children.length + 1) + scroll + startShift;
        var r = Math.pow(phi, t);
        
        var x = r * Math.cos(t);
        var y = r * Math.sin(t);
        
        var cx = 65 + 50.0 / spiralRadius * x;
        var cy = 50 + 50.0 / spiralRadius * y;
        
        var maxDist = (Math.pow(phi, t) - Math.pow(phi, t - 2 * Math.PI)) * 50 / spiralRadius * 10;
        var width = Math.min(maxDist, maxWidth);
        var ratio = $(child).height() / $(child).width();

        var fontSize = Math.max(minFontSize, Math.min(maxFontSize, width / maxWidth * maxFontSize));
        
        $(child).css(
            {
                "left": cx + "%",
                "top": cy + "%",
                "width": width + "px",
                "height": ratio * width + "px",
                "font-size": fontSize + "px"
            });
        $(child).find(".spiral-contents").css(
            {

                "border-right": (width / 75.0) + "px solid #E249D7",
                "border-bottom": (width / 75.0) + "px solid #E249D7"
            });
    }
}

$(window).scroll(function() {
    arrange(($(document).scrollTop()) / ($(".scrollDummy").height() - $(window).height()) * (maxT - startShift - 0.22));
});

$("document").ready(function() {
    arrange(0);
});