p = {
    x :100,
    y : 100,
    h : 20,
    w : 20,
    v : 1,
    cX : null,
    cY : null,

    draw : function () {
        // player
        c2d.fillRect(p.x, p.y, p.w, p.h);

        // cursor
        c2d.beginPath();
        c2d.moveTo(p.cX, p.cY);
        c2d.lineTo(m.x, m.y);
        c2d.stroke();
    },

    update : function () {
        p.cX = p.x + p.w / 2;
        p.cY = p.y + p.h / 2;
    },

    handle: function (e) {
        //console.log(e.which);
        switch (e.which) {
            case 119 :  // W
                p.y -= 10;
                break;
            case 97:    // A
                p.x -= 10;
                break;
            case 115 :  // S
                p.y += 10;
                break;
            case 100 :  // D
                p.x += 10;
                break;
        }
    }
};
