$(function () {



    $.each(['#f00', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', '#000', '#fff'], function () {
        $('#colors_demo .tools').append("<a href='#colors_sketch' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a> ");
    });
    $.each([3, 5, 10, 15], function () {
        $('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: #ccc'>" + this + "</a> ");
    });

    var sketch = null;

    if (sketch == null) {
        console.log('Setting Sketch');
        sketch = $('#colors_sketch').sketch({ defaultColor: "#000" });
    } else {
        console.log("NEED TO CLEAR.");
        console.log(sketch);
        $('#colors_sketch').clear();
    }

    $(window).resize(function () {
        Resize();
    });

    function Resize() {
        var windowHeight = jQuery(window).height();
        $("#colors_demo").height(windowHeight - 50);
    }

});
