p = {
    x :100,
    y : 100,
    h : 16,
    w : 16,
    s : 1, // speed
    ms : 20, // max speed
    f : 0.98,
    vX : 0,
    vY : 0,
    cX : null, // center x
    cY : null, // center y
    img : null,
    d : 'S', // N, NE, E, SE, S, SW, W, NW
    sprites : {
        'S': {x:0, y:0},
        'W': {x:0, y:16},
        'E': {x:0, y:32},
        'N': {x:0, y:48},
        'SW': {x:0, y:64},
        'SE': {x:0, y:80},
        'NE': {x:0, y:96},
        'NW': {x:0, y:112},

    },
    step :0,
    inMove : 0,
    tick : 0,

    init : function (img) {
        p.img = img;
    },

    draw : function () {

        c2d.drawImage(p.img, 16 * p.step ,p.sprites[p.d].y,16, 16, p.x, p.y,16,16);
        if (p.inMove != 0) {
        p.step += 1;
        }
        if (p.step == 3) {
            p.step = 0;
        }
        // cursor
        c2d.beginPath();
        c2d.moveTo(p.cX, p.cY);
        c2d.lineTo(m.x, m.y);
        //c2d.stroke();
    },

    update : function () {
        p.tick += 1;
        p.cX = p.x + p.w / 2;
        p.cY = p.y + p.h / 2;
        p.vX *= p.f;
        p.vY *= p.f;
        p.x += p.vX;
        p.y += p.vY;

        if(p.vX != 0) {
            p.inMove = 1;
        } else {
            p.inMove = 0;
        }
        if (p.tick % 100 == 0) {
            console.log(p.vX);
        }
    },

    handle: function (e) {
        //console.log(e.which);
        switch (e.which) {
            case 119 :  // W
                p.vY -= p.s;
                p.d = 'N';
                break;
            case 97:    // A
                p.vX -= p.s;
                p.d = 'W';
                break;
            case 115 :  // S
                p.vY += p.s;
                p.d = 'S';
                break;
            case 100 :  // D
                p.vX += p.s;
                p.d = 'E';
                break;
        }
    }
};
