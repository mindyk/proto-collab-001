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

        g.opms = document.getElementById('pms');
        g.ops = document.getElementById('pac');
        g.opf = document.getElementById('pf');

        setInterval(g.slupdate, 500);
        setInterval(g.update, 1000/60);

        requestAnimationFrame(g.draw);
    },

    slupdate : function () {
        var pms = parseInt(g.opms.value),
            ps = parseInt(g.ops.value),
            pf = parseFloat(g.opf.value);

        p.ms = pms;
        p.s = ps;
        p.f = pf;

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
        var col = false,
            o1 = {
                tl : {x : obj1.cx + p.vX, y:obj1.cy + p.vY},
                tr : {x : obj1.cx + obj1.cw + p.vX , y: obj1.cy + p.vY},
                bl : {x : obj1.cx + p.vX, y: obj1.cy + obj1.ch + p.vY},
                br : {x : obj1.cx + obj1.cw + p.vX, y: obj1.cy + obj1.ch + p.vY}
            };

        // top left corner
        // obj1
        if (o1.tl.x > obj2.cx && o1.tl.x < obj2.cx + obj2.cw) {
            if(o1.tl.y > obj2.cy && o1.tl.y < obj2.cy + obj2.ch) {
                col = true;
            }
        }
        // obj2
        if (obj2.cx > o1.tl.x && obj2.cx < o1.tr.x) {
            // top left
            if (obj2.cy > o1.tl.y && obj2.cy < o1.bl.y) {
                col = true;
            }
            // bottom left
            if (obj2.cy + obj2.ch > o1.tl.y && obj2.cy + obj2.ch < o1.bl.y) {
                col = true;
            }
        }

        // top right corner
        if (o1.tr.x > obj2.cx && o1.tr.x < obj2.cx + obj2.cw ) {
            if (o1.tr.y > obj2.cy && o1.tr.y < obj2.cy + obj2.ch) {
                col = true;
            }
        }
        var cx = obj2.cx + obj2.cw;
        if (cx > o1.tl.x && cx < o1.tr.x) {
            if (obj2.cy > o1.tl.y && obj2.cy < o1.bl.y) {
                col = true;
            }
        }

        return col;
    }
};





g.init();