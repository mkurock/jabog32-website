$(function () {
    console.log("ready");
    var imageCount = $(".jabog-image-slider > div").length - 1;
    var images = $(".jabog-image-slider > div");
    var current = 0;
    
    setInterval(slide, 8000);

    function slide() {
        $(images[current]).fadeOut(1500);
        var next = current + 1 > imageCount ? 0 : current + 1;
        $(images[next]).fadeIn(1500);
        current = next;
    }
});