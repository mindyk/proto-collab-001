var el_canvas = document.getElementById('playground'),
    c2d = el_canvas.getContext("2d");

g = {
    x : 0,
    y : 0,
    w : 800,
    h : 600,
    d : [],
    tick: 0,
    time : 12,
    stamp : null,
    shadow : null,

    init: function () {
        console.log('g.init');

        m.init();
        // trees
        var img = new Image();
        img.src = 'img/tree.png';
        for (var i = 0; i < 10; i++) {
            g.d.push(new Tree(img));
        }
        // grass
        var gImg = new Image();
        gImg.src = 'img/grass.png';
        for (var ig = 0; ig < 10; ig++) {
            g.d.push(new Grass(gImg));
        }
        // grass
        var sImg = new Image();
        sImg.src = 'img/stone.png';
        for (var is = 0; is < 10; is++) {
            g.d.push(new Stone(sImg));
        }

        // player
        var pImg = new Image(),
            shadowImg = new Image();
            pImg.src = 'img/p2.png';
            shadowImg.src = 'img/shadow.png';
        g.shadow = shadowImg;

        p.init(pImg, shadowImg);

        g.stamp = Date.now();

        document.onmousemove = m.handle;
        document.onkeydown = p.keydown;
        document.onkeyup = p.keyup;
        setInterval(g.update, 1000/60);
        requestAnimationFrame(g.draw);
    },

    update : function () {
        g.tick += 1;

        if (g.tick % 20 == 0) {
            // time
            if (Date.now() - g.stamp > 1000) {
                g.time += 1;
                g.stamp = Date.now();
                if (g.time > 24) {
                    g.time = 1;
                }
            }
        }
        p.update();
    },

    draw : function () {
        c2d.clearRect(0,0,800,600);

        // background
        c2d.fillStyle = '#AA896A';
        c2d.fillRect(0,0,800,600);

        c2d.fillStyle = 'black';

        p.draw();


        for(var i = 0; i < g.d.length; i++) {
            var t = g.d[i];
            t.draw(c2d);
        }

        mm.draw();

        // time
        c2d.fillText(g.time, 25, 25);

        requestAnimationFrame(g.draw);
    },

    colission : function(obj1, obj2) {
        var col = false;

        // top left corner
        // obj1
        if (obj1.cx > obj2.cx && obj1.cx < obj2.cx + obj2.cw) {
            if(obj1.cy > obj2.cy && obj1.cy < obj2.cy + obj2.ch) {
                col = true;
            }
        }
        // obj2
        if (obj2.cx > obj1.cx && obj2.cx < obj1.cx + obj1.cw) {
            // top left
            if (obj2.cy > obj1.cy && obj2.cy < obj1.cy + obj1.ch) {
                col = true;
            }
            // bottom left
            if (obj2.cy + obj2.ch > obj1.cy && obj2.cy + obj2.ch < obj1.cy +obj1.ch) {
                col = true;
            }
        }

        // top right corner
        var cx = obj1.cx + obj1.cw;
        if (cx > obj2.cx && cx < obj2.cx + obj2.cw ) {
            if (obj1.cy > obj2.cy && obj1.cy < obj2.cy + obj2.ch) {
                col = true;
            }
        }
        cx = obj2.cx + obj2.cw;
        if (cx > obj1.cx && cx < obj1.cx + obj1.cw) {
            if (obj2.cy > obj1.cy && obj2.cy < obj1.cy + obj1.ch) {
                col = true;
            }
        }

        // bottom left corner

        return col;
    }
};





g.init();