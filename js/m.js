// MOUSE
m = {
    x : 0,
    y: 0,
    r : null,

    init : function () {
        m.r = el_canvas.getBoundingClientRect();

    },

    handle : function (e) {
        m.x = e.pageX - m.r.left;
        m.y = e.pageY - m.r.top;
    }
};