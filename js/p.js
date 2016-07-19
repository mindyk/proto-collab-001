p = {
    x :100,
    y : 100,
    h : 16,
    w : 16,
    s : 1, // speed
    ms : 2, // max speed
    f : 0.50,
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
    stemp : null,
    inMove : 0,
    tick : 0,

    W : null,
    A: null,
    S: null,
    D: null,
    cpress : 0,

    init : function (img) {
        p.img = img;
    },

    draw : function () {
        var ams = 100   ;
        // calc delta for animation speed
        var delta = Date.now() - p.stemp;
        // draw current sprite
        c2d.drawImage(p.img, 16 * p.step ,p.sprites[p.d].y,16, 16, p.x, p.y,32,32);
        // if we are moving and animation delta treshold is reached we use the next frame in sprite
        if (p.cpress > 0 && delta > ams) {
            p.step += 1;
            p.stemp = Date.now();
        // finish animation even without movement
        } else if (p.step != 0 && delta > ams) {
            p.step += 1;
            p.stemp = Date.now();
        }
        // reset animation steps
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

        // add speed to current velocity
        if (p.W) {
            p.vY -= p.s;
        }
        if (p.A) {
            p.vX -= p.s;
        }
        if (p.S) {
            p.vY += p.s;
        }
        if (p.D) {
            p.vX += p.s;
        }

        // cap velocity on max speed
        if (p.vY > p.ms) {
            p.vY = p.ms;
        }
        if (p.vY < p.ms * -1) {
            p.vY = p.ms * -1;
        }
        if (p.vX > p.ms) {
            p.vX = p.ms;
        }
        if (p.vX < p.ms * -1) {
            p.vX = p.ms * -1;
        }

        // calc center of player
        p.cX = p.x + p.w / 2;
        p.cY = p.y + p.h / 2;

        // regress velocity by factor x
        p.vX *= p.f;
        p.vY *= p.f;

        // add velocity to current positions
        p.x += p.vX;
        p.y += p.vY;

        if(p.vX != 0) {
            p.inMove = 1;
        } else {
            p.inMove = 0;
        }

        // detect direction using keys pressed
        if (p.cpress == 1) {
            if(p.W) {
                p.d = 'N';
            }
            if (p.A) {
                p.d = 'W';
            }
            if (p.S) {
                p.d = 'S';
            }
            if (p.D) {
                p.d = 'E';
            }
        } else if (p.cpress >= 2) {
            if (p.W && p.D) {
                p.d = 'NE';
            }
            if (p.W && p.A) {
                p.d = 'NW';
            }
            if (p.S && p.D) {
                p.d = 'SE';
            }
            if (p.S && p.A) {
                p.d = 'SW';
            }
        }

        if (p.tick % 100 == 0) {
            console.log(p.cpress);
        }
    },

    keyup : function (e) {
        console.log(e.which, 'up');
        switch (e.which) {
            case 87 :  // W
                p.cpress -= 1;
                p.W = false;
                break;
            case 65:    // A
                p.cpress -= 1;
                p.A = false;
                break;
            case 83 :  // S
                p.cpress -= 1;
                p.S = false;
                break;
            case 68 :  // D
                p.cpress -= 1;
                p.D = false;
                break;
        }
    },

    keydown: function (e) {
        console.log(e.which, 'down' );
        switch (e.which) {
            case 87 :  // W
                if (!p.W) {
                    p.cpress += 1;
                }
                p.W = true;
                break;
            case 65:    // A
                if (!p.A) {
                    p.cpress += 1;
                }
                p.A = true;
                break;
            case 83 :  // S
                if (!p.S) {
                    p.cpress += 1;
                }
                p.S = true;
                break;
            case 68 :  // D
                if (!p.D) {
                    p.cpress += 1;
                }
                p.D = true;
                break;
        }
    }
};
